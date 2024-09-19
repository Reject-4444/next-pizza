import { prisma } from "./prisma-client";
import { hashSync } from 'bcrypt';
import { categories, ingridients, products } from './constants';
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
}

const generateProductItem = ({
    productId,
    pizzaType,
    size,
    price
}: {
    productId: number;
    pizzaType?: 1 | 2;
    size?: 20 | 30 | 40;
    price?: number
}) => {
    return {
        productId,
        price: price ? price : randomDecimalNumber(5, 15),
        pizzaType,
        size,
    } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@test/ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {

                fullName: 'Admin Admin',
                email: 'admintest/ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ],
    })

    await prisma.category.createMany({
        data: categories
    });

    await prisma.ingridient.createMany({
        data: ingridients
    })

    await prisma.product.createMany({
        data: products,
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Pepperoni Fresh',
            imageUrl:
                "/assets/images/pizzas/pepperoni-fresh.webp",
            categoryId: 1,
            ingridients: {
                connect: ingridients.slice(0, 5),
            },
        },
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Cheese',
            imageUrl:
            "/assets/images/pizzas/cheese.webp",
            categoryId: 1,
            ingridients: {
                connect: ingridients.slice(5, 10),
            },
        },
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Chorizo Fresh',
            imageUrl:
            "/assets/images/pizzas/chorizo-fresh.webp",
            categoryId: 1,
            ingridients: {
                connect: ingridients.slice(10, 40),
            },
        },
    });


    await prisma.productItem.createMany({
        data: [
            generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20, price: 60 }),
            generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30, price: 62 }),
            generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40, price: 71 }),

            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20, price: 40 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30, price: 70 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40, price: 82 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20, price: 44 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30, price: 64 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40, price: 75 }),

            generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20, price: 51 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30, price: 62 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40, price: 72 }),

            generateProductItem({ productId: 1 }),
            generateProductItem({ productId: 2 }),
            generateProductItem({ productId: 3 }),
            generateProductItem({ productId: 4 }),
            generateProductItem({ productId: 5 }),
            generateProductItem({ productId: 6 }),
            generateProductItem({ productId: 7 }),
            generateProductItem({ productId: 8 }),
            generateProductItem({ productId: 9 }),
            generateProductItem({ productId: 10 }),
            generateProductItem({ productId: 11 }),
            generateProductItem({ productId: 12 }),
            generateProductItem({ productId: 13 }),
            generateProductItem({ productId: 14 }),
            generateProductItem({ productId: 15 }),
            generateProductItem({ productId: 16 }),
            generateProductItem({ productId: 17 }),
        ],
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '222222',
            }
        ]
    });


    await prisma.cartItem.create({
        data:
        {
            productItemId: 1,
            cardId: 1,
            quantity: 2,
            ingredients: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
            }
        }

    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Ingridient" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })