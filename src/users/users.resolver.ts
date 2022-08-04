import { PrismaService } from "nestjs-prisma";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent
} from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { CurrentUser } from "../common/decorators/currentUser.decorator";
import { GqlAuthGuard } from "../auth/gql-auth.guard";
import { UsersService } from "./users.service";
import { User } from "./models/user.model";
import { ChangePasswordInput } from "./dto/change-password.input";
import { Member } from "src/members/entities/member.entity";

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService
  ) {}

  @Query(() => User)
  async me(@CurrentUser() user: User): Promise<User> {
    return user;
  }

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

  @ResolveField(() => Member)
  member(@Parent() user: User) {
    return this.usersService.findUnique({ where: { id: user.id } }).member();
  }
}
