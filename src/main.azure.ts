import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app/app.module";
import { HttpExceptionFilter } from "./common/exceptions/HttpExceptionFilter";
import { ConfigService } from "@nestjs/config";
import { CorsConfig } from "./common/configs/config.interface";

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set("trust proxy", true);
  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // enable shutdown hook
  app.enableShutdownHooks();

  // Prisma Client Exception Filter for unhandled exceptions
  app.useGlobalFilters(new HttpExceptionFilter());

  app.setGlobalPrefix("api");

  
  const configService = app.get(ConfigService);
  const corsConfig = configService.get<CorsConfig>("cors");

  if (corsConfig?.enabled) {
    app.enableCors();
  }

  await app.init();

  return app;
}
