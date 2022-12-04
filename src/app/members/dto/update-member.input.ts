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
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  MaxDate,
  MaxLength,
  MinLength
} from "class-validator";

@InputType()
export class UpdateMemberInput {
  @Field({ nullable: false })
  @IsNumber()
  id: number;

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
  @IsPhoneNumber()
  @IsOptional()
  phonePrimary?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @IsPhoneNumber()
  phoneSecondary?: string;

  @Field(() => CentreAffiliationType)
  @IsEnum(CentreAffiliationType)
  centerAffiliation: CentreAffiliationType;

  @Field({ nullable: true })
  @IsOptional()
  centreId?: number;

  @Field(() => MembershipType, { nullable: true })
  @IsOptional()
  @IsEnum(MembershipType)
  membershipType?: MembershipType;

  @Field({ nullable: true })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  permanentAddress?: string;

  @Field({ nullable: true })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  currentAddress?: string;

  @Field({ nullable: true })
  @IsDate()
  @MaxDate(new Date())
  @IsOptional()
  dob?: Date;

  @Field(() => GenderType, { nullable: true })
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

  @Field(() => [Int], { nullable: true })
  @IsNumber({}, { each: true })
  @IsOptional()
  groupIds?: Array<number>;
}
