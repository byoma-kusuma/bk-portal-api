import { CentreCreateInput } from "@src/@generated/centre/centre-create.input";

import { createMock } from "@golevelup/ts-jest";
import { Prisma } from "@prisma/client";

import { CentreService } from "./centre.service";
import { UpdateCentreInput } from "./dto/update-centre.input";

describe("CentreService", () => {
  it("should be defined", () => {
    const centreServiceMock = createMock<CentreService>();

    expect(
      centreServiceMock.create(createMock<CentreCreateInput>())
    ).toBeDefined();

    expect(centreServiceMock.findAll()).toBeDefined();

    expect(centreServiceMock.findFirst()).toBeDefined();

    expect(centreServiceMock.findMany()).toBeDefined();

    expect(
      centreServiceMock.findUnique({
        where: createMock<Prisma.CentreWhereUniqueInput>()
      })
    ).toBeDefined();

    expect(centreServiceMock.remove(0)).toBeDefined();

    expect(
      centreServiceMock.update(0, createMock<UpdateCentreInput>())
    ).toBeDefined();
  });
});
