import Accordion from "@/components/shared/Accordion";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  return (
    <section className="border-t border-[#e2e2e2] bg-white py-10 md:py-[90px]">
      <div className="mx-auto max-w-[720px] px-4 md:px-10">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-[24px] font-bold uppercase tracking-wide text-[#151515] md:text-[28px]">
            F.A.Q.
          </h2>
          <p className="text-[14px] text-[#8e8e8e]">
            Heres what our customers usually ask us while shopping
          </p>
        </div>
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
