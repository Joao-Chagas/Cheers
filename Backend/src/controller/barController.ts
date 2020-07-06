import { Request, Response } from "express";
import knex from "../database/connection";

class BarController {
  async index(req: Request, res: Response) {
    const bares = await knex("bar").select("*");

    const dataFormat = bares.map((bar) => {
      return {
        id: bar.idBar,
        name: bar.nome,
        cep: bar.cep,
        complemento: bar.complemento,
        categoria: bar.categoria,
      };
    });

    return res.json(dataFormat);
  }

  async create(req: Request, res: Response) {
    const { nome, cep, complemento, categoria } = req.body;
    const { login_dono } = req.params;

    if (!login_dono) return res.json({ error: "Proprietário não encontrado" });

    const data = { nome, cep, complemento, categoria };

    const response = await knex("bar").insert(data);

    return res.json({ id: response[0], ...data });
  }
}

export default BarController;
