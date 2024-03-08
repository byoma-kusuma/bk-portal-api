import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { CalendarType, GenderType, MembershipType } from "@prisma/client";
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

registerEnumType(CalendarType, {
  name: "Calender_Type",
  description: "Types of Calender"
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

  @Field(() => Int, { nullable: true })
  centreId?: number;

  @Field(() => String, { nullable: true })
  note?: string;

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

  @Field(() => Number, { nullable: true })
  yearOfRefuge?: number;

  @Field(() => CalendarType, { nullable: true })
  yearOfRefugeCalendarType?: CalendarType;

  @Field(() => Date, { nullable: true })
  dateOfApplication?: Date;

  @Field(() => CalendarType, { nullable: true })
  dateOfApplicationCalendarType?: CalendarType;

  @Field(() => String, { nullable: true })
  dharmaInstructor?: string;

  @Field(() => String, { nullable: true })
  education?: string;

  @Field(() => String, { nullable: true })
  occupation?: string;
}
