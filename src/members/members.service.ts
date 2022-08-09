import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import createAvatar from "src/common/utils/avatar";
import { CreateMemberInput } from "./dto/create-member.input";
import { UpdateMemberInput } from "./dto/update-member.input";

@Injectable()
export class MembersService {
  findMany = this.prisma.member.findMany;
  findUnique = this.prisma.member.findUnique;
  findFirst = this.prisma.member.findFirst;

  constructor(private readonly prisma: PrismaService) {}

  create(createMemberInput: CreateMemberInput) {
    return this.prisma.member.create({
      data: {
        ...createMemberInput,
        photo: createAvatar()
      }
    });
  }

  findAll() {
    return this.prisma.member.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  async findOne(id: string) {
    const member = await this.prisma.member.findFirst({
      where: {
        id
      }
    });

    if (!member) {
      throw new NotFoundException(`Member with id: '${id}' not found`);
    }
    if (member.isDeleted) {
      throw new NotFoundException("Trying to access a deleted member");
    }
    return member;
  }

  async update(id: string, updateMemberInput: UpdateMemberInput) {
    const member = await this.prisma.member.findUnique({ where: { id } });

    if (member.isDeleted) {
      throw new ForbiddenException("This member has been already deleted!");
    }

    return this.prisma.member.update({
      data: updateMemberInput,
      where: {
        id
      }
    });
  }

  async remove(id: string, myId: string) {
    const member = await this.prisma.member.findUnique({
      where: { id },
      include: { user: true }
    });

    if (!member || member.isDeleted) {
      throw new NotFoundException(
        "Member not found or has been deleted already"
      );
    }

    if (myId === member.id) {
      throw new InternalServerErrorException("Cannot delete yourself!");
    }

    const deleteMemberOperation = this.prisma.member.update({
      where: { id },
      data: { isDeleted: true }
    });

    // if member has user, run soft delete queries on transaction
    if (member.user) {
      const deleteUserOperation = this.prisma.user.update({
        where: { id: member.user.id },
        data: {
          isDeleted: true
        }
      });

      await this.prisma.$transaction([
        deleteMemberOperation,
        deleteUserOperation
      ]);
    } else {
      // else just soft delete the member
      await deleteMemberOperation;
    }
    return member;
  }
}
