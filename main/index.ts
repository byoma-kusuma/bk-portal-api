import { Context, HttpRequest } from "@azure/functions";
import { AzureHttpAdapter } from "@nestjs/azure-func-http";
import bootstrap from "src/main";

export default function (context: Context, req: HttpRequest): void {
  context.res = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  AzureHttpAdapter.handle(bootstrap, context, req);
}
