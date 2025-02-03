/*
 *  @type { import("drizzle-kit").Config } */

export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
      url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL || 'postgresql://neondb_owner:eAH94BgDbMoU@ep-dark-paper-a8h8hw3l.eastus2.azure.neon.tech/Interview-Tester?sslmode=require',
  }
};