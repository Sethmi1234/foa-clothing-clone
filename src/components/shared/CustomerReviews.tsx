"use client";

import { useRef, useState } from "react";
import { StarIcon } from "@/components/icons/StarIcon";

function StarRating({
  value,
  onChange,
  readonly = false,
}: {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1" role="group" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = readonly ? star <= value : star <= (hovered || value);
        return (
          <button
            key={star}
            type="button"
            disabled={readonly}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            onClick={() => onChange?.(star)}
            onMouseEnter={() => !readonly && setHovered(star)}
            onMouseLeave={() => !readonly && setHovered(0)}
            className={`transition-colors ${readonly ? "cursor-default" : "cursor-pointer"}`}
          >
            <StarIcon
              className={`h-7 w-7 ${filled ? "text-black" : "text-[#e7e7e7]"}`}
              filled={filled}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function CustomerReviews() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app this would POST to an API
    setSubmitted(true);
    setShowForm(false);
    setRating(0);
    setTitle("");
    setContent("");
    setDisplayName("");
    setEmail("");
    setMediaFile(null);
  };

  return (
    <section
      id="customer-reviews"
      className="border-t border-[#e2e2e2] bg-white py-10 md:py-[90px]"
    >
      <div className="mx-auto max-w-[700px] px-4 md:px-10">
        {/* Header */}
        <h2 className="mb-6 text-center text-[22px] font-normal text-[#151515] md:text-[26px]">
          Customer Reviews
        </h2>

        {/* Stars + empty state + write review button */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
            <div className="flex gap-0.5" aria-label="Average rating: 0 stars" role="img">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="h-5 w-5 text-[#e7e7e7]" />
              ))}
            </div>
            {submitted ? (
              <p className="text-[14px] text-[#4ca25b] font-medium">
                Thank you for your review!
              </p>
            ) : (
              <p className="text-[14px] text-[#8e8e8e]">Be the first to write a review</p>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            className="bg-[#151515] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-80"
          >
            {showForm ? "Cancel review" : "Write a review"}
          </button>
        </div>

        {/* Divider */}
        {showForm && <div className="mt-8 border-t border-neutral-200" />}

        {/* Write a review form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <h3 className="text-center text-[24px] font-normal text-black">
              Write a review
            </h3>

            {/* Rating */}
            <div className="flex flex-col items-center gap-2">
              <label className="text-[13px] text-[#8e8e8e]">Rating</label>
              <StarRating value={rating} onChange={setRating} />
            </div>

            {/* Review Title */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="review-title"
                className="text-center text-[13px] text-[#8e8e8e]"
              >
                Review Title
              </label>
              <input
                id="review-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-neutral-300 px-3 py-2.5 text-[14px] text-black outline-none focus:border-black transition-colors"
                placeholder=""
                required
              />
            </div>

            {/* Review Content */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="review-content"
                className="text-center text-[13px] text-[#8e8e8e]"
              >
                Review content
              </label>
              <textarea
                id="review-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full resize-y border border-neutral-300 px-3 py-2.5 text-[14px] text-black outline-none focus:border-black transition-colors"
                required
              />
            </div>

            {/* Picture/Video upload */}
            <div className="flex flex-col items-center gap-2">
              <label className="text-center text-[13px] text-[#8e8e8e]">
                Picture/Video{" "}
                <span className="text-[#8e8e8e]">(optional)</span>
              </label>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex h-[100px] w-[100px] flex-col items-center justify-center border border-neutral-300 text-neutral-400 transition-colors hover:border-black hover:text-black"
                aria-label="Upload picture or video"
              >
                {/* Upload icon */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 20V10M15 10L10 15M15 10L20 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="5"
                    y="22"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
                {mediaFile && (
                  <span className="mt-1 text-[10px] text-neutral-500 truncate max-w-[90px]">
                    {mediaFile.name}
                  </span>
                )}
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => setMediaFile(e.target.files?.[0] ?? null)}
              />
            </div>

            {/* Display name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="review-display-name"
                className="text-center text-[13px] text-[#8e8e8e]"
              >
                Display name{" "}
                <span className="text-[13px] text-[#8e8e8e]">
                  (displayed publicly like{" "}
                  <span className="text-black">John Smith</span>{" "}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="inline"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 4L5 7L8 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  )
                </span>
              </label>
              <input
                id="review-display-name"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full border border-neutral-300 px-3 py-2.5 text-[14px] text-black outline-none focus:border-black transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="review-email"
                className="text-center text-[13px] text-[#8e8e8e]"
              >
                Email address
              </label>
              <input
                id="review-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-neutral-300 px-3 py-2.5 text-[14px] text-black outline-none focus:border-black transition-colors"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="border border-black px-6 py-3 text-[12px] font-medium uppercase tracking-[0.06em] text-black transition-colors hover:bg-neutral-50"
              >
                Cancel review
              </button>
              <button
                type="submit"
                className="bg-[#151515] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-80"
              >
                Submit Review
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
