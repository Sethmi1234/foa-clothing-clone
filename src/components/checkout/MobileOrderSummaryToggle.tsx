import { formatCartPrice } from "@/lib/cart";

type MobileOrderSummaryToggleProps = {
  isOpen: boolean;
  total: number;
  onToggle: () => void;
};

export default function MobileOrderSummaryToggle({
  isOpen,
  total,
  onToggle,
}: MobileOrderSummaryToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between border-b border-[#dedede] bg-[#f7f7f7] px-4 py-4 text-left lg:hidden"
    >
      <span className="text-[14px] text-[#005bd1]">
        {isOpen ? "Hide order summary" : "Show order summary"}
      </span>
      <span className="text-[16px] font-semibold">{formatCartPrice(total)}</span>
    </button>
  );
}
