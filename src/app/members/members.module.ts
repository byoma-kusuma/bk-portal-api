import { forwardRef, Module } from "@nestjs/common";
import { MembersService } from "./members.service";
import { MembersResolver } from "./members.resolver";
import { GroupsModule } from "../groups/groups.module";

@Module({
  imports: [forwardRef(() => GroupsModule)],
  providers: [MembersResolver, MembersService],
  exports: [MembersService]
})
export class MembersModule {}
