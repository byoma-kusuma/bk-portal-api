import { Field, ObjectType } from "@nestjs/graphql";
import { BaseModel } from "./base.model";

@ObjectType({ isAbstract: true })
export abstract class SoftDeleteBaseModel extends BaseModel {
  @Field({
    description:
      "Identifies the date and time when the object was last deleted."
  })
  isDeleted: boolean;
}
