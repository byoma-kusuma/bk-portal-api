import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
  Info,
} from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Logger } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { User } from '../users/models/user.model';
import { RoleWhereInput } from '../@generated/role/role-where.input';
import { RoleWhereUniqueInput } from '../@generated/role/role-where-unique.input';

@Resolver(() => Role)
export class RolesResolver {
  private readonly logger = new Logger(RolesResolver.name);

  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => Role)
  createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.rolesService.create(createRoleInput);
  }

  @Query(() => [Role], { name: 'roles' })
  async findAll(
    @Args({ name: 'where', nullable: true, type: () => RoleWhereInput })
    where: RoleWhereInput,
    @Info() info: GraphQLResolveInfo
  ) {
    const select = new PrismaSelect(info, {
      defaultFields: { Role: { id: true } },
    }).value.select;
    return this.rolesService.findMany({ select, where });
  }

  @Query(() => Role, { name: 'role' })
  findOne(
    @Args({ name: 'where', nullable: true, type: () => RoleWhereInput })
    where: RoleWhereUniqueInput,
    @Info() info: GraphQLResolveInfo
  ) {
    const select = new PrismaSelect(info, {
      defaultFields: { Role: { id: true } },
    }).value.select;
    return this.rolesService.findUnique({ select, where });
  }

  @Mutation(() => Role)
  updateRole(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.rolesService.update(updateRoleInput.id, updateRoleInput);
  }

  @Mutation(() => Role)
  removeRole(@Args('id', { type: () => Int }) id: string) {
    return this.rolesService.remove(id);
  }

  @ResolveField(() => [User])
  users(@Parent() role: Role) {
    return this.rolesService.findUnique({ where: { id: role.id } }).users();
  }
}
