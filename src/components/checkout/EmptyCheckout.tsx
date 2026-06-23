import Link from "next/link";

export default function EmptyCheckout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f7f7] px-4 text-center">
      <p className="mb-4 text-[16px] text-[#151515]">Your cart is empty.</p>
      <Link
        href="/collections/all"
        className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#151515] px-8 text-[12px] font-medium uppercase tracking-[0.12em] text-white"
      >
        Continue shopping
      </Link>
    </div>
  );
}
