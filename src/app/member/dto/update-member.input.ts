import { InputType, Field, PartialType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { CreateMemberInput } from "./create-member.input";

@InputType()
export class UpdateMemberInput extends PartialType(CreateMemberInput) {
  @Field({ nullable: false })
  @IsNumber()
  id: number;
}
