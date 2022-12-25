import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateAbhisekhaInput } from "./dto/create-abhisekha.input";
import { UpdateAbhisekhaInput } from "./dto/update-abhisekha.input";

@Injectable()
export class AbhisekhaService {
  findUnique = this.prismaService.abhisekha.findUnique;

  constructor(private prismaService: PrismaService) {}

  create(createAbhisekhaInput: CreateAbhisekhaInput) {
    return this.prismaService.abhisekha.create({
      data: createAbhisekhaInput
    });
  }

  findAll() {
    return this.prismaService.abhisekha.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.abhisekha.findFirst({
      where: {
        isDeleted: false,
        id
      }
    });
  }

  async update(id: number, updateAbhisekhaInput: UpdateAbhisekhaInput) {
    const { abhisekhaMembers, ...updateAbhisekhaArgs } = updateAbhisekhaInput;

    const abhisekha = await this.prismaService.abhisekha.update({
      where: { id },
      data: {
        ...updateAbhisekhaArgs,
        memberAbhisekha: {
          upsert: abhisekhaMembers.map(
            ({ memberId, type, abhisekhaDate, abhisekhaPlace }) => ({
              where: {
                memberId_abhishekaId: {
                  memberId,
                  abhishekaId: id
                }
              },
              update: {
                type,
                abhisekhaDate,
                abhisekhaPlace
              },
              create: {
                member: {
                  connect: {
                    id: memberId
                  }
                },
                type,
                abhisekhaDate,
                abhisekhaPlace
              }
            })
          ),
          deleteMany: {
            abhishekaId: id,
            memberId: {
              notIn: abhisekhaMembers.map((el) => el.memberId)
            }
          }
        }
      }
    });

    return abhisekha;
  }

  remove(id: number) {
    return this.prismaService.abhisekha.update({
      where: { id },
      data: {
        isDeleted: true
      }
    });
  }
}
