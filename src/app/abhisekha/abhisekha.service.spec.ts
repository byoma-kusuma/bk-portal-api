import { Test, TestingModule } from "@nestjs/testing";
import { AbhisekhaService } from "./abhisekha.service";

describe("AbhisekhaService", () => {
  let service: AbhisekhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbhisekhaService]
    }).compile();

    service = module.get<AbhisekhaService>(AbhisekhaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
