import { PrismaService } from "nestjs-prisma";
import { Test, TestingModule } from "@nestjs/testing";
import { RolesService } from "./roles.service";

describe("RolesService", () => {
  let service: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PrismaService,
          useValue: new PrismaService()
        },
        RolesService
      ]
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
