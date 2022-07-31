import { join } from 'path';

import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';

import { GraphqlConfig } from './common/configs/config.interface';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}

  createGqlOptions(): ApolloDriverConfig {
    const graphqlConfig = this.configService.get<GraphqlConfig>('graphql');

    const apolloDriverConfig: ApolloDriverConfig = {
      installSubscriptionHandlers: true,
      debug: graphqlConfig.debug,
      playground: graphqlConfig.playgroundEnabled,
      context: ({ req }) => ({ req }),
      useGlobalPrefix: graphqlConfig.globalPrefix ? true : false,
    };

    if (this.configService.get<string>('NODE_ENV') === 'development') {
      apolloDriverConfig.sortSchema = graphqlConfig.sortSchema;
      apolloDriverConfig.autoSchemaFile = join(
        process.cwd(),
        graphqlConfig.schemaDestination
      );
      apolloDriverConfig.buildSchemaOptions = {
        numberScalarMode: 'integer',
      };
      Logger.log('NODE_ENV is ', this.configService.get<string>('NODE_ENV'));
    } else {
      // Azure functions linux does not allow to write to graphql file. So we need to load it to memory.
      // autoSchemaFile if set to true generates a schema file in the memory instead of a file.
      apolloDriverConfig.autoSchemaFile = true;
    }
    return apolloDriverConfig;
  }
}
