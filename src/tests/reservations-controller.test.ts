import request from "supertest";
import { app } from "@/app";

describe("ReservationsController", () => {
    it("should create a new reservation", async () => {
        const response = await request(app)
            .post("/reservations")
            .send({
                customerName: "Test Client",
                numPeople: 2,
                reservationDate: "2024-10-30",
                reservationTime: "13:45"
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.customerName).toBe("Test Client");
    });
});
