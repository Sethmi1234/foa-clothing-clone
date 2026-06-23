import SafeImage from "@/components/ui/SafeImage";
import { formatCartPrice } from "@/lib/cart";
import type { CartItem } from "@/types";

type OrderSummaryProps = {
  items: CartItem[];
  orderNote: string;
  itemCountLabel: string;
  subtotal: number;
  shippingCost: number;
  total: number;
  city: string;
  isMobileOpen: boolean;
};

function getVariantLabel(color?: string, size?: string) {
  return [color, size].filter(Boolean).join(" / ");
}

export default function OrderSummary({
  items,
  orderNote,
  itemCountLabel,
  subtotal,
  shippingCost,
  total,
  city,
  isMobileOpen,
}: OrderSummaryProps) {
  return (
    <aside
      className={`bg-[#f7f7f7] px-4 py-8 md:px-8 md:py-10 ${
        isMobileOpen ? "block" : "hidden lg:block"
      }`}
    >
      <div className="mx-auto max-w-[380px]">
        <h2 className="mb-6 text-[18px] font-semibold text-[#151515] lg:sr-only">
          Order summary
        </h2>

        <ul className="space-y-5">
          {items.map((item) => {
            const variantLabel = getVariantLabel(item.color, item.size);
            return (
              <li key={item.lineId} className="flex gap-4 items-center">
                <div className="relative h-[64px] w-[64px] shrink-0 overflow-hidden rounded-[8px] border border-[#dedede] bg-white">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover object-center"
                  />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[12px] font-medium text-white shadow-sm border border-white">
                    {item.quantity}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-medium text-[#151515]">{item.name}</p>
                  {variantLabel && (
                    <p className="mt-1 text-[12px] text-neutral-500 uppercase tracking-tight">
                      {variantLabel}
                    </p>
                  )}
                </div>
                <p className="text-[14px] text-[#151515]">
                  {formatCartPrice(item.price * item.quantity)}
                </p>
              </li>
            );
          })}
        </ul>

        {orderNote && (
          <div className="mt-6 border-t border-[#dedede] pt-4">
            <p className="mb-1 text-[12px] font-medium uppercase tracking-[0.06em] text-neutral-500">
              Order note
            </p>
            <p className="text-[13px] leading-relaxed text-[#151515]">{orderNote}</p>
          </div>
        )}

        {/* Gift Card Section */}
        <div className="mt-6 flex gap-3">
          <input 
            type="text" 
            placeholder="Gift card" 
            className="flex-1 rounded-[5px] border border-[#dedede] bg-white px-3 py-3 text-[14px] text-black outline-none transition-colors focus:border-[#151515]"
          />
          <button 
            type="button" 
            className="rounded-[5px] bg-[#f0f0f0] px-4 font-medium text-neutral-600 transition-colors hover:bg-neutral-200"
          >
            Apply
          </button>
        </div>

        <div className="mt-6 space-y-3 pt-4 text-[14px]">
          <div className="flex items-center justify-between">
            <span className="text-neutral-600">Subtotal · {itemCountLabel}</span>
            <span className="text-[#151515]">{formatCartPrice(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-neutral-600">
              Pickup in store
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="6" stroke="#aaaaaa" strokeWidth="1" />
                <path d="M7 6.5V10" stroke="#aaaaaa" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="7" cy="4.5" r="0.6" fill="#aaaaaa" />
              </svg>
            </span>
            <span className="text-[#151515]">
              {city ? (shippingCost === 0 ? "FREE" : formatCartPrice(shippingCost)) : "FREE"}
            </span>
          </div>
          <div className="flex items-center justify-between pt-4 text-[16px] font-semibold">
            <span className="text-[#151515]">Total</span>
            <span className="text-[#151515]">
              <span className="mr-2 text-[12px] font-normal text-neutral-500">LKR</span>
              {formatCartPrice(total)}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
