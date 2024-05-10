import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://top-idea_owner:jUoQIT0uR5Gv@ep-spring-mouse-a5t5630j.us-east-2.aws.neon.tech/top-idea?sslmode=require"
);
export const db = drizzle(sql, { schema });
