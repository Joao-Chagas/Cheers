import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("mesa", (table) => {
    table.increments("idMesa").primary();
    table.time("tempoInicio").notNullable();
    table.float("Conta").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("mesa");
}
