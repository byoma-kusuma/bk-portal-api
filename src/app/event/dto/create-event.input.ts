import { InputType, Int, Field } from "@nestjs/graphql";
import { SoftDeleteBaseModel } from "src/common/models/softdeletebase.model";

@InputType()
export class CreateEventInput extends SoftDeleteBaseModel {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number;
}
