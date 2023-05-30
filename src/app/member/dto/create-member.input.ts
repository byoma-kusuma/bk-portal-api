import { InputType, Field, Int } from "@nestjs/graphql";
import { GenderType, MembershipType } from "@prisma/client";
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

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phoneMobile?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phoneLand?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phoneOther?: string;

  @Field({ nullable: true })
  @IsOptional()
  centreId?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsEnum(MembershipType)
  membershipType?: MembershipType;

  @Field({ nullable: true })
  @IsOptional()
  yearOfBirth?: number;

  @Field({ nullable: true })
  @IsEnum(GenderType)
  @IsOptional()
  gender?: GenderType;

  @Field({ nullable: true })
  @IsDate()
  @MaxDate(new Date())
  @IsOptional()
  sanghaJoinDate?: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(128)
  refugeName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(256)
  viber?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(256)
  messenger?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(256)
  insta?: string;

  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  @MaxLength(512)
  photo?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(3000)
  note?: string;

  @Field({ nullable: true })
  @IsOptional()
  currentStreetAddress?: string;

  @Field({ nullable: true })
  @IsOptional()
  permanentStreetAddress?: string;

  @Field({ nullable: true })
  @IsOptional()
  currentCity?: string;

  @Field({ nullable: true })
  @IsOptional()
  permanentCity?: string;

  @Field({ nullable: true })
  @IsOptional()
  currentStateProvince?: string;

  @Field({ nullable: true })
  @IsOptional()
  permanentStateProvince?: string;

  @Field({ nullable: true })
  @IsOptional()
  currentCountry?: string;

  @Field({ nullable: true })
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
