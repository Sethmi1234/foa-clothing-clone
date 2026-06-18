"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 50);

      // Hide header when scrolling down past a threshold, show when scrolling up
      if (currentY > 120) {
        if (currentY > lastScrollY.current + 5) {
          setHidden(true);
        } else if (currentY < lastScrollY.current - 5) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    // Initialize
    setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidAnnouncement = scrolled;
  const showSolidNav = scrolled || !isHome;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <AnnouncementBar scrolled={showSolidAnnouncement} />
      <div className="h-[30px] bg-white" />
      <Navbar transparent={isHome} scrolled={showSolidNav} />
    </div>
  );
}
