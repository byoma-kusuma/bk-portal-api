import { Test, TestingModule } from "@nestjs/testing";
import { PasswordTokenService } from "./password-token.service";

describe("PasswordTokenService", () => {
  let service: PasswordTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordTokenService]
    }).compile();

    service = module.get<PasswordTokenService>(PasswordTokenService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
