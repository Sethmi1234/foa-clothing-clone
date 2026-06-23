import type { CategoryFilterOption, SizeFilterOption } from "@/components/collections/filterTypes";

type FilterSectionProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

function FilterSection({ title, isOpen, onToggle, children }: FilterSectionProps) {
  return (
    <div className="mb-6">
      <button onClick={onToggle} className="flex w-full items-center gap-4 py-2 text-left">
        <span className="text-lg font-light leading-none">{isOpen ? "-" : "+"}</span>
        <span className="text-[13px] font-bold uppercase tracking-[0.06em]">{title}</span>
      </button>
      {isOpen && children}
    </div>
  );
}

type CategoryFilterSectionProps = {
  isOpen: boolean;
  categories: CategoryFilterOption[];
  selectedCategories: string[];
  onToggleSection: () => void;
  onToggleCategory: (key: string) => void;
};

export function CategoryFilterSection({
  isOpen,
  categories,
  selectedCategories,
  onToggleSection,
  onToggleCategory,
}: CategoryFilterSectionProps) {
  return (
    <FilterSection title="Product Category" isOpen={isOpen} onToggle={onToggleSection}>
      <div className="mt-4 flex flex-col gap-3">
        {categories.map((category) => (
          <label key={category.name} className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.key)}
              onChange={() => onToggleCategory(category.key)}
              className="h-[18px] w-[18px] rounded-sm border-neutral-300 text-black focus:ring-black"
            />
            <span className="text-[15px] text-neutral-800">
              {category.name} ({category.count})
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}

type PriceFilterSectionProps = {
  isOpen: boolean;
  minPrice: number;
  maxPrice: number;
  maxPriceRaw: number;
  onToggleSection: () => void;
  onMinPriceChange: (price: number) => void;
  onMaxPriceChange: (price: number) => void;
};

export function PriceFilterSection({
  isOpen,
  minPrice,
  maxPrice,
  maxPriceRaw,
  onToggleSection,
  onMinPriceChange,
  onMaxPriceChange,
}: PriceFilterSectionProps) {
  const safeMaxPrice = maxPriceRaw || 1;

  return (
    <FilterSection title="Price" isOpen={isOpen} onToggle={onToggleSection}>
      <div className="mt-4">
        <p className="mb-6 text-[14px] text-neutral-600">
          The highest price is Rs{" "}
          {maxPriceRaw.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <div className="relative mb-8 h-1 w-full rounded bg-neutral-200">
          <div
            className="absolute h-full bg-black"
            style={{
              left: `${(minPrice / safeMaxPrice) * 100}%`,
              right: `${100 - (maxPrice / safeMaxPrice) * 100}%`,
            }}
          />
          <input
            type="range"
            min="0"
            max={maxPriceRaw}
            value={minPrice}
            onChange={(event) => onMinPriceChange(Number(event.target.value))}
            className="pointer-events-none absolute w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:bg-white"
          />
          <input
            type="range"
            min="0"
            max={maxPriceRaw}
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(Number(event.target.value))}
            className="pointer-events-none absolute w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:bg-white"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-1 items-center gap-2">
            <span className="text-[14px]">Rs</span>
            <input
              type="number"
              value={minPrice}
              onChange={(event) => onMinPriceChange(Number(event.target.value))}
              className="w-full border border-neutral-200 p-2 text-[14px] outline-none"
            />
          </div>
          <div className="flex flex-1 items-center gap-2">
            <span className="text-[14px]">Rs</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(event) => onMaxPriceChange(Number(event.target.value))}
              className="w-full border border-neutral-200 p-2 text-[14px] outline-none"
            />
          </div>
        </div>
      </div>
    </FilterSection>
  );
}

type SizeFilterSectionProps = {
  isOpen: boolean;
  sizes: SizeFilterOption[];
  selectedSizes: string[];
  onToggleSection: () => void;
  onToggleSize: (size: string) => void;
};

export function SizeFilterSection({
  isOpen,
  sizes,
  selectedSizes,
  onToggleSection,
  onToggleSize,
}: SizeFilterSectionProps) {
  return (
    <FilterSection title="Size" isOpen={isOpen} onToggle={onToggleSection}>
      <div className="mt-4 flex flex-col gap-3">
        {sizes.map(([size, count]) => (
          <label key={size} className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => onToggleSize(size)}
              className="h-[18px] w-[18px] rounded-sm border-neutral-300 text-black focus:ring-black"
            />
            <span className="text-[15px] uppercase text-neutral-800">
              {size} ({count})
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}
