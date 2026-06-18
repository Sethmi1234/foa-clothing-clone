"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function RecoverPage() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-16">
      <Container className="max-w-md px-6">
        <div className="space-y-8">
          {/* Recover Form */}
          <div>
            <h1 className="mb-2 text-[32px] font-bold uppercase leading-none tracking-normal text-black md:text-[40px]">
              Reset your password
            </h1>
            <p className="text-[15px] leading-relaxed text-black">
              We will send you an email to reset your password
            </p>
          </div>

          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[13px] font-semibold uppercase tracking-[0.06em] text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-black px-4 py-3 text-[15px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Enter your email"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-[52px] w-full rounded-full bg-black text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800"
            >
              Submit
            </button>
          </form>

          {/* Cancel Link */}
          <div className="text-center text-[15px]">
            <Link
              href="/account/login"
              className="text-black underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Cancel
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
