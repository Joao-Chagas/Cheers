import express from "express";

import UsuarioController from "./controller/usuarioController";
import ProprietarioController from "./controller/proprietarioController";
import FuncionarioController from "./controller/funcionarioController";
import MesaController from "./controller/mesaController";
import BarController from "./controller/barController";
import PedidoController from "./controller/pedidosController";

const usuarioController = new UsuarioController();
const proprietarioController = new ProprietarioController();
const funcionarioController = new FuncionarioController();
const mesaController = new MesaController();
const barController = new BarController();
const pedidosController = new PedidoController();

const routes = express.Router();

routes.post("/usuario/sign-up", usuarioController.create);
routes.get("/usuario/sign-in", usuarioController.show);

routes.post("/proprietario/sign-up", proprietarioController.create);

routes.post("/funcionario/sign-up", funcionarioController.create);

routes.post("/proprietario/:login_dono/create-bar", barController.create);
routes.get("/bares/list-bar", barController.index);

routes.post("/bares/:id_bar/mesa", mesaController.create);

routes.post("/bares/:id_bar/mesa/:id_mesa/pedido", pedidosController.create);

export default routes;
