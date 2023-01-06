import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { PrismaService } from "nestjs-prisma";
import { AppModule } from "./app/app.module";
import { HttpExceptionFilter } from "./common/exceptions/HttpExceptionFilter";

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set("trust proxy", true);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService);

  prismaService.enableShutdownHooks(app);

  // Prisma Client Exception Filter for unhandled exceptions
  app.useGlobalFilters(new HttpExceptionFilter());

  app.setGlobalPrefix("api");

  await app.init();

  return app;
}
