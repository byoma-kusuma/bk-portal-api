import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MembersService } from "../members/members.service";
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

  async create(createGroupInput: CreateGroupInput) {
    const { memberIds, ...createMemberArgs } = createGroupInput;

    const filteredMemberIds = await this.membersService.filterValidMembers(
      memberIds
    );

    return this.prisma.group.create({
      data: {
        ...createMemberArgs,
        memberGroups: {
          create: filteredMemberIds.map((memberId) => ({
            member: {
              connect: {
                id: memberId
              }
            }
          }))
        }
      }
    });
  }

  findAll() {
    return this.prisma.group.findMany({ where: { isDeleted: false } });
  }

  async findOne(id: number) {
    const group = await this.prisma.group.findUnique({ where: { id } });
    if (!group || group.isDeleted) {
      throw new NotFoundException("Group not found!");
    }
    return group;
  }

  async update(id: number, updateGroupInput: UpdateGroupInput) {
    const { memberIds, ...updateGroupArgs } = updateGroupInput;

    const filteredMembers = await this.membersService.filterValidMembers(
      memberIds
    );

    const group = await this.prisma.group.update({
      where: { id },
      data: {
        ...updateGroupArgs,
        memberGroups: {
          upsert: filteredMembers.map((memberId) => ({
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
              notIn: filteredMembers
            }
          }
        }
      }
    });

    if (group.isDeleted) {
      throw new InternalServerErrorException(
        "Cannot update a deleted resource"
      );
    }
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
