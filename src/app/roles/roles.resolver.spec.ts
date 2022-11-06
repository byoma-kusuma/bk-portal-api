import { UpdateRoleInput } from "./dto/update-role.input";
import { CreateRoleInput } from "./dto/create-role.input";

import { createMock } from "@golevelup/ts-jest";

import { RolesResolver } from "./roles.resolver";
import { GraphQLResolveInfo } from "graphql";
import { RoleWhereInput } from "src/@generated/role/role-where.input";
import { RoleWhereUniqueInput } from "src/@generated/role/role-where-unique.input";
import { Role } from "./entities/role.model";

describe("RolesResolver", () => {
  it("should be defined", () => {
    const rolesResolverMock = createMock<RolesResolver>();

    expect(
      rolesResolverMock.createRole(createMock<CreateRoleInput>())
    ).toBeDefined();

    expect(
      rolesResolverMock.findAll(
        createMock<RoleWhereInput>(),
        createMock<GraphQLResolveInfo>()
      )
    ).toBeDefined();

    expect(
      rolesResolverMock.findOne(
        createMock<RoleWhereUniqueInput>(),
        createMock<GraphQLResolveInfo>()
      )
    ).toBeDefined();

    expect(rolesResolverMock.removeRole("")).toBeDefined();

    expect(
      rolesResolverMock.updateRole(createMock<UpdateRoleInput>())
    ).toBeDefined();

    expect(rolesResolverMock.users(createMock<Role>())).toBeDefined();
  });
});
