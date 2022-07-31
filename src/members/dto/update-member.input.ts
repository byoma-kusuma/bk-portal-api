import { InputType, Field } from "@nestjs/graphql";
import {
  CentreAffiliationType,
  GenderType,
  MembershipType
} from "@prisma/client";
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsString,
  IsUrl,
  MaxDate,
  MaxLength,
  MinLength
} from "class-validator";

@InputType()
export class UpdateMemberInput {
  @Field()
  @IsString()
  id: string;

  @Field()
  @IsEmail()
  email?: string;

  @Field()
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  firstName: string;

  @Field()
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  lastName: string;

  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  middleName?: string;

  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  title?: string;

  @Field()
  @IsBoolean()
  isMember: boolean;

  @Field()
  @IsBoolean()
  active: boolean;

  @Field()
  @IsString()
  @IsPhoneNumber()
  phonePrimary?: string;

  @Field()
  @IsString()
  @IsPhoneNumber()
  phoneSecondary?: string;

  @Field()
  @IsEnum(CentreAffiliationType)
  centerAffiliation: CentreAffiliationType;

  @Field()
  @IsEnum(MembershipType)
  membershipType?: MembershipType;

  @Field()
  @IsString()
  @MaxLength(128)
  @MinLength(4)
  permanentAddress?: string;

  @Field()
  @IsString()
  @MaxLength(128)
  @MinLength(4)
  currentAddress?: string;

  @Field()
  @IsDate()
  @MaxDate(new Date())
  dob?: Date;

  @Field()
  @IsEnum(GenderType)
  gender?: GenderType;

  @Field()
  @IsDate()
  @MaxDate(new Date())
  sanghaJoinDate?: Date;

  @Field()
  @IsString()
  @MinLength(1)
  refugeName?: string;

  @Field()
  @IsString()
  @IsPhoneNumber()
  viber?: string;

  @Field()
  @IsString()
  @MinLength(2)
  messenger?: string;

  @Field()
  @IsString()
  @MinLength(2)
  insta?: string;

  @Field()
  @IsUrl()
  photo?: string;
}
