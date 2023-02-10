import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateAddressInput } from "./dto/create-address.input";
import { UpdateAddressInput } from "./dto/update-address.input";

@Injectable()
export class AddressService {
  findMany = this.prisma.address.findMany;
  findUnique = this.prisma.address.findUnique;
  findFirst = this.prisma.address.findFirst;

  constructor(private readonly prisma: PrismaService) {}

  async create(createAddressInput: CreateAddressInput) {
    return await this.prisma.address.create({
      data: createAddressInput
    });
  }

  async findAll() {
    return await this.prisma.address.findMany();
  }

  async findOne(id: number) {
    const address = await this.prisma.address.findFirst({
      where: {
        id
      }
    });

    if (!address) {
      throw new NotFoundException(`Address with id: '${id}' not found`);
    }
    return address;
  }

  async update(id: number, updateAddressInput: UpdateAddressInput) {
    const address = await this.prisma.address.findFirst({
      where: {
        id
      }
    });

    if (!address) {
      throw new NotFoundException(`Address with id: '${id}' not found`);
    }

    return await this.prisma.address.update({
      data: updateAddressInput,
      where: {
        id
      }
    });
  }

  async remove(id: number) {
    const deleteAddress = await this.prisma.address.delete({
      where: {
        id
      }
    });
  }
}
