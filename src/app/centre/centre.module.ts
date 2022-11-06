import { Module } from "@nestjs/common";
import { CentreService } from "./centre.service";
import { CentreResolver } from "./centre.resolver";

@Module({
  providers: [CentreResolver, CentreService]
})
export class CentreModule {}
