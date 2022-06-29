import { IsNotEmpty, MinLength } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class SignupInput {
  @Field()
  @MinLength(6)
  userName: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
