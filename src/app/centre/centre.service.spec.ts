import { Test, TestingModule } from "@nestjs/testing";
import { CentreService } from "./centre.service";

describe("CentreService", () => {
  let service: CentreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentreService]
    }).compile();

    service = module.get<CentreService>(CentreService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
