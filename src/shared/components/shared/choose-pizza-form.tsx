"use client";

import { cn } from "@/shared/lib/utils";
import { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { PizzaImage } from "./pizza-image";
import { GroupVariants } from "./group-variants";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { Ingridient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { getPizzaDetails } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingridient[];
  items: ProductItem[];
  onSubmit: (itemId: number, ingredients: number[]) => void;
  loading?: boolean;
  className?: string;
}

export const ChoosePizzaForm: FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onSubmit,
  loading,
  className,
}) => {
  const {
    type,
    size,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage
        imageUrl={imageUrl}
        size={size}
      />
      <div className='w-[490px] bg-[#F5F6F7] p-7'>
        <Title
          text={name}
          size='md'
          className='font-extrabold mb-1'
        />
        <p className='text-gray-400'>{textDetails}</p>

        <div className='flex flex-col gap-4 mt-5'>
          <GroupVariants
            onClick={(value) => setSize(Number(value) as PizzaSize)}
            value={String(size)}
            items={availableSizes}
          />
          <GroupVariants
            onClick={(value) => setType(Number(value) as PizzaType)}
            value={String(type)}
            items={pizzaTypes}
          />
        </div>

        <div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
          <div className='grid grid-cols-3 gap-3'>
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClickAdd={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
        >
          Add to cart for {totalPrice}$
        </Button>
      </div>
    </div>
  );
};
