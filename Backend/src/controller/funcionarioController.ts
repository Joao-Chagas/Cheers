import { Request, Response } from "express";
import knex from "../database/connection";

class FuncionarioController {
  async create(req: Request, res: Response) {
    const { login, senha, nome, sobrenome, cpf, dataCadastro } = req.body;

    const data = {
      login,
      senha,
      nome,
      sobrenome,
      cpf,
      dataCadastro,
    };

    const response = await knex("funcionario").insert(data);

    return res.json({ id: response[0], ...data });
  }
}

export default FuncionarioController;
