import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateAbhisekhaInput } from "./dto/create-abhisekha.input";
import { UpdateAbhisekhaInput } from "./dto/update-abhisekha.input";

@Injectable()
export class AbhisekhaService {
  findUnique = this.prismaService.abhisekha.findUnique;
  findFirst = this.prismaService.abhisekha.findFirst;

  constructor(private prismaService: PrismaService) {}

  /**
   * @param  {CreateAbhisekhaInput} createAbhisekhaInput
   * This function can create data in:
   * 1) Abhisekha Table
   */
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
  /**
   * @param  {number} id
   * @param  {UpdateAbhisekhaInput} updateAbhisekhaInput
   * This function can update:
   * 1) Abhisekha Table
   * 2) AbhisekhaResource Table
   * 3) MemberAbhisekha Table
   */
  async update(id: number, updateAbhisekhaInput: UpdateAbhisekhaInput) {
    const { abhisekhaMemberDetails, resourceIds, ...updateAbhisekhaArgs } =
      updateAbhisekhaInput;

    const abhisekha = await this.prismaService.abhisekha.update({
      where: { id },
      data: {
        /*
          - arguments passed in to update the root abhisekha table
        */
        ...updateAbhisekhaArgs,
        /*
          - arguments to update the resources connected to the abhisekha
          - update only if resourceIds is received
         */
        ...(Array.isArray(resourceIds)
          ? {
              abhisekhaResource: {
                upsert: resourceIds.map((resourceId) => ({
                  where: {
                    abhishekaId_resourceId: {
                      abhishekaId: id,
                      resourceId
                    }
                  },
                  update: {},
                  create: {
                    resource: {
                      connect: {
                        id: resourceId
                      }
                    }
                  }
                })),
                deleteMany: {
                  abhishekaId: id,
                  resourceId: {
                    notIn: resourceIds
                  }
                }
              }
            }
          : {}),
        /*
          - arguments to update the members (memberAbhisekha) table rows associated with the abhisekha
          - update only if abhisekhaMemberDetails is received
         */
        ...(Array.isArray(abhisekhaMemberDetails)
          ? {
              memberAbhisekha: {
                upsert: abhisekhaMemberDetails.map(
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
                    notIn: abhisekhaMemberDetails.map((el) => el.memberId)
                  }
                }
              }
            }
          : {})
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
