import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { Resource } from "../resource/entities/resource.entity";

@ObjectType({ isAbstract: true })
export class EventResourceWithoutEvent {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Int, { nullable: false })
  eventId: number;

  @Field(() => Resource, { nullable: false })
  resource?: Resource;

  @Field(() => Int, { nullable: false })
  resourceId: number;
}

@ObjectType({ isAbstract: true })
export class EventResourceWithoutResource {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Event, { nullable: false })
  event?: Event;

  @Field(() => Int, { nullable: false })
  eventId: number;

  @Field(() => Int, { nullable: false })
  resourceId: number;
}
