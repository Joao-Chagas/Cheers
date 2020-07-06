import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("usuario", (table) => {
    table.string("login").notNullable().primary();
    table.string("senha").notNullable();
    table.string("nome").notNullable();
    table.string("sobrenome").notNullable();
    table.string("email").notNullable();
    table.string("cpf", 11).notNullable();
    table.string("telefone").notNullable();
    table.string("telEmergencia").nullable();
    table.integer("pontos").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("usuario");
}
