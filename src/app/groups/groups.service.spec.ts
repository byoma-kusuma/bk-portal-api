import { createMock } from "@golevelup/ts-jest";

import { CreateGroupInput } from "./dto/create-group.input";
import { UpdateGroupInput } from "./dto/update-group.input";
import { GroupsService } from "./groups.service";

describe("GroupsService", () => {
  it("should be defined", () => {
    const groupServiceMock = createMock<GroupsService>();
    expect(
      groupServiceMock.create(createMock<CreateGroupInput>())
    ).toBeDefined();

    expect(groupServiceMock.filterValidGroups([])).toBeDefined();

    expect(groupServiceMock.findAll()).toBeDefined();

    expect(groupServiceMock.findOne(0)).toBeDefined();

    expect(groupServiceMock.remove(0)).toBeDefined();

    expect(
      groupServiceMock.update(0, createMock<UpdateGroupInput>())
    ).toBeDefined();
  });
});
