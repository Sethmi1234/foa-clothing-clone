"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserIcon } from "@/components/icons/UserIcon";

export default function AccountPage() {
  const { user, isLoggedIn, isHydrated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isLoggedIn) {
      router.replace("/account/login");
    }
  }, [isHydrated, isLoggedIn, router]);

  if (!isHydrated || !isLoggedIn || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-10 md:py-[70px] lg:py-[100px]">
        <div className="mx-auto w-full max-w-[800px]">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
              <UserIcon className="size-5 text-neutral-600" />
            </div>
            <div>
              <h1 className="text-[20px] font-bold uppercase tracking-wide text-[#151515]">
                My Account
              </h1>
              <p className="text-[13px] text-neutral-500">
                {user.firstName} {user.lastName} &mdash; {user.email}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/account/orders"
              className="group block rounded-lg border border-[#e2e2e2] p-6 transition-colors hover:border-[#151515]"
            >
              <h3 className="mb-1 text-[15px] font-semibold uppercase tracking-[0.04em] text-[#151515]">
                Order History
              </h3>
              <p className="text-[13px] text-neutral-500">
                View your past orders and track current orders
              </p>
            </Link>

            <Link
              href="/account/details"
              className="group block rounded-lg border border-[#e2e2e2] p-6 transition-colors hover:border-[#151515]"
            >
              <h3 className="mb-1 text-[15px] font-semibold uppercase tracking-[0.04em] text-[#151515]">
                Account Details
              </h3>
              <p className="text-[13px] text-neutral-500">
                Update your name, email, and password
              </p>
            </Link>

            <Link
              href="/account/addresses"
              className="group block rounded-lg border border-[#e2e2e2] p-6 transition-colors hover:border-[#151515]"
            >
              <h3 className="mb-1 text-[15px] font-semibold uppercase tracking-[0.04em] text-[#151515]">
                Addresses
              </h3>
              <p className="text-[13px] text-neutral-500">
                Manage your shipping and billing addresses
              </p>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="group block w-full rounded-lg border border-[#e2e2e2] p-6 text-left transition-colors hover:border-[#151515]"
            >
              <h3 className="mb-1 text-[15px] font-semibold uppercase tracking-[0.04em] text-[#151515]">
                Log out
              </h3>
              <p className="text-[13px] text-neutral-500">
                Sign out of your account
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}