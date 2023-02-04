import { CreateEventInput } from "./create-event.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
  @Field(() => Int)
  id: number;
}
