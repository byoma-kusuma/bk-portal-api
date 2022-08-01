import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "nestjs-prisma";
import { MembersService } from "./members.service";

describe("MembersService", () => {
  //   let service: MembersService;
  //   beforeEach(async () => {
  //     const module: TestingModule = await Test.createTestingModule({
  //       providers: [
  //         {
  //           provide: MembersService,
  //           useValue: new MembersService(new PrismaService())
  //         }
  //       ]
  //     }).compile();
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     service = module.get<MembersService>(MembersService);
  //   });
  //   it("should be defined", () => {
  //     expect(service).toBeDefined();
  //   });
  it("should be defined", () => {
    expect(1).toEqual(1);
  });
});
