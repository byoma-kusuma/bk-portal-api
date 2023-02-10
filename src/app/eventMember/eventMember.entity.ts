import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Member } from "../member/entities/member.entity";
import { Event } from "../event/entities/event.entity";

@ObjectType()
export class EventMemberWithoutEvent {
  @Field()
  type: string;

  @Field(() => Int)
  eventId: number;

  @Field(() => Member)
  member: Member;

  @Field(() => Int)
  memberId: number;

  @Field()
  hasAttended: boolean;
}

@ObjectType()
export class EventMemberWithoutMember {
  @Field()
  type: string;

  @Field(() => Event)
  event: Event;

  @Field(() => Int)
  eventId: number;

  @Field(() => Int)
  memberId: number;

  @Field()
  hasAttended: boolean;
}
