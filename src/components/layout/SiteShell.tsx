"use client";

import { usePathname } from "next/navigation";
import CartDrawer from "@/components/cart/CartDrawer";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import PopupModal from "@/components/ui/PopupModal";
import SearchDrawer from "@/components/search/SearchDrawer";
import WishlistBar from "@/components/wishlist/WishlistBar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCheckout = pathname.startsWith("/checkout");

  if (isCheckout) {
    return <>{children}</>;
  }

  const isAuthPage = pathname === "/account/login" || pathname === "/account/register";

  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      <FloatingActions />
      <CartDrawer />
      <SearchDrawer />
      {!isAuthPage && <WishlistBar />}
      <PopupModal />
    </>
  );
}