import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("pedidos", (table) => {
    table.increments("idPedido").primary().notNullable();
    table.string("nome").notNullable();
    table.float("valor").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("pedidos");
}
