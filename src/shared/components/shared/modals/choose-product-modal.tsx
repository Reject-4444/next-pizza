"use client";

import { Dialog, DialogContent } from "../../ui/dialog";
import { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "../../../../../@types/prisma";
import { ProductForm } from "../product-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();

  return (
    <Dialog
      open={Boolean(product)}
      onOpenChange={() => router.back()}
    >
      <DialogContent
        title=''
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ProductForm
          product={product}
          onSubmit={() => router.back()}
        />
      </DialogContent>
    </Dialog>
  );
};
