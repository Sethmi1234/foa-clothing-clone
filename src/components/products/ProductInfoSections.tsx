import { CheckIcon, KokoIcon, MintpayIcon } from "@/components/icons/UtilityIcons";
import PriceDisplay from "@/components/ui/PriceDisplay";
import WishlistButton from "@/components/wishlist/WishlistButton";
import type { Product } from "@/types";

const sizeOrder = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

type ProductPriceProps = {
  price: number;
  compareAtPrice?: number;
};

export function ProductPrice({ price, compareAtPrice }: ProductPriceProps) {
  const isOnSale = !!compareAtPrice;

  return (
    <div className="flex items-center gap-3">
      {isOnSale && (
        <span className="text-[16px] font-normal text-neutral-400 line-through md:text-[18px]">
          <PriceDisplay amount={compareAtPrice} />
        </span>
      )}
      <span className={`text-[20px] font-bold md:text-[24px] ${isOnSale ? "text-foa-red" : "text-black"}`}>
        <PriceDisplay amount={price} />
      </span>
    </div>
  );
}

export function ProductPaymentOptions({ price }: { price: number }) {
  return (
    <div className="space-y-1.5">
      <p className="flex items-center gap-1.5 text-[12px] leading-relaxed text-[#8e8e8e]">
        <span>
          3 X{" "}
          <strong className="font-semibold text-black">
            <PriceDisplay amount={price} installment />
          </strong>
        </span>
        <span className="mx-0.5">or</span>
        <span>
          <strong className="font-semibold text-black">4.5% Cashback</strong>
        </span>
        <span>with</span>
        <a
          href="https://mintpay.lk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#151515] underline transition-opacity hover:opacity-70"
        >
          <MintpayIcon className="h-4" />
        </a>
      </p>
      <p className="flex items-center gap-1.5 text-[12px] leading-relaxed text-[#8e8e8e]">
        <span>
          or pay in 3 x{" "}
          <strong className="font-semibold text-black">
            <PriceDisplay amount={price} installment />
          </strong>
        </span>
        <span>with</span>
        <a
          href="https://koko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#151515] underline transition-opacity hover:opacity-70"
        >
          <KokoIcon className="h-4" />
        </a>
        <span className="mx-0.5">/</span>
        <a
          href="https://initpay.lk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded border border-[#e2e2e2] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#151515] transition-opacity hover:opacity-70"
        >
          InitPay
        </a>
      </p>
    </div>
  );
}

type SizeSelectorProps = {
  sizes?: string[];
  selectedSize: string | null;
  onSizeChange: (size: string) => void;
  onOpenSizeChart: () => void;
};

export function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
  onOpenSizeChart,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">Size</span>
        <button
          type="button"
          onClick={onOpenSizeChart}
          className="text-[11px] uppercase tracking-[0.04em] text-neutral-500 underline underline-offset-2 hover:text-black"
        >
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {(sizes || ["XS", "S", "M", "L", "XL", "2XL"])
          .sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b))
          .map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => onSizeChange(size)}
                className={`flex h-[46px] min-w-[56px] items-center justify-center border px-4 text-[13px] font-bold uppercase tracking-[0.04em] transition-colors ${
                  isSelected
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 bg-white text-black hover:border-black"
                }`}
              >
                {size}
              </button>
            );
          })}
      </div>
    </div>
  );
}

type ColorSelectorProps = {
  product: Product;
  selectedColor: number;
  colorLabel?: string;
  onColorChange: (index: number) => void;
};

export function ColorSelector({
  product,
  selectedColor,
  colorLabel,
  onColorChange,
}: ColorSelectorProps) {
  if (!product.colors?.length) return null;

  return (
    <div className="flex flex-col gap-3">
      <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-black">
        Color:{" "}
        <span className="font-normal normal-case tracking-normal text-neutral-600">{colorLabel}</span>
      </span>
      <div className="flex items-center gap-2">
        {product.colors.map((color, index) => {
          const isSelected = selectedColor === index;
          return (
            <button
              key={`${product.id}-color-${index}`}
              type="button"
              onClick={() => onColorChange(index)}
              className={`relative h-8 w-8 shrink-0 rounded-full border-2 bg-clip-padding transition-opacity hover:opacity-80 ${
                isSelected ? "border-black" : "border-neutral-300"
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select color ${colorLabel ?? index + 1}`}
              aria-pressed={isSelected}
            >
              {color.soldOut && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="h-px w-[120%] rotate-45 bg-neutral-400" />
                </span>
              )}
              {isSelected && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type ProductActionsProps = {
  product: Product;
  activeImage: string;
  addedToCart: boolean;
  onAddToCart: () => void;
};

export function ProductActions({
  product,
  activeImage,
  addedToCart,
  onAddToCart,
}: ProductActionsProps) {
  return (
    <>
      <button
        type="button"
        onClick={onAddToCart}
        className={`h-[54px] w-full rounded-full text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-all ${
          addedToCart ? "bg-[#4ca25b]" : "bg-black hover:bg-neutral-800"
        }`}
      >
        {addedToCart ? (
          <span className="flex items-center justify-center gap-2">
            <CheckIcon />
            Added
          </span>
        ) : (
          <>
            Add to Cart - <PriceDisplay amount={product.price} />
          </>
        )}
      </button>

      <WishlistButton
        product={{
          id: product.id,
          name: product.name,
          image: activeImage,
          price: product.price,
          href: product.href,
        }}
        variant="page"
      />
    </>
  );
}

export function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      {product.description && (
        <div className="border-t border-neutral-200 pt-6">
          <p className="text-[14px] leading-relaxed text-neutral-700">{product.description}</p>
        </div>
      )}

      {product.material && (
        <p className="text-[13px] text-neutral-500">
          <span className="font-semibold uppercase">Material:</span> {product.material}
        </p>
      )}
    </>
  );
}
