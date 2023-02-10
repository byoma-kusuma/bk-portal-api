import { Module } from "@nestjs/common";
import { AbhisekhaService } from "./abhisekha.service";
import { AbhisekhaResolver } from "./abhisekha.resolver";

@Module({
  providers: [AbhisekhaResolver, AbhisekhaService]
})
export class AbhisekhaModule {}
