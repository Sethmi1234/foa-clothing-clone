import { CarouselArrowLeftIcon } from "@/components/icons/CarouselArrowLeftIcon";
import { CarouselArrowRightIcon } from "@/components/icons/CarouselArrowRightIcon";

type CarouselArrowsProps = {
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  arrowTop?: number;
  className?: string;
};

const arrowBaseClass =
  "absolute z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#151515] shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-opacity disabled:pointer-events-none disabled:opacity-30 md:flex";

export default function CarouselArrows({
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
  arrowTop,
  className = "",
}: CarouselArrowsProps) {
  const topStyle = arrowTop ? { top: `${arrowTop}px` } : { top: "38%" };

  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-label="Previous products"
        style={topStyle}
        className={`${arrowBaseClass} left-0 -translate-x-1/2 md:-left-6 md:translate-x-0 ${className}`}
      >
        <CarouselArrowLeftIcon className="transition-transform group-hover/carousel:scale-110" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next products"
        style={topStyle}
        className={`${arrowBaseClass} right-0 translate-x-1/2 md:-right-6 md:translate-x-0 ${className}`}
      >
        <CarouselArrowRightIcon className="transition-transform group-hover/carousel:scale-110" />
      </button>
    </>
  );
}
