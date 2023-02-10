import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { GenderType, MembershipType } from "@prisma/client";
import { User } from "../../users/models/user.model";
import { Centre } from "../../centre/entities/centre.entity";
import { Address } from "../../addresses/entities/address.entity";
import { SoftDeleteBaseModel } from "../../../common/models/softdeletebase.model";
import { Event } from "../../event/entities/event.entity";

registerEnumType(GenderType, {
  name: "Gender_Type",
  description: "Types of gender"
});

registerEnumType(MembershipType, {
  name: "Membership_Type",
  description: "Types of membership"
});

@ObjectType()
export class Member extends SoftDeleteBaseModel {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  email?: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field({ nullable: true })
  title?: string;

  @Field(() => Boolean)
  isMember: boolean;

  @Field(() => Boolean)
  active: boolean;

  @Field({ nullable: true })
  phoneMobile?: string;

  @Field({ nullable: true })
  phoneLand?: string;

  @Field({ nullable: true })
  phoneOther?: string;

  @Field(() => MembershipType, { nullable: true })
  membershipType?: MembershipType;

  @Field(() => Int, { nullable: true })
  yearOfBirth?: number;

  @Field(() => GenderType, { nullable: true })
  gender?: GenderType;

  @Field({ nullable: true })
  sanghaJoinDate?: Date;

  @Field({ nullable: true })
  refugeName?: string;

  @Field({ nullable: true })
  viber?: string;

  @Field({ nullable: true })
  messenger?: string;

  @Field({ nullable: true })
  insta?: string;

  @Field({ nullable: true })
  photo?: string;

  @Field({ nullable: true })
  notes?: string;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field({ nullable: true })
  centre?: Centre;

  @Field(() => Int, { nullable: true })
  centreId?: number;

  @Field(() => Int, { nullable: true })
  permanentAddressId?: number;

  @Field({ nullable: true })
  permanentAddress?: Address;

  @Field(() => Int, { nullable: true })
  currentAddressId?: number;

  @Field({ nullable: true })
  currentAddress?: Address;

  @Field(() => [Event], { nullable: true })
  events?: Array<Event>;
}
