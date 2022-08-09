import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty()
  memberId: string;
}

