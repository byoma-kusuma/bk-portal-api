import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app/app.module";
import type {
  CorsConfig,
  GraphqlConfig,
  NestConfig,
  SwaggerConfig
} from "./common/configs/config.interface";
import { HttpExceptionFilter } from "./common/exceptions/HttpExceptionFilter";

export default async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set("trust proxy", true);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // enable shutdown hook
  app.enableShutdownHooks();

  // Prisma Client Exception Filter for unhandled exceptions

  app.useGlobalFilters(new HttpExceptionFilter());

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>("nest");
  const corsConfig = configService.get<CorsConfig>("cors");
  const swaggerConfig = configService.get<SwaggerConfig>("swagger");
  const graphqlConfig = configService.get<GraphqlConfig>("graphql");

  // Swagger Api
  if (swaggerConfig?.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig?.title || "Nestjs")
      .setDescription(
        swaggerConfig?.description || "The nestjs API description"
      )
      .setVersion(swaggerConfig?.version || "1.0")
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig?.path || "api", app, document);
  }

  app.setGlobalPrefix(graphqlConfig?.globalPrefix || "api");

  // Cors
  if (corsConfig?.enabled) {
    app.enableCors();
  }

  // Prisma Client Exception Filter for unhandled exceptions
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(nestConfig?.port || 7200);
  return app;
}

bootstrap();
