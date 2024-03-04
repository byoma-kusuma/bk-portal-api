import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { Auth } from "./models/auth.model";
import { Token } from "./models/token.model";
import { LoginInput } from "./dto/login.input";
import { RefreshTokenInput } from "./dto/refresh-token.input";
// import { UseGuards } from "@nestjs/common";
// import { GqlThrottlerGuard } from "@src/common/throttling/GqlThrottlerGuard";
// import { Throttle } from "@nestjs/throttler";
import { ResetPasswordInput } from "./dto/reset-password.input";
import { ResetPasswordInitiateInput } from "./dto/reset-password-initiate.input";
import ResponseStatus from "../../common/ResponseClasses/ResponseStatus";

// 4 requests per 60 secods
// const AUTH_THROTTLE_RATE = [4, 60];

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  // @Throttle(...AUTH_THROTTLE_RATE)
  // @UseGuards(GqlThrottlerGuard)
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

  // @Throttle(...AUTH_THROTTLE_RATE)
  // @UseGuards(GqlThrottlerGuard)
  @Mutation(() => ResponseStatus)
  async initiateResetPassword(
    @Args("resetPasswordInitiateInput")
    resetPasswordInitiateInput: ResetPasswordInitiateInput
  ) {
    // don't await here because we want response to be immediate and ambiguous for all scenarios
    this.auth.initiateRequestPassword(resetPasswordInitiateInput.userName);
    return new ResponseStatus("Completed");
  }

  // @Throttle(...AUTH_THROTTLE_RATE)
  // @UseGuards(GqlThrottlerGuard)
  @Mutation(() => ResponseStatus)
  async resetPassword(
    @Args("resetPasswordInput") resetPasswordInput: ResetPasswordInput
  ) {
    await this.auth.resetPassword(resetPasswordInput);
    return new ResponseStatus("Completed");
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenInput) {
    return this.auth.refreshToken(token);
  }
}
