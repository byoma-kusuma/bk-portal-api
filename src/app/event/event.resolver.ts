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
import { Member } from "../member/entities/member.entity";
import { EventMemberWithoutEvent } from "../eventMember/eventMember.entity";
import { ClassProperties } from "src/common/utils/extractClass";
import { EventAbhisekhaWithoutEvent } from "../eventAbhisekha/eventAbhisekha.entity";
import { EventResourceWithoutEvent } from "../eventResource/eventResource.entity";

@Resolver(() => Event)
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
  async members(@Parent() event: Event) {
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
          select: ClassProperties.extractPrismaSelectFields(
            EventMemberWithoutEvent
          )
        }
      }
    });

    if (!eventMemberRelation) {
      return null;
    }

    return eventMemberRelation.eventMember;
  }

  @ResolveField(() => [EventAbhisekhaWithoutEvent])
  async abhisekhas(@Parent() event: Event) {
    const eventAbhisekhaRelation = await this.eventService.findUnique({
      where: { id: event.id },
      select: {
        id: true,
        eventAbhisekha: {
          where: {
            abhisheka: {
              isDeleted: false
            }
          },
          select: ClassProperties.extractPrismaSelectFields(
            EventAbhisekhaWithoutEvent
          )
        }
      }
    });

    if (!eventAbhisekhaRelation) {
      return null;
    }

    return eventAbhisekhaRelation.eventAbhisekha;
  }

  @ResolveField(() => [EventResourceWithoutEvent])
  async resources(@Parent() event: Event) {
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
          select: ClassProperties.extractPrismaSelectFields(
            EventResourceWithoutEvent
          )
        }
      }
    });

    if (!eventResourceRelation) {
      return null;
    }

    return eventResourceRelation.eventResource;
  }
}
