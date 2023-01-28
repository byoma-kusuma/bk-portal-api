import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent
} from "@nestjs/graphql";
import { EventService } from "./event.service";
import { Event } from "./entities/event.entity";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";
import { EventMemberWithoutEvent } from "../eventMember/eventMember.entity";
import { EventAbhisekhaWithoutEvent } from "../eventAbhisekha/eventAbhisekha.entity";
import { EventResourceWithoutEvent } from "../eventResource/eventResource.entity";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../auth/gql-auth.guard";

@Resolver(() => Event)
@UseGuards(GqlAuthGuard)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(() => Event)
  createEvent(@Args("createEventInput") createEventInput: CreateEventInput) {
    return this.eventService.create(createEventInput);
  }

  @Query(() => [Event], { name: "event" })
  findAll() {
    return this.eventService.findAll();
  }

  @Query(() => Event, { name: "event" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.eventService.findOne(id);
  }

  @Mutation(() => Event)
  updateEvent(@Args("updateEventInput") updateEventInput: UpdateEventInput) {
    return this.eventService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => Event)
  removeEvent(@Args("id", { type: () => Int }) id: number) {
    return this.eventService.remove(id);
  }

  @ResolveField(() => [EventMemberWithoutEvent])
  async eventMembers(@Parent() event: Event) {
    const eventMemberRelation = await this.eventService.findUnique({
      where: { id: event.id },
      select: {
        id: true,
        eventMember: {
          where: {
            member: {
              isDeleted: false
            }
          },
          select: {
            member: true,
            memberId: true,
            eventId: true,
            hasAttended: true
          }
        }
      }
    });

    if (!eventMemberRelation) {
      return null;
    }

    return eventMemberRelation.eventMember;
  }

  @ResolveField(() => [EventAbhisekhaWithoutEvent])
  async eventAbhisekhas(@Parent() event: Event) {
    const eventAbhisekhaRelation = await this.eventService.findUnique({
      where: { id: event.id },
      select: {
        id: true,
        eventAbhisekha: {
          where: {
            abhisekha: {
              isDeleted: false
            }
          },
          select: {
            abhisekha: true,
            abhisekhaId: true,
            eventId: true
          }
        }
      }
    });

    if (!eventAbhisekhaRelation) {
      return null;
    }

    return eventAbhisekhaRelation.eventAbhisekha;
  }

  @ResolveField(() => [EventResourceWithoutEvent])
  async eventResources(@Parent() event: Event) {
    const eventResourceRelation = await this.eventService.findUnique({
      where: { id: event.id },
      select: {
        id: true,
        eventResource: {
          where: {
            resource: {
              isDeleted: false
            }
          },
          select: {
            resource: true,
            resourceId: true,
            eventId: true
          }
        }
      }
    });

    if (!eventResourceRelation) {
      return null;
    }

    return eventResourceRelation.eventResource;
  }
}
