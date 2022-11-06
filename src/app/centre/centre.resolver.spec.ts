import { createMock } from "@golevelup/ts-jest";

import { CentreResolver } from "./centre.resolver";
import { CreateCentreInput } from "./dto/create-centre.input";
import { UpdateCentreInput } from "./dto/update-centre.input";

describe("CentreResolver", () => {
  it("should be defined", () => {
    const centreResolverMock = createMock<CentreResolver>();

    expect(
      centreResolverMock.createCentre(createMock<CreateCentreInput>())
    ).toBeDefined();

    expect(centreResolverMock.findAll()).toBeDefined();

    expect(centreResolverMock.findOne(0)).toBeDefined();

    expect(centreResolverMock.removeCentre(0)).toBeDefined();

    expect(
      centreResolverMock.updateCentre(createMock<UpdateCentreInput>())
    ).toBeDefined();
  });
});
