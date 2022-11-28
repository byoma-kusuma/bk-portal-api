import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app/app.module";

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set("trust proxy", true);

  app.setGlobalPrefix("api");

  await app.init();

  return app;
}
