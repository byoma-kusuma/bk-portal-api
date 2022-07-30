import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { GenderType } from "@prisma/client";
import { BaseModel } from "src/common/models/base.model";

@ObjectType()
export class Member extends BaseModel {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Boolean)
  isMember: boolean;

  @Field(() => Boolean)
  active: boolean;

  @Field(() => String, { nullable: true })
  phonePrimary?: string;

  @Field(() => String, { nullable: true })
  phoneSecondary?: string;

  @Field(() => String)
  centerAffiliation: string;

  @Field(() => String, { nullable: true })
  membershipType?: string;

  @Field(() => String, { nullable: true })
  permanentAddress?: string;

  @Field(() => String, { nullable: true })
  currentAddress?: string;

  @Field(() => Date, { nullable: true })
  dob?: Date;

  @Field(() => GenderType, { nullable: true })
  gender?: GenderType;

  @Field(() => Date, { nullable: true })
  sanghaJoinDate?: Date;

  @Field(() => String, { nullable: true })
  refugeName?: string;

  @Field(() => String, { nullable: true })
  viber?: string;

  @Field(() => String, { nullable: true })
  messenger?: string;

  @Field(() => String, { nullable: true })
  insta?: string;

  @Field(() => String, { nullable: true })
  photo?: string;
}

registerEnumType(GenderType, {
  name: "Gender_Type",
  description: "Types of gender"
});
