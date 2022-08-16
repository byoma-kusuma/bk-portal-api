import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField
} from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { Auth } from "./models/auth.model";
import { Token } from "./models/token.model";
import { LoginInput } from "./dto/login.input";
import { RefreshTokenInput } from "./dto/refresh-token.input";
import { UseGuards } from "@nestjs/common";
import { GqlThrottlerGuard } from "src/common/throttling/GqlThrottlerGuard";
import { Throttle } from "@nestjs/throttler";
import { ResetPasswordInput } from "./dto/reset-password.input";

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  @Throttle(4, 60)
  @UseGuards(GqlThrottlerGuard)
  @Mutation(() => Auth)
  async login(@Args("data") { userName, password }: LoginInput) {
    const { accessToken, refreshToken } = await this.auth.login(
      userName,
      password
    );
    return {
      accessToken,
      refreshToken
    };
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    return this.auth.refreshToken(token);
  }
}
