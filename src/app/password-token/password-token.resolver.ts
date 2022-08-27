import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PasswordTokenService } from "./password-token.service";
import { PasswordToken } from "./entities/password-token.entity";

@Resolver(() => PasswordToken)
export class PasswordTokenResolver {
  constructor(private readonly passwordTokenService: PasswordTokenService) {}
}
