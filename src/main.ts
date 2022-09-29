import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { PrismaService } from "nestjs-prisma";
import { AppModule } from "./app/app.module";
import type {
  CorsConfig,
  GraphqlConfig,
  NestConfig,
  SwaggerConfig
} from "./common/configs/config.interface";
import { HttpExceptionFilter } from "./common/exceptions/HttpExceptionFilter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService);

  prismaService.enableShutdownHooks(app);

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

  await app.listen(nestConfig?.port || 7200);
}
bootstrap();
