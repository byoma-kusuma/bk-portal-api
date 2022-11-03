import { InputType } from "@nestjs/graphql";
import { IsNumber, IsString, Length } from "class-validator";

@InputType()
export class ResetPasswordInput {
  @IsString()
  token: string;

  @IsNumber()
  userId: number;

  @IsString()
  password: string;
}
