import { clients } from '@technical-assessment/core/client';

export async function handler() {
  const record = await clients
    .selectFrom("clients")
    .selectAll()
    .execute();

  return {
    statusCode: 200,
    body: JSON.stringify(record),
  };
}
