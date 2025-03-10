//defining a schema is an abstarct way of creating a table

import { integer, pgTable, varchar ,text,doublePrecision} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description:text(),
  image: varchar({length:255}),
  price: doublePrecision().notNull(),
});
