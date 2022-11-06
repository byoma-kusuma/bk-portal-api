import { createMock } from "@golevelup/ts-jest";
import { CreateGroupInput } from "./dto/create-group.input";
import { GroupsResolver } from "./groups.resolver";
import { Group } from "./entities/group.entity";
import { UpdateGroupInput } from "./dto/update-group.input";

describe("GroupsResolver", () => {
  it("should be defined", () => {
    const groupsResolverMock = createMock<GroupsResolver>();

    expect(
      groupsResolverMock.createGroup(createMock<CreateGroupInput>())
    ).toBeDefined();

    expect(groupsResolverMock.findAll()).toBeDefined();

    expect(groupsResolverMock.findOne(0)).toBeDefined();

    expect(groupsResolverMock.members(createMock<Group>())).toBeDefined();

    expect(groupsResolverMock.removeGroup(0)).toBeDefined();

    expect(
      groupsResolverMock.updateGroup(createMock<UpdateGroupInput>())
    ).toBeDefined();
  });
});
