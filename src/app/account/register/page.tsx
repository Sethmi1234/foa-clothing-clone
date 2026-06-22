"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const { register, isLoggedIn, isHydrated } = useAuth();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isHydrated && isLoggedIn) {
      router.replace("/account");
    }
  }, [isHydrated, isLoggedIn, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(firstName, lastName, email, password);
    router.push("/account");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="thb-form-container py-10 md:py-[70px] lg:py-[100px]">
          <div className="thb-login-form mx-auto w-full max-w-[640px] md:px-[30px] lg:px-[60px]">
            <form className="space-y-2.5" onSubmit={handleSubmit}>
              <h4 className="mb-2.5 text-center text-[18px] font-bold uppercase tracking-wide text-[#151515]">
                Create account
              </h4>
              <p className="mb-[35px] text-center text-[14px] text-[#151515]">
                Join us and get exclusive access to new collections and promotions.
              </p>

              <div className="thb-field">
                <input
                  type="text"
                  id="RegisterFirstName"
                  name="customer[first_name]"
                  autoComplete="given-name"
                  placeholder=" "
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="thb-field-input"
                />
                <label htmlFor="RegisterFirstName" className="thb-field-label">
                  First name
                </label>
              </div>

              <div className="thb-field">
                <input
                  type="text"
                  id="RegisterLastName"
                  name="customer[last_name]"
                  autoComplete="family-name"
                  placeholder=" "
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="thb-field-input"
                />
                <label htmlFor="RegisterLastName" className="thb-field-label">
                  Last name
                </label>
              </div>

              <div className="thb-field">
                <input
                  type="email"
                  id="RegisterEmail"
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
                <label htmlFor="RegisterEmail" className="thb-field-label">
                  Email address
                </label>
              </div>

              <div className="thb-field">
                <input
                  type="password"
                  id="RegisterPassword"
                  name="customer[password]"
                  autoComplete="new-password"
                  placeholder=" "
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="thb-field-input"
                />
                <label htmlFor="RegisterPassword" className="thb-field-label">
                  Password
                </label>
              </div>

              <button type="submit" className="thb-button-full mt-2.5">
                <span>Create account</span>
              </button>

              <div className="switch-login-section mt-[15px] text-center text-[14px] leading-[1.75]">
                Already have an account?{" "}
                <Link href="/account/login" className="thb-text-button">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}