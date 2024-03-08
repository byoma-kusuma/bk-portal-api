import { InputType, Field, Int } from "@nestjs/graphql";
import { CalendarType, GenderType, MembershipType } from "@prisma/client";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MaxDate,
  MaxLength,
  ValidateNested
} from "class-validator";

@InputType()
export class CreateMemberInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field()
  @IsString()
  @MaxLength(64)
  firstName: string;

  @Field()
  @IsString()
  @MaxLength(64)
  lastName: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  middleName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  title?: string;

  @Field()
  @IsBoolean()
  isMember: boolean;

  @Field()
  @IsBoolean()
  active: boolean;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phoneMobile?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phoneLand?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phoneOther?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  centreId?: number;

  @Field(() => MembershipType, { nullable: true })
  @IsOptional()
  @IsEnum(MembershipType)
  membershipType?: MembershipType;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  yearOfBirth?: number;

  @Field(() => GenderType, { nullable: true })
  @IsEnum(GenderType)
  @IsOptional()
  gender?: GenderType;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @MaxDate(new Date())
  @IsOptional()
  sanghaJoinDate?: Date;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(128)
  refugeName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(256)
  viber?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(256)
  messenger?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(256)
  insta?: string;

  @Field(() => String, { nullable: true })
  @IsUrl()
  @IsOptional()
  @MaxLength(512)
  photo?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(3000)
  note?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  currentStreetAddress?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  permanentStreetAddress?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  currentCity?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  permanentCity?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  currentStateProvince?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  permanentStateProvince?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  currentCountry?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  permanentCountry?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  memberAbhisekhaDetails?: Array<MemberAbhisekhaDetails>;

  @Field(() => [Int], { nullable: true })
  @IsNumber({}, { each: true })
  @IsOptional()
  groupIds?: Array<number>;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  yearOfRefuge?: number;

  @Field(() => CalendarType, { nullable: true })
  @IsOptional()
  @IsEnum(CalendarType)
  yearOfRefugeCalendarType?: CalendarType;

  @Field(() => Date, { nullable: true })
  @IsDate()
  @MaxDate(new Date())
  @IsOptional()
  dateOfApplication?: Date;

  @Field(() => CalendarType, { nullable: true })
  @IsOptional()
  @IsEnum(CalendarType)
  dateOfApplicationCalendarType?: CalendarType;

  @Field(() => String, { nullable: true })
  @IsOptional()
  dharmaInstructor?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  education?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  occupation?: string;
}

@InputType()
class MemberAbhisekhaDetails {
  @Field(() => Int, { description: "Id of member who attended the abhisekha" })
  abhisekhaId: number;

  @Field(() => String, {
    description: "Member attending the Abhisekha type eg: Peripheral"
  })
  type: string;

  @Field(() => String, {
    description: "Place of abhisekha"
  })
  abhisekhaPlace: string;

  @Field(() => String, {
    description: "Date of abhisekha"
  })
  abhisekhaDate: Date;
}
