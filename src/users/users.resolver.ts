import { PrismaService } from "nestjs-prisma";
// import { PrismaService } from 'prisma/prisma.service';

import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
  Info
} from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { CurrentUser } from "../common/decorators/currentUser.decorator";
import { GqlAuthGuard } from "../auth/gql-auth.guard";
import { UsersService } from "./users.service";
import { User } from "./models/user.model";
import { ChangePasswordInput } from "./dto/change-password.input";
import { GraphQLResolveInfo } from "graphql";
import { PrismaSelect } from "@paljs/plugins";
import { UserRequest } from "src/common/decorators/userRequest";
import { Request } from "express";
@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService
  ) {}

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(
    @CurrentUser() user: User,
    @UserRequest() req: Request
  ): Promise<User> {
    console.log(req.headers);
    return user;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async changePassword(
    @CurrentUser() user: User,
    @Args("data") changePassword: ChangePasswordInput
  ) {
    return this.usersService.changePassword(
      user.id,
      user.password,
      changePassword
    );
  }

  // @ResolveField('posts')
  // posts(@Parent() author: User) {
  //   return this.prisma.user.findUnique({ where: { id: author.id } }).posts();
  // }
}
