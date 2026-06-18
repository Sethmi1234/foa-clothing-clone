"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-16">
      <Container className="max-w-md px-6">
        <div className="space-y-8">
          {/* Register Form */}
          <div>
            <h1 className="mb-2 text-[32px] font-bold uppercase leading-none tracking-normal text-black md:text-[40px]">
              Create account
            </h1>
            <p className="text-[15px] leading-relaxed text-black">
              Join us and get exclusive access to new collections and promotions.
            </p>
          </div>

          <form className="space-y-6">
            {/* First Name Field */}
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-[13px] font-semibold uppercase tracking-[0.06em] text-black">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full border border-black px-4 py-3 text-[15px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name Field */}
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-[13px] font-semibold uppercase tracking-[0.06em] text-black">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full border border-black px-4 py-3 text-[15px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Enter your last name"
              />
            </div>

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

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-[13px] font-semibold uppercase tracking-[0.06em] text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full border border-black px-4 py-3 text-[15px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Create a password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-[52px] w-full rounded-full bg-black text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800"
            >
              Create account
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center text-[15px]">
            <span className="text-black">Already have an account? </span>
            <Link
              href="/account/login"
              className="text-black underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Log in
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-black pt-8">
            <h2 className="mb-4 text-[18px] font-bold uppercase leading-none tracking-normal text-black">
              Newsletter
            </h2>
            <p className="mb-4 text-[15px] leading-relaxed text-black">
              Be the first to know about our new collections and promotions
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                required
                className="flex-1 border border-black px-4 py-3 text-[15px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="h-[52px] rounded-full bg-black px-6 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
