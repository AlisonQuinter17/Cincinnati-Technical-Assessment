import { Kysely } from 'kysely';

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
    await db.schema
        .createTable("clients")
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn("name", "varchar(200)", (col) => col.notNull())
        .execute();
    await db.schema
        .createTable("requests")
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('client_id', 'integer', (col) => col.notNull())
        .addForeignKeyConstraint('client_foreignKey', ['client_id'], 'clients', ['id'])
        .addColumn("api_calls", "serial", (col) => col.notNull())
        .execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
    await db.schema.dropTable("requests").execute();
    await db.schema.dropTable("clients").execute();
}