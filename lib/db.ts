import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_PORT!,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});

export default async function executeQuery<T>({ query, values }: { query: string, values?: Record<string, any>}): Promise<T> {
  try {
    const results: T = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    throw error;
  }
}