import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { GenderType, MembershipType } from "@prisma/client";
import { BaseModel } from "src/common/models/base.model";
import { User } from "src/app/users/models/user.model";
import { Centre } from "src/app/centre/entities/centre.entity";
import { Address } from "src/app/addresses/entities/address.entity";
import { MemberAbhisekha } from "src/@generated/member-abhisekha/member-abhisekha.model";

registerEnumType(GenderType, {
  name: "Gender_Type",
  description: "Types of gender"
});

registerEnumType(MembershipType, {
  name: "Membership_Type",
  description: "Types of membership"
});

@ObjectType()
export class Member extends BaseModel {
  @Field()
  id: number;

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
  phoneMobile?: string;

  @Field(() => String, { nullable: true })
  phoneLand?: string;

  @Field(() => String, { nullable: true })
  phoneOther?: string;

  @Field(() => MembershipType, { nullable: true })
  membershipType?: MembershipType;

  @Field(() => String, { nullable: true })
  yearOfBirth?: string;

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

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => Centre, { nullable: true })
  centre?: Centre;

  @Field(() => Number, { nullable: true })
  centreId?: number;

  @Field(() => Number, { nullable: true })
  permanentAddressId?: number;

  @Field(() => Address, { nullable: true })
  permanentAddress?: Address;

  @Field(() => Number, { nullable: true })
  currentAddressId?: number;

  @Field(() => Address, { nullable: true })
  currentAddress?: Address;
}
