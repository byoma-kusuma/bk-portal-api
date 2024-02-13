import { IsNumber, IsString, Length } from "class-validator";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ResetPasswordInput {

  @IsString()
  @Field()
  token: string;

  @IsNumber()
  @Field()
  userId: number;

  @IsString()
  @Field()
  password: string;
}
