import { RDS, StackContext } from "sst/constructs";

export function DatabaseService({ stack }: StackContext) {
    const clients_db = new RDS(stack, "Database", {
        engine: "postgresql11.13",
        defaultDatabaseName: "clients",
        migrations: "migrations/scripts"
    });
    return clients_db;
}
