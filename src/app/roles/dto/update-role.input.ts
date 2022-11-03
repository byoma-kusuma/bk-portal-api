import { CreateRoleInput } from "./create-role.input";
import { InputType, Field, PartialType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";

@InputType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  @Field()
  @IsNumber()
  id: number;
}
