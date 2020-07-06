import { Request, Response } from "express";
import knex from "../database/connection";
import axios from "axios";

class UsuarioController {
  async show(req: Request, res: Response) {
    const { login, senha } = req.body;

    const user = await knex("usuario")
      .where({
        login,
        senha,
      })
      .select("nome");

    if (!user[0])
      return res.status(400).json({ error: "Usuario não encontrado" });

    return res.json({ message: "Login efetuado", user });
  }

  async create(req: Request, res: Response) {
    const {
      login,
      senha,
      nome,
      sobrenome,
      email,
      cpf,
      telefone,
      telEmergencia,
      pontos,
    } = req.body;

    const data = {
      login,
      senha,
      nome,
      sobrenome,
      email,
      cpf,
      telefone,
      telEmergencia,
      pontos,
    };

    // console.log(data);

    const user = await knex("usuario").insert(data).returning("nome");

    return res.json({ id: user[0], ...data });
  }
}

export default UsuarioController;
