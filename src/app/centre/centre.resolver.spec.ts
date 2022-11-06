import { Test, TestingModule } from "@nestjs/testing";
import { CentreResolver } from "./centre.resolver";
import { CentreService } from "./centre.service";

describe("CentreResolver", () => {
  let resolver: CentreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentreResolver, CentreService]
    }).compile();

    resolver = module.get<CentreResolver>(CentreResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
