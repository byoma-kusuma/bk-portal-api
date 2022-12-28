import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException
} from "@nestjs/common";
import { PasswordService } from "../auth/password.service";
import { ChangePasswordInput } from "./dto/change-password.input";
import { PrismaService } from "nestjs-prisma";
import { Member, UserStatus } from "@prisma/client";
import { SystemRoleTypes } from "../../common/constants/global-constants";
import { v4 as uuidv4 } from "uuid";
import createAvatar from "../../common/utils/avatar";

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService
  ) {}

  findMany = this.prisma.user.findMany;
  findUnique = this.prisma.user.findUnique;

  async generateUserCredentials(member: Member): Promise<{
    userName: string;
    password: string;
  }> {
    const password = await this.passwordService.hashPassword(uuidv4());
    const count = await this.prisma.user.count();
    const userName = `${member.firstName.replace(" ", "-")}-${
      member.lastName
    }-${count + 1}`;
    return { userName, password };
  }

  findAll() {
    return this.prisma.user.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user || user.isDeleted) {
      throw new NotFoundException(
        `Member with id: '${id}' not found or deleted`
      );
    }
    return user;
  }

  async remove(id: number, myId: number) {
    if (myId === id) {
      throw new InternalServerErrorException(
        "Cannot delete yourself as a user"
      );
    }
    const user = await this.prisma.user.update({
      where: { id },
      data: { isDeleted: true }
    });
    return user;
  }

  async create({ memberId }: { memberId: number }) {
    const member = await this.prisma.member.findFirst({
      where: {
        id: memberId,
        isDeleted: false
      },
      include: {
        user: true
      }
    });

    if (!member) {
      throw new InternalServerErrorException(
        "Cannot create user for non-existent or deleted member"
      );
    }

    if (!member.active) {
      throw new InternalServerErrorException(
        "Cannot create user for non-active member"
      );
    }

    if (!member.isMember) {
      throw new InternalServerErrorException(
        "Cannot create user for a non-member type member"
      );
    }

    if (!member.email) {
      throw new InternalServerErrorException(
        "Cannot create admin user for member without an email address"
      );
    }

    if (member.user) {
      // if user was previously soft deleted then restore that user
      if (member.user.isDeleted) {
        return await this.prisma.user.update({
          where: {
            memberId
          },
          data: {
            isDeleted: false
          }
        });
      }
      // else handle relatively concurrent requests
      throw new InternalServerErrorException(
        `This member is already associated to a user with username ${member.user.userName}`
      );
    }

    const { userName, password } = await this.generateUserCredentials(member);

    const user = await this.prisma.user.create({
      data: {
        userName,
        password,
        status: UserStatus.VALIDATED,
        avatar: createAvatar(),
        role: {
          connect: {
            name: SystemRoleTypes.ADMIN
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

  async changePassword(
    userId: number,
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
