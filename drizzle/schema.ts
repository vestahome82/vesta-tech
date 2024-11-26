import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: text('id').primaryKey(), // Unique user ID
  email: varchar('email', { length: 256 }).notNull(), // User email
  hashed_password: text('hashed_password').notNull(), // Hashed password
  created_at: timestamp('created_at').defaultNow().notNull(), // Account creation time
});
