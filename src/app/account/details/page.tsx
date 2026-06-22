"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AccountDetailsPage() {
  const { user, isLoggedIn, isHydrated, updateUser } = useAuth();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (isHydrated && !isLoggedIn) {
      router.replace("/account/login");
    }
  }, [isHydrated, isLoggedIn, router]);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [user]);

  if (!isHydrated || !isLoggedIn || !user) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ firstName, lastName, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-10 md:py-[70px] lg:py-[100px]">
        <div className="mx-auto w-full max-w-[640px]">
          <div className="mb-8">
            <Link
              href="/account"
              className="mb-4 inline-block text-[12px] uppercase tracking-[0.06em] text-neutral-500 hover:text-[#151515]"
            >
              &larr; Back to Account
            </Link>
            <h1 className="text-[20px] font-bold uppercase tracking-wide text-[#151515]">
              Account Details
            </h1>
          </div>

          <form className="space-y-2.5" onSubmit={handleSubmit}>
            <div className="thb-field">
              <input
                type="text"
                id="FirstName"
                name="first_name"
                autoComplete="given-name"
                placeholder=" "
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="thb-field-input"
              />
              <label htmlFor="FirstName" className="thb-field-label">
                First name
              </label>
            </div>

            <div className="thb-field">
              <input
                type="text"
                id="LastName"
                name="last_name"
                autoComplete="family-name"
                placeholder=" "
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="thb-field-input"
              />
              <label htmlFor="LastName" className="thb-field-label">
                Last name
              </label>
            </div>

            <div className="thb-field">
              <input
                type="email"
                id="Email"
                name="email"
                autoComplete="email"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="thb-field-input"
              />
              <label htmlFor="Email" className="thb-field-label">
                Email address
              </label>
            </div>

            <button type="submit" className="thb-button-full mt-2.5">
              <span>{saved ? "Saved!" : "Save changes"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}