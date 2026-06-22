"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OrdersPage() {
  const { isLoggedIn, isHydrated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isLoggedIn) {
      router.replace("/account/login");
    }
  }, [isHydrated, isLoggedIn, router]);

  if (!isHydrated || !isLoggedIn) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-10 md:py-[70px] lg:py-[100px]">
        <div className="mx-auto w-full max-w-[800px]">
          <div className="mb-8">
            <Link
              href="/account"
              className="mb-4 inline-block text-[12px] uppercase tracking-[0.06em] text-neutral-500 hover:text-[#151515]"
            >
              &larr; Back to Account
            </Link>
            <h1 className="text-[20px] font-bold uppercase tracking-wide text-[#151515]">
              Order History
            </h1>
          </div>

          <div className="rounded-lg border border-[#e2e2e2] p-10 text-center">
            <p className="mb-2 text-[15px] font-medium text-[#151515]">
              No orders yet
            </p>
            <p className="mb-6 text-[13px] text-neutral-500">
              You haven't placed any orders yet.
            </p>
            <Link
              href="/collections/men"
              className="thb-button-full inline-flex"
            >
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}