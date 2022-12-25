import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateAbhisekhaInput {
  @Field(() => String, { description: "Name of the abhisekha" })
  name: string;

  @Field(() => String, { description: "Name of the abhisekha" })
  teacher: string;

  @Field(() => String, { description: "Name of the abhisekha" })
  description: string;
}
