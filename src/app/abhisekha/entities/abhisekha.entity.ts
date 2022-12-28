import { ObjectType, Field } from "@nestjs/graphql";
import { Resource } from "../../resource/entities/resource.entity";
import { SoftDeleteBaseModel } from "../../../common/models/softdeletebase.model";

@ObjectType()
export class Abhisekha extends SoftDeleteBaseModel {
  @Field(() => String, { description: "Name of the abhisekha" })
  name: string;

  @Field(() => String, { description: "Name of the abhisekha" })
  teacher: string;

  @Field(() => String, { description: "Name of the abhisekha" })
  description: string;

  @Field(() => [Resource], { description: "Resources for the abhisekha" })
  resources: Array<Resource>;
}
