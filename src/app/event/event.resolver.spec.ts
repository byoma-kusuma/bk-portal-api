import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "nestjs-prisma";
import { EventResolver } from "./event.resolver";
import { EventService } from "./event.service";

describe("EventResolver", () => {
  let resolver: EventResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventResolver, EventService, PrismaService]
    }).compile();

    resolver = module.get<EventResolver>(EventResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
