import { InputType, Field, Int, PartialType } from "@nestjs/graphql";
import { CreateGroupInput } from "./create-group.input";

@InputType()
export class UpdateGroupInput extends PartialType(CreateGroupInput) {
  @Field(() => Int)
  id: number;
}
