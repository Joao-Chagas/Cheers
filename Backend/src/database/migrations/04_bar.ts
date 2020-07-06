import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("bar", (table) => {
    table.increments("idBar").primary().notNullable();
    table.string("nome").notNullable();
    table.string("cep", 8).notNullable();
    table.integer("complemento").notNullable();
    table.boolean("categoria").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("bar");
}
