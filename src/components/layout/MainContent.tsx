"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 120) {
        if (currentY > lastScrollY + 5) {
          setNavbarHidden(true);
        } else if (currentY < lastScrollY - 5) {
          setNavbarHidden(false);
        }
      } else {
        setNavbarHidden(false);
      }
      lastScrollY = currentY;
    };
    // Initialize
    setNavbarHidden(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Announcement bar (34px) is always visible.
  // When navbar is visible: full padding needed (34px announcement + 30px spacer + navbar = ~104/112px)
  // When navbar is hidden: only 34px for the announcement bar
  // Home page uses its own hero padding, so no extra padding needed.
  const paddingClass = isHome
    ? ""
    : navbarHidden
      ? "pt-[34px]"
      : "pt-[104px] md:pt-[112px]";

  return (
    <main className={paddingClass}>{children}</main>
  );
}
