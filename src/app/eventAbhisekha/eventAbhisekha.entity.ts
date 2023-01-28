import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { Abhisekha } from "../abhisekha/entities/abhisekha.entity";
import { Event } from "../event/entities/event.entity";

@ObjectType()
export class EventAbhisekhaWithoutEvent {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Int, { nullable: false })
  eventId: number;

  @Field(() => Abhisekha, { nullable: false })
  abhisekha?: Abhisekha;

  @Field(() => Int, { nullable: false })
  abhisekhaId: number;
}

@ObjectType()
export class EventAbhisekhaWithoutAbhisekha {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Int, { nullable: false })
  eventId: number;

  @Field(() => Int, { nullable: false })
  abhisekhaId: number;

  @Field(() => Event, { nullable: false })
  event?: Event;
}
