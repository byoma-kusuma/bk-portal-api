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
import { CreateUserInput } from "./dto/create-user.input";

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  async me(@CurrentUser() user: User): Promise<User> {
    return user;
  }

  @Mutation(() => User)
  createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
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
