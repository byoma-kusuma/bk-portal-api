import { ObjectType, Field } from "@nestjs/graphql";
import { SoftDeleteBaseModel } from "../../../common/models/softdeletebase.model";

@ObjectType()
export class Resource extends SoftDeleteBaseModel {
  @Field(() => String, { description: "Name of the resource" })
  name: string;

  @Field(() => String, { description: "Description of the resource" })
  description: string;

  @Field(() => String, { description: "Url containing the resource data" })
  url: string;

  @Field(() => String, { description: "Type of the resource" })
  type: string;
}
