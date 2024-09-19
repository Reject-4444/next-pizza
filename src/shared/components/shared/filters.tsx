"use client";

import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";
import { useFilters, useIngredients, useQueryFilters } from "../../hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={className}>
      <Title
        text='Filtration'
        size='sm'
        className='mb-5 font-bold'
      />
      <CheckboxFiltersGroup
        title='Pizza Types'
        name='pizzaTypes'
        className='mb-5'
        selected={filters.pizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
      />
      <CheckboxFiltersGroup
        title='Sizes'
        name='sizes'
        className='mb-5'
        items={[
          { text: "20 сm", value: "20" },
          { text: "30 cm", value: "30" },
          { text: "40 cm", value: "40" },
        ]}
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
      />

      <div className='mt-5 border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Price from to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={150}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type='number'
            placeholder='150'
            min={10}
            max={150}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={150}
          step={1}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 150,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title='Ingredients'
        name='ingredients'
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
