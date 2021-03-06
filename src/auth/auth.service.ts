import { PrismaService } from "nestjs-prisma";
// import { PrismaService } from 'prisma/prisma.service';
import { Prisma, User, UserStatus } from "@prisma/client";
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  UnauthorizedException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PasswordService } from "./password.service";
import { SignupInput } from "./dto/signup.input";
import { Token } from "./models/token.model";
import { SecurityConfig } from "../common/configs/config.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService
  ) {}

  async createUser(payload: SignupInput): Promise<Token> {
    const hashedPassword = await this.passwordService.hashPassword(
      payload.password
    );

    try {
      const user = await this.prisma.user.create({
        data: {
          ...payload,
          password: hashedPassword,
          role: {
            connect: {
              name: "DEFAULT"
            }
          },
          status: UserStatus.VALIDATION_PENDING
        }
      });

      return this.generateTokens({
        userId: user.id
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2002"
      ) {
        throw new ConflictException(
          `Username ${payload.userName} is already used.`
        );
      } else {
        throw new Error(e);
      }
    }
  }

  async login(userName: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({ where: { userName } });

    if (!user) {
      console.log("ran");
      throw new NotFoundException(`No user found for username: ${userName}!`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password
    );

    if (!passwordValid) {
      throw new BadRequestException("Your entered a wrong password!");
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
