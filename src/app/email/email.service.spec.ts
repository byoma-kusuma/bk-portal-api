import { createMock } from "@golevelup/ts-jest";

import { EmailService } from "./email.service";

describe("EmailService", () => {
  it("send mail function should be defined", () => {
    const emailServiceMock = createMock<EmailService>();
    expect(emailServiceMock.sendMail({})).toBeDefined();
  });
});
