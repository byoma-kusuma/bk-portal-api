import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateCentreInput {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number;
}
