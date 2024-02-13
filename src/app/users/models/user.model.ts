import {
  ObjectType,
  registerEnumType,
  HideField,
  Field, 
  Int
} from "@nestjs/graphql";
import { UserStatus } from "@prisma/client";
import { Member } from "../../member/entities/member.entity";
import { SoftDeleteBaseModel } from "../../../common/models/softdeletebase.model";
import { Role } from "../../roles/entities/role.model";

registerEnumType(UserStatus, {
  name: "Status",
  description: "Current status of the user within the system"
});

@ObjectType()
export class User extends SoftDeleteBaseModel {
  @Field(() => Int)
  id: number;

  @Field()
  userName: string;

  @Field(() => Role)
  role: Role;

  @Field()
  avatar: string;

  @HideField()
  password: string;

  @Field(() => UserStatus)
  status: UserStatus;

  @Field(() => Member)
  member: Member;

  @Field(() => Int)
  memberId: number;
}
