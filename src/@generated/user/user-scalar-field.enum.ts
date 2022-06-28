import { registerEnumType } from "@nestjs/graphql";

export enum UserScalarFieldEnum {
  id = "id",
  userName = "userName",
  email = "email",
  password = "password",
  firstName = "firstName",
  lastName = "lastName",
  isDeleted = "isDeleted",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  uniqueKey = "uniqueKey",
  updatedBy = "updatedBy",
  createdBy = "createdBy",
  status = "status",
  roleId = "roleId"
}

registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined
});
