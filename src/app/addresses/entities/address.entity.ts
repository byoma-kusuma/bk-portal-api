import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";

@ObjectType()
export class Address extends BaseModel {
  @Field((type) => Int)
  id: number;

  @Field(() => String, { nullable: true })
  street?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  stateProvince?: string;

  @Field(() => String, { nullable: true })
  country?: string;
}
