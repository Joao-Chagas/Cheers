import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("mesa_pedido", (table) => {
    table.increments("id").notNullable().primary(),
      table
        .integer("idPedido")
        .notNullable()
        .references("idPedido")
        .inTable("pedidos"),
      table
        .integer("idMesa")
        .notNullable()
        .references("idMesa")
        .inTable("mesa");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("mesa_pedido");
}
