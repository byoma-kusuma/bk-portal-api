import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => Int)
  id: number;

  @Field({
    description: "Identifies the date and time when the object was created."
  })
  createdAt: Date;

  @Field({
    description:
      "Identifies the date and time when the object was last updated."
  })
  updatedAt: Date;

  @Field({
    description: "Unique key associated with the object."
  })
  uniqueKey?: string;

  @Field({
    description: "Identifies who created the object."
  })
  createdBy?: string;

  @Field({
    description: "Identifies who made the last update to the object."
  })
  updatedBy?: string;
}
