import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateResourceInput } from "./dto/create-resource.input";
import { UpdateResourceInput } from "./dto/update-resource.input";

@Injectable()
export class ResourceService {
  findUnique = this.prismaService.resource.findUnique;

  constructor(private readonly prismaService: PrismaService) {}

  create(createResourceInput: CreateResourceInput) {
    return this.prismaService.resource.create({
      data: createResourceInput
    });
  }

  findAll() {
    return this.prismaService.resource.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.resource.findFirst({
      where: {
        isDeleted: false,
        id
      }
    });
  }

  update(id: number, updateResourceInput: UpdateResourceInput) {
    return this.prismaService.resource.update({
      data: updateResourceInput,
      where: { id }
    });
  }

  remove(id: number) {
    return this.prismaService.resource.update({
      where: { id },
      data: {
        isDeleted: true
      }
    });
  }
}
