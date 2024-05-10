import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Ideas = pgTable("ideas", {
  id: serial("id").primaryKey(),
  content: varchar("content").notNull(),
  username: varchar("username").notNull(),
  votes: integer("votes").default(0),
  createdAt: varchar("createdAt").notNull(),
});
