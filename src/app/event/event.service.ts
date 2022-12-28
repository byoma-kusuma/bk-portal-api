import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";

@Injectable()
export class EventService {
  findUnique = this.prismaService.event.findUnique;

  constructor(private readonly prismaService: PrismaService) {}

  create(createEventInput: CreateEventInput) {
    return this.prismaService.event.create({
      data: createEventInput
    });
  }

  findAll() {
    return this.prismaService.event.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.event.findFirst({
      where: {
        isDeleted: false,
        id
      }
    });
  }

  update(id: number, updateEventInput: UpdateEventInput) {
    return this.prismaService.event.update({
      where: {
        id
      },
      data: updateEventInput
    });
  }

  remove(id: number) {
    return this.prismaService.event.update({
      where: {
        id
      },
      data: {
        isDeleted: true
      }
    });
  }
}
