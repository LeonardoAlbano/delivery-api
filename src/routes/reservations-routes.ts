import { Router } from "express";
import { ReservationController } from "@/controllers/reservations-controller";

const reservationsRoutes = Router();
const reservationsController = new ReservationController();

reservationsRoutes.post("/", reservationsController.create);
reservationsRoutes.get("/", reservationsController.list);

export { reservationsRoutes };
