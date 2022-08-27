import { Module } from "@nestjs/common";
import { PasswordTokenService } from "./password-token.service";
import { PasswordTokenResolver } from "./password-token.resolver";

@Module({
  providers: [PasswordTokenResolver, PasswordTokenService]
})
export class PasswordTokenModule {}
