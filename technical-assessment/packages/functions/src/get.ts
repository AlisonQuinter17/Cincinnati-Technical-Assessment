import { requests } from '@technical-assessment/core/client';
import { APIGatewayEvent } from "aws-lambda";

export async function handler(event: APIGatewayEvent) {
    const client_id = event.pathParameters?.client_id;

    if (client_id == null) {
        return { statusCode: 400 };
    }

    const record = await requests
        .selectFrom('requests')
        .select('api_calls')
        .where('client_id', '=', parseInt(client_id))
        .orderBy('api_calls', 'desc')
        .executeTakeFirst()

    let api_call = [record?.api_calls][0] || undefined;

    return {
        statusCode: 200,
        body: api_call
    };
}