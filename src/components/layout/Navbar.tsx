"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { CartIcon } from "@/components/icons/CartIcon";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { Logo } from "@/components/icons/Logo";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { UserIcon } from "@/components/icons/UserIcon";
import MegaMenu from "@/components/layout/MegaMenu";
import { navigationData } from "@/data/navigation";
import type { TopLevelCategory } from "@/types/navigation";

type NavbarProps = {
  transparent?: boolean;
  scrolled?: boolean;
};

export default function Navbar({ transparent = false, scrolled = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<TopLevelCategory | null>(null);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null);

  const isLight = transparent && !scrolled;
  const textColor = isLight ? "text-white" : "text-black";
  const borderHover = isLight ? "hover:border-white" : "hover:border-black";
  const activeBorder = isLight ? "border-white" : "border-black";
  const bgClass = isLight ? "bg-transparent" : "bg-white";

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    sessionStorage.setItem("foa-logo-scroll-top", "true");
    window.location.assign("/");
  };

  const hasDropdown = (category: TopLevelCategory) =>
    Boolean(category.columns && category.columns.length > 0);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileExpandedId(null);
  }, []);

  // Use ref to track activeCategory without re-registering listeners
  const activeCategoryRef = useRef(activeCategory);
  activeCategoryRef.current = activeCategory;

  // Close mobile dropdown and mega menu on route change and scroll
  useEffect(() => {
    const handleRouteChange = () => {
      closeMobile();
      setActiveCategory(null);
    };
    const handleScroll = () => {
      if (activeCategoryRef.current) setActiveCategory(null);
    };
    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeMobile]);

  const handleNavClick = useCallback(() => {
    setActiveCategory(null);
  }, []);

  const renderNavItem = (category: TopLevelCategory) => (
    <li
      key={category.id}
      className="relative"
      onMouseEnter={() => hasDropdown(category) && setActiveCategory(category)}
    >
      <Link
        href={category.url ?? "#"}
        onClick={handleNavClick}
        className={`flex items-center gap-1 border-b-2 pb-1 text-[12px] font-normal uppercase tracking-[0.04em] transition-colors  ${
          category.isSale ? "text-foa-red" : textColor
        } ${
          activeCategory?.id === category.id ? activeBorder : "border-transparent"
        } ${borderHover}`}
      >
        {category.label}
        {hasDropdown(category) && <ChevronDownIcon className="mt-[1px] size-3" />}
      </Link>
    </li>
  );

  return (
    <header
      className={`relative transition-colors duration-300 ${bgClass}`}
      onMouseLeave={() => setActiveCategory(null)}
    >
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8 md:py-[22px]">
        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop nav - left */}
        <nav className="hidden flex-1 md:block">
          <ul className="flex items-center gap-5 lg:gap-7">
            {navigationData.map(renderNavItem)}
          </ul>
        </nav>

        {/* Logo - center */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo variant={isLight ? "light" : "dark"} onClick={handleLogoClick} />
        </div>

        {/* Right icons */}
        <div className={`flex flex-1 items-center justify-end gap-4 md:gap-5 ${textColor}`}>
          <Link
            href="/account/login"
            className="hidden text-[12px] font-normal uppercase tracking-[0.04em] transition-opacity hover:opacity-70 sm:inline"
            aria-label="Log in"
          >
            <UserIcon className="sm:hidden" />
            <span className="hidden sm:inline">Log in</span>
          </Link>
          <button type="button" aria-label="Search" className="transition-opacity hover:opacity-70">
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative transition-opacity hover:opacity-70"
          >
            <CartIcon />
            <span
              className={`absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-semibold ${
                isLight ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              0
            </span>
          </button>
        </div>
      </div>

      {/* Desktop MegaMenu */}
      <MegaMenu
        category={activeCategory}
        isOpen={Boolean(activeCategory)}
        forceSolid={scrolled || Boolean(activeCategory)}
      />

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="absolute left-0 right-0 z-50 max-h-[calc(100vh-var(--header-height))] overflow-y-auto border-t border-neutral-200 bg-white px-4 pb-8 pt-4 shadow-lg md:hidden">
          <ul className="space-y-1">
            {navigationData.map((category) => (
              <li key={category.id}>
                {hasDropdown(category) ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpandedId(
                          mobileExpandedId === category.id ? null : category.id
                        )
                      }
                      className={`flex w-full items-center justify-between py-3 text-[13px] font-medium uppercase tracking-[0.06em] ${
                        category.isSale ? "text-foa-red" : "text-black"
                      }`}
                    >
                      {category.label}
                      <ChevronDownIcon
                        className={`size-3 transition-transform ${
                          mobileExpandedId === category.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpandedId === category.id && (
                      <div className="space-y-4 pb-4 pl-3">
                        {category.columns?.map((column) => (
                          <div key={column.id}>
                            {column.url ? (
                              <Link
                                href={column.url}
                                onClick={closeMobile}
                                className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.04em] text-black"
                              >
                                {column.title}
                              </Link>
                            ) : (
                              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.04em] text-black">
                                {column.title}
                              </p>
                            )}
                            {column.items.length > 0 && (
                              <ul className="space-y-2 pl-2">
                                {column.items.map((item) => (
                                  <li key={item.id}>
                                    <Link
                                      href={item.url ?? "#"}
                                      onClick={closeMobile}
                                      className="block text-[12px] uppercase tracking-[0.02em] text-neutral-600 hover:text-black"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={category.url ?? "#"}
                    onClick={closeMobile}
                    className={`block py-3 text-[13px] font-medium uppercase tracking-[0.06em] ${
                      category.isSale ? "text-foa-red" : "text-black"
                    }`}
                  >
                    {category.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="border-t border-neutral-100 pt-3 mt-3">
              <Link
                href="/account/login"
                onClick={closeMobile}
                className="flex items-center gap-2 py-3 text-[13px] font-medium uppercase tracking-[0.06em] text-black"
              >
                <UserIcon className="size-4" />
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}