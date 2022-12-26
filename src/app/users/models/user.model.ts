import {
  ObjectType,
  registerEnumType,
  HideField,
  Field
} from "@nestjs/graphql";
import { UserStatus } from "@prisma/client";
import { Member } from "src/app/member/entities/member.entity";
import { SoftDeleteBaseModel } from "src/common/models/softdeletebase.model";
import { Role } from "../../roles/entities/role.model";

registerEnumType(UserStatus, {
  name: "Status",
  description: "Current status of the user within the system"
});

@ObjectType()
export class User extends SoftDeleteBaseModel {
  id: number;

  userName: string;
  role: Role;

  avatar: string;

  @HideField()
  password: string;

  @Field(() => UserStatus)
  status: UserStatus;

  member: Member;

  memberId: number;
}
