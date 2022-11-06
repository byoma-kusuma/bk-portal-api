import { createMock } from "@golevelup/ts-jest";

import { CreateMemberInput } from "./dto/create-member.input";
import { UpdateMemberInput } from "./dto/update-member.input";
import { MembersService } from "./members.service";

describe("MembersService", () => {
  it("should be defined", () => {
    const membersServiceMock = createMock<MembersService>();

    expect(membersServiceMock.filterValidMembers([])).toBeDefined();

    expect(
      membersServiceMock.create(createMock<CreateMemberInput>())
    ).toBeDefined();

    expect(membersServiceMock.findAll()).toBeDefined();

    expect(membersServiceMock.findOne(0)).toBeDefined();
    expect(membersServiceMock.remove(0, 0)).toBeDefined();

    expect(
      membersServiceMock.update(0, createMock<UpdateMemberInput>())
    ).toBeDefined();
  });
});
