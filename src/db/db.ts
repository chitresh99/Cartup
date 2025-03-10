import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import {Pool} from "pg";

/*
https://orm.drizzle.team/docs/get-started/postgresql-new
*/

//creates a postgress connection 
const pool = new Pool({
    connectionString:process.env.DATABASE_URL!,
});

//gives that connection to drizzle
export const db = drizzle(pool);

