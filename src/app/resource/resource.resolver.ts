import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent
} from "@nestjs/graphql";
import { ResourceService } from "./resource.service";
import { Resource } from "./entities/resource.entity";
import { CreateResourceInput } from "./dto/create-resource.input";
import { UpdateResourceInput } from "./dto/update-resource.input";
import { EventResourceWithoutResource } from "../eventResource/eventResource.entity";
import { AbhisekhaResourceWithoutResource } from "../abhisekhaResource/abhisekhaResource.entity";
import { MemberResourceWithoutResource } from "../memberResource/memberResource.entity";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../auth/gql-auth.guard";

@Resolver(() => Resource)
@UseGuards(GqlAuthGuard)
export class ResourceResolver {
  constructor(private readonly resourceService: ResourceService) {}

  @Mutation(() => Resource)
  createResource(
    @Args("createResourceInput") createResourceInput: CreateResourceInput
  ) {
    return this.resourceService.create(createResourceInput);
  }

  @Query(() => [Resource], { name: "resources" })
  findAll() {
    return this.resourceService.findAll();
  }

  @Query(() => Resource, { name: "resource" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.resourceService.findOne(id);
  }

  @Mutation(() => Resource)
  updateResource(
    @Args("updateResourceInput") updateResourceInput: UpdateResourceInput
  ) {
    return this.resourceService.update(
      updateResourceInput.id,
      updateResourceInput
    );
  }

  @Mutation(() => Resource)
  removeResource(@Args("id", { type: () => Int }) id: number) {
    return this.resourceService.remove(id);
  }

  @ResolveField(() => [EventResourceWithoutResource])
  async resourceEvents(@Parent() resource: Resource) {
    const memberEventRelation = await this.resourceService.findUnique({
      where: {
        id: resource.id
      },
      select: {
        id: true,
        eventResource: {
          where: {
            event: {
              isDeleted: false
            }
          },
          select: {
            event: true,
            eventId: true,
            resourceId: true,
            type: true
          }
        }
      }
    });

    if (!memberEventRelation) {
      return null;
    }

    return memberEventRelation.eventResource;
  }

  @ResolveField(() => [AbhisekhaResourceWithoutResource])
  async resourceAbhisekhas(@Parent() resource: Resource) {
    const abhisekhaResourceRelation = await this.resourceService.findUnique({
      where: {
        id: resource.id
      },
      select: {
        id: true,
        abhisekhaResource: {
          where: {
            abhisekha: {
              isDeleted: false
            }
          },
          select: {
            abhisekha: true,
            abhisekhaId: true,
            resourceId: true
          }
        }
      }
    });

    if (!abhisekhaResourceRelation) {
      return null;
    }

    return abhisekhaResourceRelation.abhisekhaResource;
  }

  @ResolveField(() => [MemberResourceWithoutResource])
  async resourceMembers(@Parent() resource: Resource) {
    const memberResourceRelation = await this.resourceService.findUnique({
      where: {
        id: resource.id
      },
      select: {
        id: true,
        memberResource: {
          where: {
            member: {
              isDeleted: false
            }
          },
          select: {
            member: true,
            memberId: true,
            resourceId: true,
            type: true
          }
        }
      }
    });

    if (!memberResourceRelation) {
      return null;
    }

    return memberResourceRelation.memberResource;
  }
}