import { PrismaModule } from "nestjs-prisma";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import config from "../../src/common/configs/config";
import { AppController } from "./app.controller";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { AuthModule } from "../app/auth/auth.module";
import { GqlConfigService } from "../gql-config.service";
import { RolesModule } from "../app/roles/roles.module";
import { UsersModule } from "../app/users/users.module";
import { MembersModule } from "../app/members/members.module";
// import { ThrottlerModule } from "@nestjs/throttler";
import { PasswordTokenModule } from "./password-token/password-token.module";
import { EmailModule } from "./email/email.module";
import { CentreModule } from "./centre/centre.module";
import { GroupsModule } from "./groups/groups.module";

@Module({
  imports: [
    // CacheModule.register(),
    // ThrottlerModule.forRoot({
    //   ttl: 20,
    //   limit: 20
    // }),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => ({
        prismaOptions: {
          log: ["info", "query"]
        },
        explicitConnect: false
      })
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService
    }),
    AuthModule,
    UsersModule,
    RolesModule,
    MembersModule,
    PasswordTokenModule,
    EmailModule,
    MembersModule,
    CentreModule,
    GroupsModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver]
})
export class AppModule {}
