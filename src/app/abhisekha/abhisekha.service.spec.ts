import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "nestjs-prisma";
import { AbhisekhaService } from "./abhisekha.service";

describe("AbhisekhaService", () => {
  let service: AbhisekhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbhisekhaService, PrismaService]
    }).compile();

    service = module.get<AbhisekhaService>(AbhisekhaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
