export default function CustomerReviews() {
  return (
    <section className="border-t border-neutral-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <h2 className="mb-8 text-center text-[22px] font-normal text-black md:text-[26px]">
          Customer Reviews
        </h2>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 1.5L11.09 6.26L16.5 6.97L12.75 10.74L13.68 16.13L9 13.77L4.32 16.13L5.25 10.74L1.5 6.97L6.91 6.26L9 1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              ))}
            </div>
            <p className="text-[14px] text-neutral-500">Be the first to write a review</p>
          </div>
          <button
            type="button"
            className="bg-black px-8 py-3 text-[12px] font-medium uppercase tracking-[0.06em] text-white"
          >
            Write a review
          </button>
        </div>
      </div>
    </section>
  );
}
