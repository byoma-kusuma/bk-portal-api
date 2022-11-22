import { PrismaService } from "nestjs-prisma";
import { Test, TestingModule } from "@nestjs/testing";
import { PasswordTokenResolver } from "./password-token.resolver";
import { PasswordTokenService } from "./password-token.service";
import { createMock } from "@golevelup/ts-jest";

describe("PasswordTokenResolver", () => {
  it("should be defined", () => {
    const passwordTokenResolverMock = createMock<PasswordTokenResolver>();

    expect(passwordTokenResolverMock).toBeDefined();
  });
});
