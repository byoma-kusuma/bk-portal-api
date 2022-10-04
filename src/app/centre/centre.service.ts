import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import createAvatar from "src/common/utils/avatar";
import { CreateCentreInput } from "./dto/create-centre.input";
import { UpdateCentreInput } from "./dto/update-centre.input";

@Injectable()
export class CentreService {
  findMany = this.prisma.centre.findMany;
  findUnique = this.prisma.centre.findUnique;
  findFirst = this.prisma.centre.findFirst;

  constructor(private readonly prisma: PrismaService) {}

  create(createCentreInput: CreateCentreInput) {
    return "This action adds a new centre";
  }

  findAll() {
    return this.prisma.centre.findMany({});
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

  update(id: number, updateCentreInput: UpdateCentreInput) {
    return `This action updates a #${id} centre`;
  }

  remove(id: number) {
    return `This action removes a #${id} centre`;
  }
}
