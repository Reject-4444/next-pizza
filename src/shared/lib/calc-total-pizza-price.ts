import { Ingridient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

export const calcTotalPizzaPrice = (type: PizzaType, size: PizzaSize, items: ProductItem[], ingredients: Ingridient[], selectedIngredients: Set<number>) => {
    const pizzaPrice =
        items.find((item) => item.size === size && item.pizzaType === type)
            ?.price || 0;
    const totalIngredientsPrice = ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0);
    const totalPrice = pizzaPrice + totalIngredientsPrice;

    return totalPrice;
}