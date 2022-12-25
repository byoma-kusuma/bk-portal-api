import { InputType, Field } from "@nestjs/graphql";
import { IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateAddressInput {
  @Field()
  @IsString()
  @IsOptional()
  @MaxLength(256)
  street?: string;

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
  country: string;
}
