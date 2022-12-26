import { ObjectType, Field } from "@nestjs/graphql";
import { SoftDeleteBaseModel } from "src/common/models/softdeletebase.model";

@ObjectType()
export class Group extends SoftDeleteBaseModel {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => Boolean, { nullable: false })
  visible: boolean;
}
