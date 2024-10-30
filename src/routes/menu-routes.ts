import { Router } from "express";
import menuController from "@/controllers/menu-controller";

const menuRouter = Router();

// Rota para listar os itens do menu
menuRouter.get("/menu", menuController.list);

export default menuRouter;
