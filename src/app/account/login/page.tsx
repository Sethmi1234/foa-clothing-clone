"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login, isLoggedIn, isHydrated } = useAuth();
  const router = useRouter();
  const [showRecover, setShowRecover] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isHydrated && isLoggedIn) {
      router.replace("/account");
    }
  }, [isHydrated, isLoggedIn, router]);

  useEffect(() => {
    const syncHash = () => {
      setShowRecover(window.location.hash === "#recover");
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    router.push("/account");
  };

  const handleRecover = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRecover(false);
    window.location.hash = "";
  };

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
              <form className="space-y-2.5" onSubmit={handleRecover}>
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
            </div>
          ) : (
            <div className="thb-login-form mx-auto w-full max-w-[640px] md:px-[30px] lg:px-[60px]">
              <form id="customer_login" className="space-y-2.5" onSubmit={handleLogin}>
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
                    placeholder=" "
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder=" "
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  Don't have an account?{" "}
                  <Link href="/account/register" className="thb-text-button">
                    Create an account
                  </Link>
                  <div className="mt-1.5">
                    <Link href="/account/recover" className="thb-text-button">
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
