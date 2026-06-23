import { formatCartPrice } from "@/lib/cart";

type ShippingMethodProps = {
  city: string;
  shippingCost: number;
};

export default function ShippingMethod({ city, shippingCost }: ShippingMethodProps) {
  return (
    <section>
      <h2 className="mb-4 text-[18px] font-semibold text-[#151515]">Shipping method</h2>
      <div className="rounded-[5px] border border-[#dedede] p-4">
        {city ? (
          <div className="flex items-center justify-between gap-4 text-[14px]">
            <span>Standard Shipping</span>
            <span>{shippingCost === 0 ? "Free" : formatCartPrice(shippingCost)}</span>
          </div>
        ) : (
          <p className="text-[14px] text-neutral-500">Enter shipping address</p>
        )}
      </div>
    </section>
  );
}
