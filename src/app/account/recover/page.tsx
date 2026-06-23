"use client";

import Link from "next/link";
import { useState } from "react";

export default function RecoverPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex flex-col py-10 md:py-[70px] lg:py-[100px]">
          <div className=" mx-auto w-full max-w-[640px] md:px-[30px] lg:px-[60px]">
            {submitted ? (
              <div className="text-center">
                <h4 className="mb-2.5 text-[18px] font-bold uppercase tracking-wide text-[#151515]">
                  Check your email
                </h4>
                <p className="mb-[35px] text-[14px] text-[#151515]">
                  We&apos;ve sent you an email with a link to reset your password.
                </p>
                <Link href="/account/login" className="flex h-[52px] w-full items-center justify-center border border-[#151515] bg-[#151515] px-6 py-[0.95rem] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-85 inline-flex">
                  <span>Back to login</span>
                </Link>
              </div>
            ) : (
              <form className="space-y-2.5" onSubmit={handleSubmit}>
                <h4 className="mb-2.5 text-center text-[18px] font-bold uppercase tracking-wide text-[#151515]">
                  Reset your password
                </h4>
                <p className="mb-[35px] text-center text-[14px] text-[#151515]">
                  We will send you an email to reset your password
                </p>

                <div className="relative">
                  <input
                    type="email"
                    id="RecoverEmail"
                    name="email"
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="off"
                    placeholder=" "
                    required
                    className="relative-input"
                  />
                  <label htmlFor="RecoverEmail" className="relative-label">
                    Email address
                  </label>
                </div>

                <button type="submit" className="flex h-[52px] w-full items-center justify-center border border-[#151515] bg-[#151515] px-6 py-[0.95rem] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-85 mt-2.5">
                  <span>Submit</span>
                </button>

                <div className="switch-login-section mt-[15px] text-center text-[14px] leading-[1.75]">
                  <Link href="/account/login" className="inline text-[#151515] underline underline-offset-[3px] hover:opacity-70">
                    Cancel
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

