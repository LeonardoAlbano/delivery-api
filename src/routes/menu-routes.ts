import { Router } from "express";
import { MenuController } from "@/controllers/menu-controller";

const menuRouter = Router();
const menuController = new MenuController();

// Rota para listar os itens do menu
menuRouter.get("/", menuController.list);

export { menuRouter };
