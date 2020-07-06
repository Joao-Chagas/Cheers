import { Request, Response } from "express";
import knex from "../database/connection";

class ProprietarioController {
  async create(req: Request, res: Response) {
    const { login, senha, nome, sobrenome, telefone, cpf } = req.body;

    const data = {
      login,
      senha,
      nome,
      sobrenome,
      telefone,
      cpf,
    };

    const response = await knex("proprietario").insert(data);

    return res.json({ id: response[0], ...data });
  }
}

export default ProprietarioController;
