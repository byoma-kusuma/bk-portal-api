import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateResourceInput } from "./dto/create-resource.input";
import { UpdateResourceInput } from "./dto/update-resource.input";

@Injectable()
export class ResourceService {
  findUnique = this.prismaService.resource.findUnique;

  constructor(private readonly prismaService: PrismaService) {}

  create(createResourceInput: CreateResourceInput) {
    return "This action adds a new resource";
  }

  findAll() {
    return `This action returns all resource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resource`;
  }

  update(id: number, updateResourceInput: UpdateResourceInput) {
    return `This action updates a #${id} resource`;
  }

  remove(id: number) {
    return `This action removes a #${id} resource`;
  }
}
