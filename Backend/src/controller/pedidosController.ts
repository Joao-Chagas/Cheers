import { Request, Response } from "express";
import knex from "../database/connection";

class pedidosController {
  async create(req: Request, res: Response) {
    const { nome, valor } = req.body;
    const { id_mesa } = req.params;

    const idMesa = parseInt(id_mesa);

    const mesa = await knex("mesa").where("idMesa", idMesa).first();

    if (!mesa) return res.status(400).json({ error: "Mesa não encontrada" });

    const data = {
      nome,
      valor,
    };

    const responsePed = await knex("pedidos").insert(data);

    const pedidoId = responsePed[0];

    const aux1 = { id: pedidoId, ...data };

    const dataPedMesa = {
      idPedido: pedidoId,
      idMesa: idMesa,
    };

    const responsePed_Mesa = await knex("mesa_pedido").insert(dataPedMesa);

    const aux2 = { id: responsePed_Mesa[0], ...dataPedMesa };

    return res.json({ aux1, aux2 });
  }
}

export default pedidosController;
