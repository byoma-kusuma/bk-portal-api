import { PrismaModule } from "nestjs-prisma";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import config from "../src/common/configs/config";
import { AppController } from "./app.controller";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { GqlConfigService } from "./gql-config.service";
import { RolesModule } from "./roles/roles.module";
import { UsersModule } from "./users/users.module";
import { MembersModule } from "./members/members.module";
import { ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { GqlThrottlerGuard } from "./common/throttling/GqlThrottlerGuard";

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 20,
      limit: 20
    }),
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
    MembersModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppResolver
    /* { */
    /*   provide: APP_GUARD, */
    /*   useClass: GqlThrottlerGuard */
    /* } */
  ]
})
export class AppModule {}
