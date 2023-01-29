import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "nestjs-prisma";
import { AbhisekhaResolver } from "./abhisekha.resolver";
import { AbhisekhaService } from "./abhisekha.service";

describe("AbhisekhaResolver", () => {
  let resolver: AbhisekhaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbhisekhaResolver, AbhisekhaService, PrismaService]
    }).compile();

    resolver = module.get<AbhisekhaResolver>(AbhisekhaResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});