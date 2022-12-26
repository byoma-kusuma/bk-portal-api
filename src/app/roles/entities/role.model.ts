import { ObjectType, Field, registerEnumType } from "@nestjs/graphql";
import { Type } from "@prisma/client";
import { SoftDeleteBaseModel } from "src/common/models/softdeletebase.model";
import { User } from "../../users/models/user.model";

@ObjectType()
export class Role extends SoftDeleteBaseModel {
  users: User[];
  name: string;

  @Field((type) => Type) // it's very important
  type: Type;
}

registerEnumType(Type, {
  name: "Role_Type",
  description: "Type of the role"
});
