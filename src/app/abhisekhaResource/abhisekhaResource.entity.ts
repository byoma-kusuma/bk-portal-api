import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { Abhisekha } from "../abhisekha/entities/abhisekha.entity";
import { Resource } from "../resource/entities/resource.entity";

@ObjectType()
export class AbhisekhaResourceWithoutAbhisekha {
  @Field(() => Int, { nullable: false })
  abhishekaId!: number;

  @Field(() => Resource, { nullable: false })
  resource?: Resource;

  @Field(() => Int, { nullable: false })
  resourceId!: number;
}

@ObjectType()
export class AbhisekhaResourceWithoutResource {
  @Field(() => Abhisekha, { nullable: false })
  abhisheka?: Abhisekha;

  @Field(() => Int, { nullable: false })
  abhishekaId!: number;

  @Field(() => Int, { nullable: false })
  resourceId!: number;
}
