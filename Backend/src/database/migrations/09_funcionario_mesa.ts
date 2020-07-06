import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("funcionario_mesa", (table) => {
    table.increments("id").primary();
    table
      .string("loginFuncionario")
      .notNullable()
      .references("login")
      .inTable("funcionario");
    table.integer("idMesa").notNullable().references("idMesa").inTable("mesa");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("funcionario_mesa");
}
