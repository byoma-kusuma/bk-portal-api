import {
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import createAvatar from "src/common/utils/avatar";
import { GroupsService } from "../groups/groups.service";
import { CreateMemberInput } from "./dto/create-member.input";
import { UpdateMemberInput } from "./dto/update-member.input";

@Injectable()
export class MembersService {
  findMany = this.prisma.member.findMany;
  findUnique = this.prisma.member.findUnique;
  findFirst = this.prisma.member.findFirst;

  constructor(
    private readonly prisma: PrismaService,

    @Inject(forwardRef(() => GroupsService))
    private readonly groupService: GroupsService
  ) {}

  async create(createMemberInput: CreateMemberInput) {
    const { groupIds, ...createMemberArgs } = createMemberInput;

    const filteredGroups = await this.groupService.filterValidGroups(
      groupIds || []
    );

    const member = this.prisma.member.create({
      data: {
        ...createMemberArgs,
        photo: createAvatar(),
        memberGroups: {
          create: filteredGroups.map((groupId) => ({
            group: { connect: { id: groupId } }
          }))
        }
      }
    });

    return member;
  }

  findAll() {
    return this.prisma.member.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  async findOne(id: number) {
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

  async update(id: number, updateMemberInput: UpdateMemberInput) {
    const { groupIds, ...updateMemberArgs } = updateMemberInput;

    const filteredGroups = await this.groupService.filterValidGroups(
      groupIds || []
    );

    const member = await this.prisma.member.findUnique({ where: { id } });

    if (!member || member.isDeleted) {
      throw new ForbiddenException(
        "Member not found or this member has already been deleted!"
      );
    }

    return this.prisma.member.update({
      data: {
        ...updateMemberArgs,
        ...(groupIds && {
          groups: {
            upsert: filteredGroups.map((groupId) => ({
              where: {
                memberId_groupId: { memberId: member.id, groupId }
              },
              update: {},
              create: { group: { connect: { id: groupId } } }
            })),
            deleteMany: {
              memberId: member.id,
              groupId: { notIn: filteredGroups }
            }
          }
        })
      },
      where: {
        id
      }
    });
  }

  async remove(id: number, myId: number) {
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

  async filterValidMembers(memberIds: Array<number>): Promise<Array<number>> {
    const members = await this.prisma.member.findMany({
      where: {
        id: {
          in: memberIds
        }
      },
      select: {
        id: true,
        isDeleted: true
      }
    });

    return members
      .filter((group) => !group.isDeleted)
      .map(({ id, ...rest }) => id);
  }
}
