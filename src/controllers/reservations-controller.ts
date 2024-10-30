import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import z from "zod";

class ReservationController {
    async create(request: Request, response: Response) {
        // Define o schema de validação com Zod
        const bodySchema = z.object({
            customerName: z.string().nonempty("Customer name is required"),
            numPeople: z.number().int().positive("Number of people must be a positive integer"),
            reservationDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
                message: "Invalid date format",
            }),
            reservationTime: z
                .string()
                .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
                    message: "Invalid time format (use HH:mm)",
                }),
        });

        // Faz a validação
        try {
            const { customerName, numPeople, reservationDate, reservationTime } = bodySchema.parse(request.body);

            // Converte reservationDate para Date
            const reservationDateTime = new Date(reservationDate);

            const reservation = await prisma.reservation.create({
                data: {
                    customerName,
                    numPeople,
                    reservationDate: reservationDateTime, // Armazenar como DateTime
                    reservationTime,
                },
            });

            return response.status(201).json(reservation);
        } catch (error) {
            console.error("Error creating reservation:", error); // Log do erro
            if (error instanceof z.ZodError) {
                return response.status(400).json({ errors: error.errors });
            }
            return response.status(500).json({ message: "Internal Server Error" });
        }
    }
    async list(request: Request, response: Response) {
        try {
          const reservations = await prisma.reservation.findMany();
          return response.status(200).json({ reservations }); // Envolva as reservas em um objeto
        } catch (error) {
          console.error("Error fetching reservations:", error);
          return response.status(500).json({ message: "Internal Server Error" });
        }
      }
}

export { ReservationController };
