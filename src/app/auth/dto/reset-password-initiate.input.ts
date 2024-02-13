import { Field, InputType } from "@nestjs/graphql";
import { IsString, Length } from "class-validator";

@InputType()
export class ResetPasswordInitiateInput {
  @IsString()
  @Field()
  userName: string;
}
