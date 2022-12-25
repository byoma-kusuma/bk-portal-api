import { ObjectType, Field } from "@nestjs/graphql";
import { SoftDeleteBaseModel } from "src/common/models/softdeletebase.model";

@ObjectType()
export class Abhisekha extends SoftDeleteBaseModel {
  @Field(() => String, { description: "Name of the abhisekha" })
  name: string;

  @Field(() => String, { description: "Name of the abhisekha" })
  teacher: string;

  @Field(() => String, { description: "Name of the abhisekha" })
  description: string;
}
