import { Router } from "express";
import { ReservationController } from "@/controllers/reservations-controller";

const reservationsRoutes = Router();
const reservationsController = new ReservationController();

// Rota POST para criar uma reserva
reservationsRoutes.post("/", reservationsController.create);

// Rota GET para listar todas as reservas
reservationsRoutes.get("/", reservationsController.list);

export { reservationsRoutes };
