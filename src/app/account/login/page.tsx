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
        <div className="flex flex-col py-10 md:py-[70px] lg:py-[100px]">
          {showRecover ? (
            <div className="mx-auto w-full max-w-[640px] md:px-[30px] lg:px-[60px]">
              <h4 className="mb-2.5 text-center text-[18px] font-bold uppercase tracking-wide text-[#151515]">
                Reset your password
              </h4>
              <p className="mb-[35px] text-center text-[14px] text-[#151515]">
                We will send you an email to reset your password
              </p>
              <form className="space-y-2.5" onSubmit={handleRecover}>
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
                    className="peer w-full border border-[#e2e2e2] bg-white px-4 py-[1.125rem] pb-[0.625rem] text-[0.9375rem] leading-[1.4] text-[#151515] outline-none transition-colors focus:border-[#151515] placeholder:text-transparent"
                  />
                  <label
                    htmlFor="RecoverEmail"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[0.9375rem] text-[#8e8e8e] transition-all peer-focus:top-[0.55rem] peer-focus:-translate-y-0 peer-focus:text-[0.6875rem] peer-focus:tracking-[0.02em] peer-not-placeholder-shown:top-[0.55rem] peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-[0.6875rem] peer-not-placeholder-shown:tracking-[0.02em]"
                  >
                    Email address
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-2.5 flex h-[52px] w-full items-center justify-center border border-[#151515] bg-[#151515] px-6 py-[0.95rem] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-85"
                >
                  <span>Submit</span>
                </button>
                <div className="mt-[15px] text-center text-[14px] leading-[1.75]">
                  <Link
                    href="/account/login"
                    className="inline text-[#151515] underline underline-offset-[3px] hover:opacity-70"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[640px] md:px-[30px] lg:px-[60px]">
              <form id="customer_login" className="space-y-2.5" onSubmit={handleLogin}>
                <h4 className="mb-2.5 text-center text-[18px] font-bold uppercase tracking-wide text-[#151515]">
                  Log in
                </h4>
                <p className="mb-[35px] text-center text-[14px] text-[#151515]">
                  If you have an account with us, please log in.
                </p>
                <div className="relative">
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
                    className="peer w-full border border-[#e2e2e2] bg-white px-4 py-[1.125rem] pb-[0.625rem] text-[0.9375rem] leading-[1.4] text-[#151515] outline-none transition-colors focus:border-[#151515] placeholder:text-transparent"
                  />
                  <label
                    htmlFor="customer_email"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[0.9375rem] text-[#8e8e8e] transition-all peer-focus:top-[0.55rem] peer-focus:-translate-y-0 peer-focus:text-[0.6875rem] peer-focus:tracking-[0.02em] peer-not-placeholder-shown:top-[0.55rem] peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-[0.6875rem] peer-not-placeholder-shown:tracking-[0.02em]"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="customer_password"
                    name="customer[password]"
                    autoComplete="current-password"
                    placeholder=" "
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer w-full border border-[#e2e2e2] bg-white px-4 py-[1.125rem] pb-[0.625rem] text-[0.9375rem] leading-[1.4] text-[#151515] outline-none transition-colors focus:border-[#151515] placeholder:text-transparent"
                  />
                  <label
                    htmlFor="customer_password"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[0.9375rem] text-[#8e8e8e] transition-all peer-focus:top-[0.55rem] peer-focus:-translate-y-0 peer-focus:text-[0.6875rem] peer-focus:tracking-[0.02em] peer-not-placeholder-shown:top-[0.55rem] peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-[0.6875rem] peer-not-placeholder-shown:tracking-[0.02em]"
                  >
                    Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-2.5 flex h-[52px] w-full items-center justify-center border border-[#151515] bg-[#151515] px-6 py-[0.95rem] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-85"
                >
                  <span>Sign in</span>
                </button>
                <div className="mt-[15px] text-center text-[14px] leading-[1.75]">
                  Don't have an account?{" "}
                  <Link
                    href="/account/register"
                    className="inline text-[#151515] underline underline-offset-[3px] hover:opacity-70"
                  >
                    Create an account
                  </Link>
                  <div className="mt-1.5">
                    <Link
                      href="/account/recover"
                      className="inline text-[#151515] underline underline-offset-[3px] hover:opacity-70"
                    >
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
