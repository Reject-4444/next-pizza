"use client";

import { useCartStore } from "@/shared/store";
import { FC } from "react";
import toast from "react-hot-toast";
import { ProductWithRelations } from "../../../../@types/prisma";
import { ChoosePizzaForm } from "./choose-pizza-form";
import { ChooseProductForm } from "./choose-product-form";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ProductForm: FC<Props> = ({
  className,
  onSubmit: _onSubmit,
  product,
}) => {
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const { addCartItem, loading } = useCartStore((state) => state);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success(`${product.name} added to cart`);

      _onSubmit?.();
    } catch (error) {
      toast.error(`Failed to add product to cart`);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        items={product.items}
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingridients}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
    />
  );
};
