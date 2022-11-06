import { PasswordTokenService } from "./password-token.service";
import { createMock } from "@golevelup/ts-jest";

describe("PasswordTokenService", () => {
  it("create and verifyAndRevoke functions should be defined", () => {
    const passwordTokenService = createMock<PasswordTokenService>();

    expect(passwordTokenService.create(0)).toBeDefined();

    expect(passwordTokenService.verifyAndRevoke(0, "Test")).toBeDefined();
  });
});
