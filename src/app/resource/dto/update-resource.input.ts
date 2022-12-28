import { CreateResourceInput } from "./create-resource.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateResourceInput extends PartialType(CreateResourceInput) {
  @Field(() => Int)
  id: number;
}
