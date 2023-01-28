import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateResourceInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  type: string;

  @Field({ nullable: false })
  url: string;

  @Field({ nullable: false })
  description: string;
}
