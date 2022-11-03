import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  @IsNumber()
  @IsNotEmpty()
  memberId: number;
}
