import { StarIcon } from "@/components/icons/StarIcon";

export default function CustomerReviews() {
  return (
    <section className="border-t border-[#e2e2e2] bg-white py-10 md:py-[90px]">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="jdgm-rev-widg__header">
          <h2 className="mb-6 text-center text-[22px] font-normal text-[#151515] md:text-[26px]">
            Customer Reviews
          </h2>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
              <div className="flex gap-0.5" aria-label="Average rating is 0.00 stars" role="img">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="text-[#e7e7e7]" />
                ))}
              </div>
              <p className="text-[14px] text-[#8e8e8e]">Be the first to write a review</p>
            </div>
            <button
              type="button"
              className="bg-[#151515] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-80"
            >
              Write a review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
