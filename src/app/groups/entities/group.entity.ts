import { ObjectType, Field } from "@nestjs/graphql";
import { BaseModel } from "src/common/models/base.model";

@ObjectType()
export class Group extends BaseModel {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => Boolean, { nullable: false })
  visible: boolean;
}
