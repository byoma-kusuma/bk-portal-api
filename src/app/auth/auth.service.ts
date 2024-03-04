import { PrismaService } from "nestjs-prisma";
import { User } from "@prisma/client";
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PasswordService } from "./password.service";
import { Token } from "./models/token.model";
import { SecurityConfig } from "../../common/configs/config.interface";
import { EmailService } from "../email/email.service";
import { PasswordTokenService } from "../password-token/password-token.service";
import { ResetPasswordInput } from "./dto/reset-password.input";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly passwordTokenService: PasswordTokenService
  ) {}

  async login(userName: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({ where: { userName } });

    if (!user) {
      throw new NotFoundException(`No user found for username: ${userName}!`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password
    );
    if (!passwordValid) {
      throw new BadRequestException("You entered a wrong password!");
    }

    if (user.status === "VALIDATION_PENDING") {
      throw new BadRequestException(
        "Validation is pending for this user! Please contact system administrator!"
      );
    }

    return this.generateTokens({
      userId: user.id
    });
  }

  validateUser(userId: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  getUserFromToken(token: string): Promise<User | null> {
    const idDecoded = this.jwtService.decode(token);
    if (typeof idDecoded === "string") {
      return this.prisma.user.findUnique({ where: { id: Number(idDecoded) } });
    } else {
      if (idDecoded) {
        return this.prisma.user.findUnique({
          where: { id: idDecoded["userId"] }
        });
      }
      return Promise.resolve(null);
    }
  }

  generateTokens(payload: { userId: number }): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload)
    };
  }

  private generateAccessToken(payload: { userId: number }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: number }): string {
    const securityConfig = this.configService.get<SecurityConfig>("security");
    return this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_REFRESH_SECRET"),
      expiresIn: securityConfig?.refreshIn
    });
  }

  async resetPassword(resetPasswordInput: ResetPasswordInput): Promise<void> {
    const { userId, password, token } = resetPasswordInput;
    const isTokenValid = await this.passwordTokenService.verifyAndRevoke(
      userId,
      token
    );
    if (!isTokenValid) {
      throw new ForbiddenException("Cannot process this request");
    }
    const hashedPassword = await this.passwordService.hashPassword(password);
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        password: hashedPassword
      }
    });
  }

  async initiateRequestPassword(userName: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: {
        userName
      },
      include: {
        member: {
          select: {
            id: true,
            email: true
          }
        }
      }
    });
    if (!user || user.isDeleted || !user.member || !user.member.email) {
      return;
    } else {
      const passwordToken = await this.passwordTokenService.create(user.id);

      await this.emailService.sendMail({
        to: user.member.email,
        subject: "Password reset request for BKBDS portal",
        text: `Please click the link below for password reset 
            \n ${this.configService.get(
              "PUBLIC_URI"
            )}/password-reset/verify?token=${passwordToken}&userId=${user.id}`
      });
    }
  }

  refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token, {
        secret: this.configService.get("JWT_REFRESH_SECRET")
      });
      return this.generateTokens({
        userId
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
