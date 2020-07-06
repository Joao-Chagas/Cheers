import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("user_mesa_bar", (table) => {
    table.increments("id").notNullable().primary(),
      table.integer("idBar").notNullable().references("idBar").inTable("bar"),
      table
        .integer("idMesa")
        .notNullable()
        .references("idMesa")
        .inTable("mesa");
    table.string("login").notNullable().references("login").inTable("usuario");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("user_mesa_bar");
}
