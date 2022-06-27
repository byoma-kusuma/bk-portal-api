import { Inject, Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
// import { PrismaService } from 'prisma/prisma.service';

import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

@Injectable()
export class RolesService {
  findMany = this.prisma.role.findMany;
  findUnique = this.prisma.role.findUnique;

  constructor(private prisma: PrismaService) {}

  create(createRoleInput: CreateRoleInput) {
    return 'This action adds a new role';
  }

  findAll() {
    return this.prisma.role.findMany({
      include: {
        users: true,
      },
    });
  }

  findOne(name: string) {
    return this.prisma.role.findUnique({
      where: {
        name: name,
      },
    });
  }

  update(id: string, updateRoleInput: UpdateRoleInput) {
    return this.prisma.user.update({
      data: updateRoleInput,
      where: {
        id: id,
      },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} role`;
  }
}
