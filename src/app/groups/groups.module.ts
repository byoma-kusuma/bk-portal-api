import { forwardRef, Module } from "@nestjs/common";
import { GroupsService } from "./groups.service";
import { GroupsResolver } from "./groups.resolver";
import { MembersModule } from "../member/members.module";

@Module({
  imports: [forwardRef(() => MembersModule)],
  providers: [GroupsResolver, GroupsService],
  exports: [GroupsService]
})
export class GroupsModule {}
