import Accordion from "@/components/shared/Accordion";
import { faqItems } from "@/data/eVoucher";

export default function FAQSection() {
  return (
    <section className="border-t border-neutral-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[720px] px-6 md:px-10">
        <h2 className="mb-2 text-center text-[28px] font-bold uppercase tracking-wide text-black md:text-[32px]">
          F.A.Q.
        </h2>
        <p className="mb-10 text-center text-[14px] text-neutral-500">
          Heres what our customers usually ask us while shopping
        </p>
        <Accordion
          items={faqItems.map((item) => ({
            id: item.id,
            title: item.question,
            content: item.answer,
          }))}
        />
      </div>
    </section>
  );
}
