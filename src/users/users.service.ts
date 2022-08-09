// import { PrismaService } from 'nestjs-prisma';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
  InternalServerErrorException
} from "@nestjs/common";
import { PasswordService } from "../auth/password.service";
import { ChangePasswordInput } from "./dto/change-password.input";
// import { PrismaService } from 'prisma/prisma.service';
import { PrismaService } from "nestjs-prisma";
import { Args } from "@nestjs/graphql";
import { Member } from "@prisma/client";
import { RoleType } from "src/common/constants/global-constants";

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService
  ) {}

  findMany = this.prisma.user.findMany;
  findUnique = this.prisma.user.findUnique;

  async generateUserCredentials(member: Member, rowNumber: number) {
    const password = await this.passwordService.hashPassword(
      (Math.random() * 1000000).toString()
    );
    const userName = `${member.firstName}_${
      member.lastName
    }-${rowNumber.toLocaleString("en-US", {
      minimumIntegerDigits: 6,
      useGrouping: false
    })}`;
    return { userName, password };
  }

  findAll() {
    return this.prisma.user.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
      throw new NotFoundException(`Member with id: '${id}' not found`);
    }
    if (user.isDeleted) {
      throw new NotFoundException("Trying to access a deleted member");
    }
    return user;
  }

  async create({ memberId }: { memberId: string }) {
    const member = await this.prisma.member.findUnique({
      where: {
        id: memberId
      }
    });

    if (!member || member.isDeleted) {
      throw new ForbiddenException(
        "Cannot create user for this member. Member not found!"
      );
    }

    if (!member.active) {
      throw new ForbiddenException(
        "Cannot create user for this member since the member is not active."
      );
    }

    if (!member.isMember) {
      throw new ForbiddenException(
        "Cannot create user for this member since this member is not a non-member."
      );
    }

    const qRow = await this.prisma
      .$queryRaw`select row_number() over(), * from "Member" where "id"=${memberId}`;

    if (!(Array.isArray(qRow) && qRow[0])) {
      throw new InternalServerErrorException(
        "Sorry something went wrong while generating username"
      );
    }

    const { userName, password } = await this.generateUserCredentials(
      member,
      (qRow as [{ row_number: number }])[0].row_number
    );

    console.log(member);

    const user = await this.prisma.user.create({
      data: {
        userName,
        password,
        role: {
          connect: {
            name: RoleType.ADMIN
          }
        },
        member: {
          connect: {
            id: member.id
          }
        }
      }
    });

    return user;
  }

  updateUser(userId: string, newUserData: null) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId
      }
    });
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput
  ) {
    const passwordValid = await this.passwordService.validatePassword(
      changePassword.oldPassword,
      userPassword
    );

    if (!passwordValid) {
      throw new BadRequestException("Invalid password");
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.newPassword
    );

    return this.prisma.user.update({
      data: {
        password: hashedPassword
      },
      where: { id: userId }
    });
  }
}
