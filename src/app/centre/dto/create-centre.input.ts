import { InputType, Field } from "@nestjs/graphql";
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

@InputType()
export class CreateCentreInput {
  @Field()
  @IsString()
  @MaxLength(256)
  name: string;

  @Field()
  @IsString()
  @MaxLength(256)
  displayText: string;

  @Field()
  @IsNumber()
  displaySequence: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  streetAddress?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  city?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  stateProvince?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  country?: string;
}
