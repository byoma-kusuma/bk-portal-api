import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Int
} from "@nestjs/graphql";
import { MembersService } from "./members.service";
import { Member } from "./entities/member.entity";
import { CreateMemberInput } from "./dto/create-member.input";
import { UpdateMemberInput } from "./dto/update-member.input";
import { GqlAuthGuard } from "src/app/auth/gql-auth.guard";
import { UseGuards } from "@nestjs/common";
import { User } from "src/app/users/models/user.model";
import { Centre } from "src/app/centre/entities/centre.entity";
import { CurrentUser } from "src/common/decorators/currentUser.decorator";
import { Group } from "../groups/entities/group.entity";
import { SendEmailInput } from "./dto/send-email.input";
import ResponseStatus from "src/common/ResponseClasses/ResponseStatus";
import { Abhisekha } from "../abhisekha/entities/abhisekha.entity";
import { AbhisekhaWithMemberAbhisekhaEntity } from "../memberAbhisekha/memberAbhisekha.entity";

@Resolver(() => Member)
// @UseGuards(GqlAuthGuard)
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
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.membersService.findOne(id);
  }

  @Mutation(() => Member)
  updateMember(
    @Args("updateMemberInput") updateMemberInput: UpdateMemberInput
  ) {
    return this.membersService.update(updateMemberInput.id, updateMemberInput);
  }

  @Mutation(() => Member)
  removeMember(
    @Args("id", { type: () => Int }) id: number,
    @CurrentUser() user: User
  ) {
    return this.membersService.remove(id, user.memberId);
  }

  @Mutation(() => ResponseStatus)
  async sendEmail(@Args("sendEmailInput") sendEmailInput: SendEmailInput) {
    this.membersService.sendEmail(sendEmailInput);
    return new ResponseStatus("completed");
  }

  @ResolveField(() => User)
  async user(@Parent() member: Member) {
    const user = await this.membersService
      .findUnique({ where: { id: member.id } })
      .user();
    if (!user || user.isDeleted) return null;
    return user;
  }

  @ResolveField(() => Centre)
  async centre(@Parent() member: Member) {
    const centre = await this.membersService
      .findUnique({ where: { id: member.id } })
      .centre();
    return centre;
  }

  @ResolveField(() => [Group])
  async groups(@Parent() member: Member) {
    const memberGroupRelation = await this.membersService.findUnique({
      where: { id: member.id },
      select: {
        id: true,
        memberGroup: {
          select: {
            group: true
          }
        }
      }
    });
    if (!memberGroupRelation) return null;
    return memberGroupRelation.memberGroup.map(
      (groupRelation) => groupRelation.group
    );
  }

  @ResolveField(() => [AbhisekhaWithMemberAbhisekhaEntity])
  async abhisekhas(@Parent() member: Member) {
    const memberAbhisekhaRelation = await this.membersService.findUnique({
      where: { id: member.id },
      select: {
        id: true,
        memberAbhisekha: {
          select: {
            abhisheka: true,
            abhisekhaPlace: true,
            abhisekhaDate: true,
            type: true
          }
        }
      }
    });

    if (!memberAbhisekhaRelation) {
      return null;
    }
    return memberAbhisekhaRelation.memberAbhisekha.map((abhisekhaRelation) =>
      (({ abhisheka, ...memberAbhisekhaRelationFields }) => ({
        ...abhisheka,
        memberAbhisekha: memberAbhisekhaRelationFields
      }))(abhisekhaRelation)
    );
  }
}
