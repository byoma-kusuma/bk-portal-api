import { CreateCentreInput } from "./create-centre.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateCentreInput extends PartialType(CreateCentreInput) {
  @Field(() => Int)
  id: number;
}
