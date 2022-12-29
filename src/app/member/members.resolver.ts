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
import { User } from "../../app/users/models/user.model";
import { Centre } from "../../app/centre/entities/centre.entity";
import { CurrentUser } from "../../common/decorators/currentUser.decorator";
import { SendEmailInput } from "./dto/send-email.input";
import ResponseStatus from "../../common/ResponseClasses/ResponseStatus";
import { MemberAbhisekhaWithoutMember } from "../memberAbhisekha/memberAbhisekha.entity";
import { ClassProperties } from "../../common/utils/extractClass";
import { EventMemberWithoutMember } from "../eventMember/eventMember.entity";
import {
  MemberGroupWithoutMember,
  Test
} from "../memberGroup/memberGroup.entity";
import {
  getFromContainer,
  getMetadataStorage,
  MetadataStorage
} from "class-validator";

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

  @ResolveField(() => [MemberGroupWithoutMember])
  async memberGroups(@Parent() member: Member) {
    const memberGroupRelation = await this.membersService.findUnique({
      where: { id: member.id },
      select: {
        id: true,
        memberGroup: {
          where: {
            group: {
              isDeleted: false
            }
          },
          select: {
            memberId: true,
            groupId: true,
            createdAt: true,
            createdBy: true,
            group: true
          }
        }
      }
    });

    if (!memberGroupRelation) {
      return null;
    }
    return memberGroupRelation.memberGroup;
  }

  @ResolveField(() => [MemberAbhisekhaWithoutMember])
  async memberAbhisekhas(@Parent() member: Member) {
    const memberAbhisekhaRelation = await this.membersService.findUnique({
      where: { id: member.id },
      select: {
        id: true,
        memberAbhisekha: {
          where: {
            abhisheka: {
              isDeleted: false
            }
          },
          select: {
            abhisekhaDate: true,
            abhisekhaPlace: true,
            abhisheka: true,
            type: true,
            memberId: true,
            abhishekaId: true
          }
        }
      }
    });

    if (!memberAbhisekhaRelation) {
      return null;
    }

    return memberAbhisekhaRelation.memberAbhisekha;
  }

  @ResolveField(() => [EventMemberWithoutMember])
  async memberEvents(@Parent() member: Member) {
    const memberEventRelation = await this.membersService.findUnique({
      where: {
        id: member.id
      },
      select: {
        id: true,
        eventMember: {
          where: {
            event: {
              isDeleted: false
            }
          },
          select: {
            event: true,
            eventId: true,
            memberId: true,
            hasAttended: true
          }
        }
      }
    });

    if (!memberEventRelation) {
      return null;
    }

    return memberEventRelation.eventMember;
  }
}