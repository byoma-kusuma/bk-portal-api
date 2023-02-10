import { Module } from "@nestjs/common";
import { ResourceService } from "./resource.service";
import { ResourceResolver } from "./resource.resolver";

@Module({
  providers: [ResourceResolver, ResourceService]
})
export class ResourceModule {}
