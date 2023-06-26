import { Api, StackContext, use } from "sst/constructs";
import { DatabaseService } from "./DatabaseService";

export function ApiService({ stack }: StackContext) {
  const db = use(DatabaseService)
  const client_api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [db],
      },
    },
    routes: {
      "GET /clients": "packages/functions/src/list.handler",
      "GET /requests/{client_id}": "packages/functions/src/get.handler",
      "POST /requests/{client_id}": "packages/functions/src/update.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: client_api.url,
  });
}
