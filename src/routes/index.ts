import { Router } from "express";
import { reservationsRoutes } from "./reservations-routes";
import { menuRouter } from "./menu-routes"; // Importe suas rotas de menu

const routes = Router();

// Prefixo para as rotas de reservas
routes.use("/reservations", reservationsRoutes);

// Prefixo para as rotas de menu
routes.use("/menu", menuRouter); // Adicione esta linha para as rotas de menu

export { routes };
