import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Load the .env file
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL || '';

// Connect to the database
const client = postgres(connectionString);
export const db = drizzle(client);
