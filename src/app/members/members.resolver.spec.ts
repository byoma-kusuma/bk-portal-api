import { UpdateMemberInput } from "./dto/update-member.input";
import { CreateMemberInput } from "./dto/create-member.input";
import { createMock } from "@golevelup/ts-jest";
import { Member } from "./entities/member.entity";

import { MembersResolver } from "./members.resolver";
import { User } from "../users/models/user.model";

describe("MembersResolver", () => {
  it("should be defined", () => {
    const membersResolverMock = createMock<MembersResolver>();

    expect(membersResolverMock.centre(createMock<Member>())).toBeDefined();

    expect(
      membersResolverMock.createMember(createMock<CreateMemberInput>())
    ).toBeDefined();

    expect(membersResolverMock.findAll()).toBeDefined();

    expect(membersResolverMock.findOne(0)).toBeDefined();

    expect(membersResolverMock.groups(createMock<Member>())).toBeDefined();

    expect(
      membersResolverMock.removeMember(0, createMock<User>())
    ).toBeDefined();

    expect(
      membersResolverMock.updateMember(createMock<UpdateMemberInput>())
    ).toBeDefined();

    expect(membersResolverMock.user(createMock<Member>())).toBeDefined();
  });
});
