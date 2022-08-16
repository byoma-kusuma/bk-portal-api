import { InputType } from "@nestjs/graphql";
import { IsString, Length } from "class-validator";

@InputType()
export class ResetPasswordInput {
  @IsString()
  otp: string;

  @IsString()
  userName: string;
}
