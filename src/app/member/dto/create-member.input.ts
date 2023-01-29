import { InputType, Field, Int } from "@nestjs/graphql";
import { GenderType, MembershipType } from "@prisma/client";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  MaxDate,
  MaxLength,
  MinLength,
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
  @IsMobilePhone()
  @IsOptional()
  phoneMobile?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @IsPhoneNumber()
  phoneLand?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @IsPhoneNumber()
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
  @IsPhoneNumber()
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
  @MinLength(2)
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
  @MinLength(2)
  @IsOptional()
  @MaxLength(3000)
  note?: string;

  @Field({ nullable: true })
  @IsOptional()
  currentAddressId?: number;

  @Field({ nullable: true })
  @IsOptional()
  permanentAddressId?: number;

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
