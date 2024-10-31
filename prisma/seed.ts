import { prisma } from "@/database/prisma";

async function seed() {
    const categoryAppetizers = await prisma.category.create({
        data: {
            name: 'Entradas',
            description: 'Aperitivos e entradas',
        },
    });

    const categoryMainDishes = await prisma.category.create({
        data: {
            name: 'Pratos Principais',
            description: 'Refeições principais',
        },
    });

    const categoryDesserts = await prisma.category.create({
        data: {
            name: 'Sobremesas',
            description: 'Deliciosas sobremesas',
        },
    });

    const categoryDrinks = await prisma.category.create({
        data: {
            name: 'Bebidas',
            description: 'Bebidas variadas',
        },
    });

    await prisma.menuItem.createMany({
        data: [
            // Entradas
            {
                name: 'Bruschetta',
                description: 'Pão tostado com tomate e manjericão',
                price: 15.00,
                image: 'https://www.designi.com.br/images/preview/10083364.jpg',
                categoryId: categoryAppetizers.id,
            },
            {
                name: 'Caprese',
                description: 'Salada de tomate, manjericão e mussarela de búfala',
                price: 18.00,
                image: 'https://www.designi.com.br/images/preview/10083364.jpg',
                categoryId: categoryAppetizers.id,
            },

            // Pratos Principais
            {
                name: 'Spaghetti Carbonara',
                description: 'Massa com molho à base de ovos, queijo e bacon',
                price: 35.00,
                image: 'https://www.designi.com.br/images/preview/10083364.jpg',
                categoryId: categoryMainDishes.id,
            },
            {
                name: 'Risoto de Cogumelos',
                description: 'Arroz arbóreo com cogumelos frescos',
                price: 40.00,
                image: 'https://www.designi.com.br/images/preview/10083364.jpg',
                categoryId: categoryMainDishes.id,
            },

            // Sobremesas
            {
                name: 'Tiramisu',
                description: 'Camadas de mascarpone com café e cacau',
                price: 20.00,
                image: 'https://www.designi.com.br/images/preview/10083364.jpg',
                categoryId: categoryDesserts.id,
            },
            {
                name: 'Panna Cotta',
                description: 'Sobremesa italiana com calda de frutas vermelhas',
                price: 18.00,
                image: 'https://www.designi.com.br/images/preview/10083364.jpg',
                categoryId: categoryDesserts.id,
            },

            // Bebidas
            {
                name: 'Vinho Tinto',
                description: 'Taça de vinho tinto italiano',
                price: 25.00,
                image: 'https://www.designi.com.br/images/preview/10083364.jpg',
                categoryId: categoryDrinks.id,
            },
            {
                name: 'Água com Gás',
                description: 'Garrafa de água mineral com gás',
                price: 8.00,
                image: 'https://www.designi.com.br/images/preview/10083364.jpg',
                categoryId: categoryDrinks.id,
            },
        ],
    });
}

seed()
    .then(() => {
        console.log('Database seeded!');
    })
    .catch((error) => {
        console.error('Error seeding database:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
