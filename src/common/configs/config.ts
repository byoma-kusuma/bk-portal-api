import type { Config } from "./config.interface";

const config: Config = {
  nest: {
    port: 7200
  },
  cors: {
    enabled: true
  },
  swagger: {
    enabled: true,
    title: "Nestjs FTW",
    description: "The nestjs API description",
    version: "1.5",
    path: "api"
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: "src/schema.graphql",
    sortSchema: true,
    globalPrefix: "api"
  },
  security: {
    expiresIn: process.env.NODE_ENV === "development" ? "12h" : "15m",
    refreshIn: "1d",
    bcryptSaltOrRound: 10
  }
};

export default (): Config => config;
