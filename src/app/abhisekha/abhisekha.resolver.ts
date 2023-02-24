import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent
} from "@nestjs/graphql";
import { AbhisekhaService } from "./abhisekha.service";
import { Abhisekha } from "./entities/abhisekha.entity";
import { CreateAbhisekhaInput } from "./dto/create-abhisekha.input";
import { UpdateAbhisekhaInput } from "./dto/update-abhisekha.input";
import { MemberAbhisekhaWithoutAbhisekha } from "../memberAbhisekha/memberAbhisekha.entity";
import { EventAbhisekhaWithoutAbhisekha } from "../eventAbhisekha/eventAbhisekha.entity";
import { AbhisekhaResourceWithoutAbhisekha } from "../abhisekhaResource/abhisekhaResource.entity";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../auth/gql-auth.guard";

@Resolver(() => Abhisekha)
@UseGuards(GqlAuthGuard)
export class AbhisekhaResolver {
  constructor(private readonly abhisekhaService: AbhisekhaService) {}

  @Mutation(() => Abhisekha) createAbhisekha(
    @Args("createAbhisekhaInput") createAbhisekhaInput: CreateAbhisekhaInput
  ) {
    return this.abhisekhaService.create(createAbhisekhaInput);
  }

  @Query(() => [Abhisekha], { name: "abhisekhas" })
  findAll() {
    return this.abhisekhaService.findAll();
  }

  @Query(() => Abhisekha, { name: "abhisekha" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.abhisekhaService.findOne(id);
  }

  @Mutation(() => Abhisekha)
  updateAbhisekha(
    @Args("updateAbhisekhaInput") updateAbhisekhaInput: UpdateAbhisekhaInput
  ) {
    return this.abhisekhaService.update(
      updateAbhisekhaInput.id,
      updateAbhisekhaInput
    );
  }

  @Mutation(() => Abhisekha)
  removeAbhisekha(@Args("id", { type: () => Int }) id: number) {
    return this.abhisekhaService.remove(id);
  }

  @ResolveField(() => [MemberAbhisekhaWithoutAbhisekha])
  async abhisekhaMembers(@Parent() abhisekha: Abhisekha) {
    const abhisekhaMemberRelation = await this.abhisekhaService.findUnique({
      where: { id: abhisekha.id },
      select: {
        id: true,
        memberAbhisekha: {
          where: {
            member: {
              isDeleted: false
            }
          },
          select: {
            member: true,
            abhisekhaDate: true,
            abhisekhaPlace: true,
            abhisekhaId: true,
            memberId: true,
            type: true
          }
        }
      }
    });

    if (!abhisekhaMemberRelation) {
      return null;
    }

    return abhisekhaMemberRelation.memberAbhisekha;
  }

  @ResolveField(() => [AbhisekhaResourceWithoutAbhisekha])
  async abhisekhaResources(@Parent() abhisekha: Abhisekha) {
    const abhisekhaResourceRelation = await this.abhisekhaService.findUnique({
      where: {
        id: abhisekha.id
      },
      select: {
        id: true,
        abhisekhaResource: {
          where: {
            resource: {
              isDeleted: false
            }
          },
          select: {
            resource: true,
            resourceId: true,
            abhisekhaId: true
          }
        }
      }
    });

    if (!abhisekhaResourceRelation) {
      return null;
    }

    return abhisekhaResourceRelation.abhisekhaResource;
  }

  @ResolveField(() => [EventAbhisekhaWithoutAbhisekha])
  async abhisekhaEvents(@Parent() abhisekha: Abhisekha) {
    const abhisekhaEventRelation = await this.abhisekhaService.findUnique({
      where: { id: abhisekha.id },
      select: {
        eventAbhisekha: {
          where: {
            event: {
              isDeleted: false
            }
          },
          select: {
            event: true,
            eventId: true,
            abhisekhaId: true,
            type: true
          }
        }
      }
    });

    if (!abhisekhaEventRelation) {
      return null;
    }

    return abhisekhaEventRelation.eventAbhisekha;
  }
}