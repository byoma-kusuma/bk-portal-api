import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MembersService } from "../member/members.service";
import { CreateGroupInput } from "./dto/create-group.input";
import { UpdateGroupInput } from "./dto/update-group.input";

@Injectable()
export class GroupsService {
  findUnique = this.prisma.group.findUnique;
  constructor(
    private readonly prisma: PrismaService,

    @Inject(forwardRef(() => MembersService))
    private readonly membersService: MembersService
  ) {}

  /**
   * @param  {CreateGroupInput} createGroupInput
   * Modifies in following tables:
   * 1) Group (create)
   * 2) MemberGroup (create)
   */
  async create(createGroupInput: CreateGroupInput) {
    const { memberIds, ...createGroupArgs } = createGroupInput;

    return this.prisma.group.create({
      data: {
        ...createGroupArgs,
        ...(memberIds
          ? {
              memberGroups: {
                create: memberIds.map((memberId) => ({
                  member: {
                    connect: {
                      id: memberId
                    }
                  }
                }))
              }
            }
          : {})
      }
    });
  }

  findAll() {
    return this.prisma.group.findMany({ where: { isDeleted: false } });
  }

  async findOne(id: number) {
    return this.prisma.group.findFirst({ where: { id, isDeleted: false } });
  }

  /**
   * @param  {number} id
   * @param  {UpdateGroupInput} updateGroupInput
   * Modifies data in following tables:
   * 1) Group (update)
   * 2) MemberGroup (update, create, delete)
   */
  async update(id: number, updateGroupInput: UpdateGroupInput) {
    const { memberIds, ...updateGroupArgs } = updateGroupInput;

    const group = await this.prisma.group.update({
      where: { id },
      data: {
        ...updateGroupArgs,
        ...(memberIds
          ? {
              memberGroups: {
                upsert: memberIds.map((memberId) => ({
                  where: {
                    memberId_groupId: {
                      memberId,
                      groupId: id
                    }
                  },
                  update: {},
                  create: {
                    member: {
                      connect: {
                        id: memberId
                      }
                    }
                  }
                })),
                deleteMany: {
                  groupId: id,
                  memberId: {
                    notIn: memberIds
                  }
                }
              }
            }
          : {})
      }
    });

    return group;
  }

  remove(id: number) {
    return this.prisma.group.update({
      where: { id },
      data: { isDeleted: true }
    });
  }

  async filterValidGroups(groupIds: Array<number>): Promise<Array<number>> {
    const groups = await this.prisma.group.findMany({
      where: {
        id: {
          in: groupIds
        }
      },
      select: {
        id: true,
        isDeleted: true
      }
    });

    return groups
      .filter((group) => !group.isDeleted)
      .map(({ id, ...rest }) => id);
  }
}
