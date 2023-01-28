import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Int
} from "@nestjs/graphql";
import { GroupsService } from "./groups.service";
import { Group } from "./entities/group.entity";
import { CreateGroupInput } from "./dto/create-group.input";
import { UpdateGroupInput } from "./dto/update-group.input";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../auth/gql-auth.guard";
import { MemberGroupWithoutGroup } from "../memberGroup/memberGroup.entity";

@Resolver(() => Group)
@UseGuards(GqlAuthGuard)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Mutation(() => Group)
  createGroup(@Args("createGroupInput") createGroupInput: CreateGroupInput) {
    return this.groupsService.create(createGroupInput);
  }

  @Query(() => [Group], { name: "groups" })
  findAll() {
    return this.groupsService.findAll();
  }

  @Query(() => Group, { name: "group" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.groupsService.findOne(id);
  }

  @Mutation(() => Group)
  updateGroup(@Args("updateGroupInput") updateGroupInput: UpdateGroupInput) {
    return this.groupsService.update(updateGroupInput.id, updateGroupInput);
  }

  @Mutation(() => Group)
  removeGroup(@Args("id", { type: () => Int }) id: number) {
    return this.groupsService.remove(id);
  }

  @ResolveField(() => [MemberGroupWithoutGroup])
  async groupMembers(@Parent() group: Group) {
    const groupMemberRelation = await this.groupsService.findUnique({
      where: { id: group.id },
      select: {
        id: true,
        memberGroups: {
          where: {
            member: {
              isDeleted: false
            }
          },
          select: {
            member: true,
            memberId: true,
            groupId: true,
            createdAt: true,
            createdBy: true
          }
        }
      }
    });

    if (!groupMemberRelation) {
      return null;
    }

    return groupMemberRelation.memberGroups;
  }
}
