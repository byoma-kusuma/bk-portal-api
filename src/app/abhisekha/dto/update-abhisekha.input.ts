import { CreateAbhisekhaInput } from "./create-abhisekha.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";
import { IsArray, IsNumber, IsOptional, ValidateNested } from "class-validator";

@InputType()
export class UpdateAbhisekhaInput extends PartialType(CreateAbhisekhaInput) {
  @Field(() => Int)
  id: number;

  @Field(() => [AbhisekhaMemberDetails], {
    description: "AbhisekhaMember details"
  })
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  abhisekhaMemberDetails?: Array<AbhisekhaMemberDetails>;

  @Field(() => [Int], { description: "Relevant resources for the abhisekha" })
  @IsNumber({}, { each: true })
  @IsOptional()
  resourceIds?: Array<number>;
}

@InputType()
class AbhisekhaMemberDetails {
  @Field(() => Int, { description: "Id of member who attended the abhisekha" })
  memberId: number;

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
