import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class Centre {
  @Field((type) => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  displayText?: string;

  @Field((type) => Int)
  displaySequence: number;

  @Field(() => String, { nullable: true })
  streetAddress?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  stateProvince?: string;

  @Field(() => String, { nullable: true })
  country?: string;

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
}
