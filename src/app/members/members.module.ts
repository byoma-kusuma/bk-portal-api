import { forwardRef, Module } from "@nestjs/common";
import { MembersService } from "./members.service";
import { MembersResolver } from "./members.resolver";
import { GroupsModule } from "../groups/groups.module";
import { EmailModule } from "../email/email.module";

@Module({
  imports: [forwardRef(() => GroupsModule), EmailModule],
  providers: [MembersResolver, MembersService],
  exports: [MembersService]
})
export class MembersModule {}
