import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PasswordToken } from "@prisma/client";
import * as crypto from "crypto";
import * as dayjs from "dayjs";

@Injectable()
export class PasswordTokenService {
  constructor(private readonly prisma: PrismaService) {}

  private generateToken() {
    return crypto.randomBytes(64).toString("hex");
  }

  // ttl in seconds
  private hasExired(ttl: number, token: PasswordToken) {
    if (!token) return true;
    return dayjs(token.createdAt).add(ttl, "s").isBefore(dayjs());
  }

  async create(forUserId: string) {
    await this.prisma.passwordToken.deleteMany({
      where: {
        userId: forUserId
      }
    });
    const passwordToken = await this.prisma.passwordToken.create({
      data: {
        token: this.generateToken(),
        userId: forUserId
      }
    });
    return passwordToken.token;
  }

  async verifyAndRevoke(userId: string, token: string): Promise<boolean> {
    const realToken = await this.prisma.passwordToken.findUnique({
      where: {
        userId
      }
    });

    await this.prisma.passwordToken.delete({
      where: {
        userId
      }
    });

    if (realToken?.token !== token) return false;
    if (this.hasExired(180, realToken)) return false;

    return true;
  }
}
