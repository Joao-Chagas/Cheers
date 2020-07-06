import { Request, Response } from "express";
import knex from "../database/connection";

class mesaController {
  async create(req: Request, res: Response) {
    const { tempoInicio, Conta } = req.body;

    const data = {
      tempoInicio,
      Conta,
    };

    const response = await knex("mesa").insert(data);

    return res.json({ id: response[0], ...data });
  }
}

export default mesaController;
