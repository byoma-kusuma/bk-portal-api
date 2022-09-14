import { InputType } from "@nestjs/graphql";
import { IsString, Length } from "class-validator";

@InputType()
export class ResetPasswordInput {
  @IsString()
  token: string;

  @IsString()
  userId: string;

  @IsString()
  password: string;
}
