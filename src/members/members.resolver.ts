import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent
} from "@nestjs/graphql";
import { MembersService } from "./members.service";
import { Member } from "./entities/member.entity";
import { CreateMemberInput } from "./dto/create-member.input";
import { UpdateMemberInput } from "./dto/update-member.input";
import { GqlAuthGuard } from "src/auth/gql-auth.guard";
import { UseGuards } from "@nestjs/common";
import { User } from "src/users/models/user.model";
import { CurrentUser } from "src/common/decorators/currentUser.decorator";

@Resolver(() => Member)
@UseGuards(GqlAuthGuard)
export class MembersResolver {
  constructor(private readonly membersService: MembersService) {}

  @Mutation(() => Member)
  createMember(
    @Args("createMemberInput") createMemberInput: CreateMemberInput
  ) {
    return this.membersService.create(createMemberInput);
  }

  @Query(() => [Member], { name: "members" })
  findAll() {
    return this.membersService.findAll();
  }

  @Query(() => Member, { name: "member" })
  findOne(@Args("id") id: string) {
    return this.membersService.findOne(id);
  }

  @Mutation(() => Member)
  updateMember(
    @Args("updateMemberInput") updateMemberInput: UpdateMemberInput
  ) {
    return this.membersService.update(updateMemberInput.id, updateMemberInput);
  }

  @Mutation(() => Member)
  removeMember(@Args("id") id: string, @CurrentUser() user: User) {
    return this.membersService.remove(id, user.memberId);
  }

  @ResolveField(() => User)
  user(@Parent() member: Member) {
    return this.membersService.findUnique({ where: { id: member.id } }).user();
  }
}
