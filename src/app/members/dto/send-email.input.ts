import { InputType, Field } from "@nestjs/graphql";
import { IsEmail } from "class-validator";

@InputType()
export class SendEmailInput {
  @Field(() => [String], { nullable: false })
  @IsEmail({}, { each: true })
  memberEmails: Array<string>;

  @Field(() => String)
  subject: string;

  @Field(() => String)
  content: string;
}
