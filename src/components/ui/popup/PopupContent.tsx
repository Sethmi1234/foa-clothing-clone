import PopupSubscribeForm from "@/components/ui/popup/PopupSubscribeForm";

const popupImageUrl =
  "https://uc.pop-convert.com/ae9cb82c-03f9-411a-a285-83f3ebb742e6/";

type PopupContentProps = {
  onSuccess: () => void;
};

export default function PopupContent({ onSuccess }: PopupContentProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden md:min-h-[520px] md:flex-row">
      <div className="flex flex-1 items-center justify-center bg-white px-5 py-6 md:px-6 md:py-7">
        <div className="w-full max-w-[645px] bg-white px-8 py-10 text-center shadow-[0_2px_18px_rgba(0,0,0,0.12)] md:px-14 md:py-12">
          <h2
            id="popup-title"
            className="mb-7 text-[25px] font-bold uppercase leading-none tracking-normal text-[#272727] md:text-[34px]"
          >
            Subscribe Now
          </h2>

          <p className="mx-auto mb-2 max-w-[520px] text-[19px] font-normal uppercase leading-[1.15] tracking-normal text-[#222] md:text-[27px]">
            Don&apos;t miss out on the latest drop and offers.
          </p>

          <p className="mb-10 text-[13px] leading-none text-[#6d6d6d] md:text-[16px]">
            Be the first to get notified.
          </p>

          <div className="mb-11 h-px w-full bg-[#bdbdbd]" />

          <PopupSubscribeForm onSuccess={onSuccess} />
        </div>
      </div>

      <div
        className="hidden min-h-[520px] w-[34%] shrink-0 bg-white bg-contain bg-center bg-no-repeat md:block"
        style={{ backgroundImage: `url(${popupImageUrl})` }}
        aria-hidden="true"
      />
    </div>
  );
}
