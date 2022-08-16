import { InputType } from "@nestjs/graphql";
import { IsString, Length } from "class-validator";

@InputType()
export class ResetPasswordInitiateInput {
  @IsString()
  userName: string;
}
