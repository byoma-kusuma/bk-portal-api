import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateMemberInput } from "./dto/create-member.input";
import { UpdateMemberInput } from "./dto/update-member.input";

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  create(createMemberInput: CreateMemberInput) {
    return this.prisma.member.create({ data: createMemberInput });
  }

  findAll() {
    return this.prisma.member.findMany();
  }

  findOne(id: string) {
    return this.prisma.member.findUnique({
      where: {
        id
      }
    });
  }

  update(id: string, updateMemberInput: UpdateMemberInput) {
    return this.prisma.member.update({
      data: updateMemberInput,
      where: {
        id
      }
    });
  }

  remove(id: string) {
    return `This action removes a #${id} member`;
  }
}
