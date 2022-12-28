import { Test, TestingModule } from "@nestjs/testing";
import { ResourceResolver } from "./resource.resolver";
import { ResourceService } from "./resource.service";

describe("ResourceResolver", () => {
  let resolver: ResourceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceResolver, ResourceService]
    }).compile();

    resolver = module.get<ResourceResolver>(ResourceResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
