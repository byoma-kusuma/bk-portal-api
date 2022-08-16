import { PrismaService } from "nestjs-prisma";
// import { PrismaService } from 'prisma/prisma.service';
import { Prisma, User, UserStatus } from "@prisma/client";
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
  InternalServerErrorException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PasswordService } from "./password.service";
import { Token } from "./models/token.model";
import { SecurityConfig } from "../../common/configs/config.interface";
import * as nodemailer from "nodemailer";
import { Otp } from "./otp.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
    private readonly otp: Otp
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

  validateUser(userId: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)["userId"];
    return this.prisma.user.findUnique({ where: { id } });
  }

  generateTokens(payload: { userId: string }): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload)
    };
  }

  private generateAccessToken(payload: { userId: string }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: string }): string {
    const securityConfig = this.configService.get<SecurityConfig>("security");
    return this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_REFRESH_SECRET"),
      expiresIn: securityConfig.refreshIn
    });
  }

  /* async resetPassword(otp: string, userName: string) { */
  /*        */
  /* } */

  async initiateRequestPassword(userName: string) {
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
      throw new InternalServerErrorException(
        "This request cannot be processed!"
      );
    }
    const otp = await this.otp.create(120, user.id);
    const client = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "xamoghx@gmail.com",
        pass: "zhvchnxxzjfcomgw"
      }
    });
    client.sendMail({
      from: "xamoghx@gmail.com",
      to: "xamoghx@gmail.com",
      subject: "BK portal password reset",
      text: `Your password reset otp is ${otp}`
    });
    return user;
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
