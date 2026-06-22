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
        <div className="thb-form-container py-10 md:py-[70px] lg:py-[100px]">
          <div className="thb-login-form mx-auto w-full max-w-[640px] md:px-[30px] lg:px-[60px]">
            {submitted ? (
              <div className="text-center">
                <h4 className="mb-2.5 text-[18px] font-bold uppercase tracking-wide text-[#151515]">
                  Check your email
                </h4>
                <p className="mb-[35px] text-[14px] text-[#151515]">
                  We&apos;ve sent you an email with a link to reset your password.
                </p>
                <Link href="/account/login" className="thb-button-full inline-flex">
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

                <div className="thb-field">
                  <input
                    type="email"
                    id="RecoverEmail"
                    name="email"
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="off"
                    placeholder=" "
                    required
                    className="thb-field-input"
                  />
                  <label htmlFor="RecoverEmail" className="thb-field-label">
                    Email address
                  </label>
                </div>

                <button type="submit" className="thb-button-full mt-2.5">
                  <span>Submit</span>
                </button>

                <div className="switch-login-section mt-[15px] text-center text-[14px] leading-[1.75]">
                  <Link href="/account/login" className="thb-text-button">
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
