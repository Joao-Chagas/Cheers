import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("funcionario", (table) => {
    table.string("login").notNullable().primary(),
      table.string("senha").notNullable(),
      table.string("Nome").notNullable(),
      table.string("Sobrenome").notNullable(),
      table.string("cpf", 11).notNullable(),
      table.time("dataCadastro").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("funcionario");
}
