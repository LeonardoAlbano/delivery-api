import { Router } from "express";
import { reservationsRoutes } from "./reservations-routes";
import { menuRouter } from "./menu-routes";

const routes = Router();

routes.use("/reservations", reservationsRoutes);
routes.use("/menu", menuRouter); 

export { routes };
