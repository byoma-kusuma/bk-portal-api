import { ObjectType, Field } from "@nestjs/graphql";
import { EventAbhisekhaWithoutEvent } from "src/app/eventAbhisekha/eventAbhisekha.entity";
import { EventMemberWithoutEvent } from "src/app/eventMember/eventMember.entity";
import { EventResourceWithoutEvent } from "src/app/eventResource/eventResource.entity";
import { SoftDeleteBaseModel } from "src/common/models/softdeletebase.model";

@ObjectType()
export class Event extends SoftDeleteBaseModel {
  @Field(() => Date, { description: "Event start date" })
  startDate: Date;

  @Field(() => Date, { description: "Event end date" })
  endDate: Date;

  @Field(() => Boolean, {
    description:
      "After the event ends or at a certain specific time, the event is locked and event related details cannot be updated/deleted"
  })
  isLocked: boolean;

  @Field(() => String, {
    nullable: true,
    description: "Some notes related to the event"
  })
  notes?: string;

  @Field(() => String, {
    description: "Type of the event"
  })
  type: string;

  @Field((type) => Event, {
    description: "The parent event, if this event is a child event.",
    nullable: true
  })
  parentEvent?: Event;

  @Field({
    description: "The ID of the parent event, if this event is a child event.",
    nullable: true
  })
  parentEventId?: number;

  @Field((type) => [Event], {
    description:
      "The child events of this event, if this event is a parent event."
  })
  childEvents: Event[];

  @Field(() => [EventMemberWithoutEvent], {
    description: "The event members for this event."
  })
  eventMember: EventMemberWithoutEvent[];

  @Field(() => [EventResourceWithoutEvent], {
    description: "The event resources for this event."
  })
  eventResource: EventResourceWithoutEvent[];

  @Field(() => [EventAbhisekhaWithoutEvent], {
    description: "The event Abhisekhas for this event."
  })
  eventAbhisekha: EventAbhisekhaWithoutEvent[];
}
