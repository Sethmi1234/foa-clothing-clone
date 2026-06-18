"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [showRecover, setShowRecover] = useState(false);

  useEffect(() => {
    const syncHash = () => {
      setShowRecover(window.location.hash === "#recover");
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="thb-form-container py-10 md:py-[70px] lg:py-[100px]">
          {showRecover ? (
            <div className="thb-login-form mx-auto w-full max-w-[640px] md:px-[30px] lg:px-[60px]">
              <h4 className="mb-2.5 text-center text-[18px] font-bold uppercase tracking-wide text-[#151515]">
                Reset your password
              </h4>
              <p className="mb-[35px] text-center text-[14px] text-[#151515]">
                We will send you an email to reset your password
              </p>
              <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
                <div className="thb-field">
                  <input
                    type="email"
                    id="RecoverEmail"
                    name="email"
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="off"
                    placeholder="Email address"
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
            </div>
          ) : (
            <div className="thb-login-form mx-auto w-full max-w-[640px] md:px-[30px] lg:px-[60px]">
              <form id="customer_login" className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
                <h4 className="mb-2.5 text-center text-[18px] font-bold uppercase tracking-wide text-[#151515]">
                  Log in
                </h4>
                <p className="mb-[35px] text-center text-[14px] text-[#151515]">
                  If you have an account with us, please log in.
                </p>
                <div className="thb-field">
                  <input
                    type="email"
                    id="customer_email"
                    name="customer[email]"
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="off"
                    placeholder="Email address"
                    required
                    className="thb-field-input"
                  />
                  <label htmlFor="customer_email" className="thb-field-label">
                    Email address
                  </label>
                </div>
                <div className="thb-field">
                  <input
                    type="password"
                    id="customer_password"
                    name="customer[password]"
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                    className="thb-field-input"
                  />
                  <label htmlFor="customer_password" className="thb-field-label">
                    Password
                  </label>
                </div>
                <button type="submit" className="thb-button-full mt-2.5">
                  <span>Sign in</span>
                </button>
                <div className="switch-login-section mt-[15px] text-center text-[14px] leading-[1.75]">
                  Don&apos;t have an account?{" "}
                  <Link href="/account/register" className="thb-text-button">
                    Create an account
                  </Link>
                  <div className="mt-1.5">
                    <Link href="/account/login#recover" className="thb-text-button">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
