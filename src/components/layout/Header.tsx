"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import WishlistBar from "@/components/wishlist/WishlistBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidAnnouncement = scrolled;
  const showSolidNav = scrolled || !isHome;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar scrolled={showSolidAnnouncement} />
      <div className="relative">
        <div className="h-[30px] bg-white" />
        <Navbar transparent={isHome} scrolled={showSolidNav} />
        <WishlistBar />
      </div>
    </div>
  );
}