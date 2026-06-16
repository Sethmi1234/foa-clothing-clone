"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolidHeader = scrolled || !isHome;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar scrolled={showSolidHeader} />
      <Navbar transparent={isHome} scrolled={showSolidHeader} />
    </div>
  );
}
