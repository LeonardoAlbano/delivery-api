import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "@/database/prisma"; // ajuste o caminho conforme necessário
import { MenuItem } from "@prisma/client";
import { AppError } from "@/utils/AppError"; // Importando o AppError

class MenuController {
  static list(arg0: string, list: any) {
      throw new Error("Method not implemented.");
  }
  // Método para listar os itens do menu
  async list(request: Request, response: Response) {
    const querySchema = z.object({
      categoryId: z.string().optional(),
    });

    try {
      const queryParams = querySchema.parse(request.query);

      const menuItems: MenuItem[] = await prisma.menuItem.findMany({
        where: {
          categoryId: queryParams.categoryId || undefined,
        },
        include: {
          category: true,
        },
      });

      return response.status(200).json(menuItems);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          message: error.message,
        });
      }

      if (error instanceof z.ZodError) {
        return response.status(400).json({
          message: "Erro de validação",
          errors: error.errors,
        });
      }

      console.error("Erro interno:", error);
      return response.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  }
}

// Exportação da classe sem instanciá-la
export { MenuController };
