import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { Resource } from "../resource/entities/resource.entity";
import { Event } from "../event/entities/event.entity";

@ObjectType()
export class MemberResourceWithoutMember {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Int, { nullable: false })
  memberId: number;

  @Field(() => Resource, { nullable: false })
  resource?: Resource;

  @Field(() => Int, { nullable: false })
  resourceId: number;
}

@ObjectType()
export class MemberResourceWithoutResource {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Event, { nullable: false })
  member?: Event;

  @Field(() => Int, { nullable: false })
  memberId: number;

  @Field(() => Int, { nullable: false })
  resourceId: number;
}
