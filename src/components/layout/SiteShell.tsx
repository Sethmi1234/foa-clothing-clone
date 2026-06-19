"use client";

import { usePathname } from "next/navigation";
import CartDrawer from "@/components/cart/CartDrawer";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import WishlistToast from "@/components/wishlist/WishlistToast";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCheckout = pathname.startsWith("/checkout");

  if (isCheckout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      <FloatingActions />
      <CartDrawer />
      <WishlistToast />
    </>
  );
}
