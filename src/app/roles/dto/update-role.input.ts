import { CreateRoleInput } from "./create-role.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";

@InputType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  @Field(()=> Int)
  @IsNumber()
  id: number;
}
