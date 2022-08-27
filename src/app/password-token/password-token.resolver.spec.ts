import { Test, TestingModule } from "@nestjs/testing";
import { PasswordTokenResolver } from "./password-token.resolver";
import { PasswordTokenService } from "./password-token.service";

describe("PasswordTokenResolver", () => {
  let resolver: PasswordTokenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordTokenResolver, PasswordTokenService]
    }).compile();

    resolver = module.get<PasswordTokenResolver>(PasswordTokenResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
