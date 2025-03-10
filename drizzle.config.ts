import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: ['./src/db/productsSchema.ts'], //making an array to add more schema's
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose:true,
  strict:true,
});

//npx drizzle-studio push -> quicky testing schema's in a local development environment
//later when we go to production we need to manage these changes through migration
//with generate we move the database from a previous state to the new state