import { Logo } from "@/components/icons/Logo";

export default function EVoucherGiftCard() {
  return (
    <div className="flex h-full min-h-[420px] flex-col overflow-hidden bg-black md:min-h-[520px]">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-12">
        <Logo variant="light" className="scale-150 [&_img]:h-10 md:[&_img]:h-12" />
        <p className="text-[18px] font-normal uppercase tracking-[0.2em] text-white md:text-[22px]">
          E - GIFT CARD
        </p>
      </div>
      <div className="bg-[#e8e8e8] px-6 py-4 text-center">
        <p className="text-[11px] text-neutral-700 md:text-[12px]">
          Valid for use on the FOACLOTHING.COM website only
        </p>
      </div>
    </div>
  );
}
