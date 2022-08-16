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
import { Query, UseGuards } from "@nestjs/common";
import { GqlThrottlerGuard } from "src/common/throttling/GqlThrottlerGuard";
import { Throttle } from "@nestjs/throttler";
import { ResetPasswordInput } from "./dto/reset-password.input";
import { ResetPasswordInitiateInput } from "./dto/reset-password-initiate.input";
import { User } from "src/users/models/user.model";

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

  @Throttle(4, 60)
  @UseGuards(GqlThrottlerGuard)
  @Mutation(() => User)
  async initiateResetPassword(
    @Args("resetPasswordInitiateInput")
    resetPasswordInitiateInput: ResetPasswordInitiateInput
  ) {
    return this.auth.initiateRequestPassword(
      resetPasswordInitiateInput.userName
    );
  }

  /* @Mutation(() => Auth) */
  /* async resetPassword( */
  /*   @Args("resetPasswordInput") resetPasswordInput: ResetPasswordInput */
  /* ) { */
  /*   return this.auth.resetPassword(resetPasswordInput.otp); */
  /* } */

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    return this.auth.refreshToken(token);
  }
}
