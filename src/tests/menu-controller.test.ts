import request from "supertest";
import { app } from "@/app";

describe("MenuController", () => {
    it("should return the menu items", async () => {
        const response = await request(app).get("/menu");

        expect(response.status).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);

        response.body.forEach((item: any) => {
            expect(item).toHaveProperty("name");
            expect(item).toHaveProperty("description");
            expect(item).toHaveProperty("price");
        });
    });
});
