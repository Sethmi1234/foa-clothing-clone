import Link from "next/link";
import EVoucherDetails from "@/components/e-voucher/EVoucherDetails";
import EVoucherGiftCard from "@/components/e-voucher/EVoucherGiftCard";
import EVoucherStickyBar from "@/components/e-voucher/EVoucherStickyBar";
import EVoucherBanner from "@/components/e-voucher/EVoucherBanner";
import CustomerReviews from "@/components/shared/CustomerReviews";
import FAQSection from "@/components/shared/FAQSection";
import YouMayAlsoLike from "@/components/shared/YouMayAlsoLike";
import { getProductsByCollection } from "@/lib/products";

export default function EVoucherPage() {
  const relatedProducts = getProductsByCollection("accessories").slice(0, 4);

  return (
    <>
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-4 md:px-10">
          <p className="text-[11px] text-neutral-500">
            <Link href="/" className="underline hover:text-black">
              Home
            </Link>
            {" / "}
            <span>E - VOUCHER</span>
          </p>
        </div>
      </div>

      <section className="bg-white py-8 md:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-10">
          <EVoucherGiftCard />
          <EVoucherDetails />
        </div>
      </section>

      <CustomerReviews />
      <FAQSection />
      <YouMayAlsoLike products={relatedProducts} />
      <EVoucherBanner />
      <EVoucherStickyBar />
    </>
  );
}
