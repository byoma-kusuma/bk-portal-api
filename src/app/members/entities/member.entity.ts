import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import {
  CentreAffiliationType,
  GenderType,
  MembershipType
} from "@prisma/client";
import { BaseModel } from "src/common/models/base.model";
import { User } from "src/app/users/models/user.model";

registerEnumType(GenderType, {
  name: "Gender_Type",
  description: "Types of gender"
});

registerEnumType(MembershipType, {
  name: "Membership_Type",
  description: "Types of membership"
});

registerEnumType(CentreAffiliationType, {
  name: "CentreAffiliation_Type",
  description: "Types of centre affiliation"
});

@ObjectType()
export class Member extends BaseModel {
  @Field()
  id: string;

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

  @Field(() => CentreAffiliationType)
  centerAffiliation: CentreAffiliationType;

  @Field(() => MembershipType, { nullable: true })
  membershipType?: MembershipType;

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

  @Field(() => User, { nullable: true })
  user?: User;
}
