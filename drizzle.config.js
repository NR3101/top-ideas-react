/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://top-idea_owner:jUoQIT0uR5Gv@ep-spring-mouse-a5t5630j.us-east-2.aws.neon.tech/top-idea?sslmode=require",
  },
};

// {
//   "dialect": "postgresql",
//   "out": "./migrations-folder",
//   "schema": "./utils/schema.js",
//   "breakpoints": false,
//   "driver": "pg",
//   "dbCredentials": {
//     "connectionString": "postgresql://top-idea_owner:jUoQIT0uR5Gv@ep-spring-mouse-a5t5630j.us-east-2.aws.neon.tech/top-idea?sslmode=require"
//   }
// }
