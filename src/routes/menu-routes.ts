import { Router } from "express";
import { MenuController } from "@/controllers/menu-controller";

const menuRouter = Router();
const menuController = new MenuController();

menuRouter.get("/", menuController.list);

export { menuRouter };
