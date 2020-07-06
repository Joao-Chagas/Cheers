import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("bar_dono", (table) => {
    table.increments("id").notNullable().primary(),
      table.string("idBar").notNullable().references("idBar").inTable("bar"),
      table
        .string("idDono")
        .notNullable()
        .references("login")
        .inTable("proprietario");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("bar_dono");
}
