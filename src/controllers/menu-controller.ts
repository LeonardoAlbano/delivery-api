import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "@/database/prisma"; // ajuste o caminho de acordo com sua estrutura
import { MenuItem } from "@prisma/client"; // se você estiver usando o Prisma Client

class MenuController {
    // Método para listar os itens do menu
    async list(request: Request, response: Response) {
        // Se você quiser validar parâmetros da consulta, como categoria, por exemplo
        const querySchema = z.object({
            categoryId: z.string().optional(), // pode ser opcional
            // outros filtros podem ser adicionados aqui
        });

        try {
            // Validação dos parâmetros da consulta
            const queryParams = querySchema.parse(request.query);
            
            // Buscando os itens do menu com base nos parâmetros da consulta
            const menuItems: MenuItem[] = await prisma.menuItem.findMany({
                where: {
                    categoryId: queryParams.categoryId ? queryParams.categoryId : undefined,
                },
                include: {
                    category: true, // incluir informações da categoria, se necessário
                },
            });

            return response.status(200).json(menuItems);
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Retornar erros de validação do Zod
                return response.status(400).json({
                    message: "Erro de validação",
                    errors: error.errors,
                });
            }
            console.error(error);
            return response.status(500).json({
                message: "Erro interno do servidor",
            });
        }
    }
}

export default new MenuController;
