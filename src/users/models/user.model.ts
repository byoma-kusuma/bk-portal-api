import {
  ObjectType,
  registerEnumType,
  HideField,
  Field
} from "@nestjs/graphql";
import { UserStatus } from "@prisma/client";
import { BaseModel } from "../../common/models/base.model";
import { Role } from "../../roles/entities/role.entity";

registerEnumType(UserStatus, {
  name: "Status",
  description: "Current status of the user within the system"
});

@ObjectType()
export class User extends BaseModel {
  userName: string;
  role: Role;
  email: string;

  @HideField()
  password: string;

  @Field(() => UserStatus)
  status: UserStatus;
}
