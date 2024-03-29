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
import { Member } from "../members/entities/member.entity";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../auth/gql-auth.guard";

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

  @ResolveField(() => [Member])
  async members(@Parent() group: Group) {
    const groupMembers = await this.groupsService.findUnique({
      where: { id: group.id },
      select: {
        id: true,
        memberGroups: {
          select: {
            member: true
          }
        }
      }
    });

    if (!groupMembers) return null;
    return groupMembers.memberGroups.map(
      (memberRelation) => memberRelation.member
    );
  }
}
