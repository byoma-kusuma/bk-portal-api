import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UpdateCentreInput } from "./dto/update-centre.input";
import { CreateCentreInput } from "./dto/create-centre.input";

@Injectable()
export class CentreService {
  findMany = this.prisma.centre.findMany;
  findUnique = this.prisma.centre.findUnique;
  findFirst = this.prisma.centre.findFirst;

  constructor(private readonly prisma: PrismaService) {}

  async create(createCentreInput: CreateCentreInput) {
    return await this.prisma.centre.create({
      data: createCentreInput
    });
  }

  async findAll() {
    return await this.prisma.centre.findMany({});
  }

  async findOne(id: number) {
    const centre = await this.prisma.centre.findFirst({
      where: {
        id
      }
    });

    if (!centre) {
      throw new NotFoundException(`Centre with id: '${id}' not found`);
    }
    return centre;
  }

  async update(id: number, updateCentreInput: UpdateCentreInput) {
    const centre = await this.prisma.centre.findFirst({
      where: {
        id
      }
    });

    if (!centre) {
      throw new NotFoundException(`Centre with id: '${id}' not found`);
    }

    return await this.prisma.centre.update({
      data: updateCentreInput,
      where: {
        id
      }
    });
  }

  async remove(id: number) {
    const deleteCentre = await this.prisma.centre.delete({
      where: {
        id
      }
    });
  }
}
