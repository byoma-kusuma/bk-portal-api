import { InputType, Int, Field } from "@nestjs/graphql";
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
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  MaxDate,
  MaxLength,
  MinLength
} from "class-validator";

@InputType()
export class CreateMemberInput {
  @Field({ nullable: true })
  @IsOptional()
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

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(32)
  middleName?: string;

  @Field({ nullable: true })
  @IsOptional()
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

  @Field({ nullable: true })
  @IsString()
  @IsPhoneNumber()
  @IsOptional()
  phonePrimary?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @IsPhoneNumber()
  phoneSecondary?: string;

  @Field()
  @IsEnum(CentreAffiliationType)
  centerAffiliation: CentreAffiliationType;

  @Field({ nullable: true })
  @IsOptional()
  @IsEnum(MembershipType)
  membershipType?: MembershipType;

  @Field({ nullable: true })
  @IsString()
  @MaxLength(128)
  @IsOptional()
  @MinLength(4)
  permanentAddress?: string;

  @Field({ nullable: true })
  @IsString()
  @MaxLength(128)
  @MinLength(4)
  @IsOptional()
  currentAddress?: string;

  @Field({ nullable: true })
  @IsDate()
  @MaxDate(new Date())
  @IsOptional()
  dob?: Date;

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
  @MinLength(1)
  @IsOptional()
  refugeName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsPhoneNumber()
  @IsOptional()
  viber?: string;

  @Field({ nullable: true })
  @IsString()
  @MinLength(2)
  @IsOptional()
  messenger?: string;

  @Field({ nullable: true })
  @IsString()
  @MinLength(2)
  @IsOptional()
  insta?: string;

  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  photo?: string;
}
