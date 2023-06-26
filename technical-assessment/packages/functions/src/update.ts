import { sql } from "kysely";
import { requests } from '@technical-assessment/core/client';
import { APIGatewayEvent } from "aws-lambda";
import { handler as getApiCall } from "./get";

export async function handler(event: APIGatewayEvent) {
    const client_id = event.pathParameters?.client_id
    if (client_id == null) {
        return { statusCode: 400 };
    }

    let api_call = await getApiCall(event);
    if (api_call.body == undefined) { api_call.body = 1 }
    else if (api_call.body > 0) { api_call.body += 1 }

    const record = await requests
        .insertInto('requests')
        .values({
            id: sql`DEFAULT`,
            client_id: parseInt(client_id),
            api_calls: api_call.body
        })
        .returningAll()
        .execute()

    return {
        statusCode: 200,
        body: JSON.stringify(record)
    };
}