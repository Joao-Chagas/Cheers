import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("bar_mesa", (table) => {
    table.increments("id").notNullable().primary(),
      table.integer("idBar").notNullable().references("idBar").inTable("bar"),
      table
        .integer("idMesa")
        .notNullable()
        .references("idMesa")
        .inTable("mesa");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("bar_mesa");
}
