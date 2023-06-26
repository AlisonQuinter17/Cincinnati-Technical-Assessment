import { Kysely } from "kysely";
import { DataApiDialect } from "kysely-data-api";
import { RDSData } from "@aws-sdk/client-rds-data";
import { RDS } from "sst/node/rds";

export interface DatabaseTypeClient {
    clients: {
        id: string;
        name: number;
    };
}

export const clients = new Kysely<DatabaseTypeClient>({
    dialect: new DataApiDialect({
        mode: "postgres",
        driver: {
            database: RDS.Database.defaultDatabaseName,
            secretArn: RDS.Database.secretArn,
            resourceArn: RDS.Database.clusterArn,
            client: new RDSData({}),
        },
    }),
});

export interface DatabaseTypeRequest {
    requests: {
        id: string;
        client_id: number;
        api_calls: number;
    };
}

export const requests = new Kysely<DatabaseTypeRequest>({
    dialect: new DataApiDialect({
        mode: "postgres",
        driver: {
            database: RDS.Database.defaultDatabaseName,
            secretArn: RDS.Database.secretArn,
            resourceArn: RDS.Database.clusterArn,
            client: new RDSData({}),
        },
    }),
});