import { Kysely } from 'kysely';

/**
* @param db {Kysely<any>}
*/
export async function up(db) {
    await db.insertInto("clients").values({ name: "Jhon Doe" }).execute();
    await db.insertInto("clients").values({ name: "Jane Doe" }).execute();
}

/**
* @param db {Kysely<any>}
*/
export async function down(db) {
    // Migration code
}