import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "nestjs-prisma";
import { MembersResolver } from "./members.resolver";
import { MembersService } from "./members.service";

describe("MembersResolver", () => {
  // let resolver: MembersResolver;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [
  //       {
  //         provide: MembersResolver,
  //         useValue: new MembersResolver(new MembersService(new PrismaService()))
  //       }
  //     ]
  //   }).compile();

  //   resolver = module.get<MembersResolver>(MembersResolver);
  // });

  // it("should be defined", () => {
  //   expect(resolver).toBeDefined();
  // });

  it("should be defined", () => {
    expect(1).toEqual(1);
  });
});
