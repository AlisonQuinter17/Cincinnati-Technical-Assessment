import { SSTConfig } from "sst";
import { ApiService } from "./stacks/ApiService";
import { DatabaseService } from "./stacks/DatabaseService";

export default {
  config(_input) {
    return {
      name: "technical-assessment",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DatabaseService);
    app.stack(ApiService);
  }
} satisfies SSTConfig;
