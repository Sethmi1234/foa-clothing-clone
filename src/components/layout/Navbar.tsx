"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useState } from "react";
import { CartIcon } from "@/components/icons/CartIcon";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { Logo } from "@/components/icons/Logo";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
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

  const renderNavItem = (category: TopLevelCategory) => (
    <li
      key={category.id}
      className="relative"
      onMouseEnter={() => hasDropdown(category) && setActiveCategory(category)}
    >
      <Link
        href={category.url ?? "#"}
        className={`flex items-center gap-1 border-b-2 pb-1 text-[12px] font-normal uppercase tracking-[0.04em] transition-colors ${
          category.isSale ? "text-foa-red" : textColor
        } ${
          activeCategory?.id === category.id ? activeBorder : "border-transparent"
        } ${borderHover}`}
      >
        {category.label}
        {hasDropdown(category) && <ChevronDownIcon className="mt-[1px]" />}
      </Link>
    </li>
  );

  return (
    <header
      className={`relative transition-colors duration-300 ${bgClass}`}
      onMouseLeave={() => setActiveCategory(null)}
    >
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8 md:py-[22px]">
        <button
          type="button"
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <MenuIcon />
        </button>

        <nav className="hidden flex-1 md:block">
          <ul className="flex items-center gap-5 lg:gap-7">
            {navigationData.map(renderNavItem)}
          </ul>
        </nav>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo variant={isLight ? "light" : "dark"} onClick={handleLogoClick} />
        </div>

        <div className={`flex flex-1 items-center justify-end gap-4 md:gap-6 ${textColor}`}>
          <Link
            href="/account/login"
            className="hidden text-[12px] font-normal uppercase tracking-[0.04em] transition-opacity hover:opacity-70 sm:inline"
          >
            Log in
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

      <MegaMenu
        category={activeCategory}
        isOpen={Boolean(activeCategory)}
        forceSolid={scrolled || Boolean(activeCategory)}
      />

      {mobileOpen && (
        <nav className="border-t border-neutral-100 bg-white px-4 py-6 md:hidden">
          <ul className="space-y-2">
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
                      className={`flex w-full items-center justify-between py-2 text-sm font-medium uppercase tracking-wide ${
                        category.isSale ? "text-foa-red" : "text-black"
                      }`}
                    >
                      {category.label}
                      <ChevronDownIcon
                        className={`transition-transform ${
                          mobileExpandedId === category.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpandedId === category.id && (
                      <div className="space-y-4 pb-4 pl-2">
                        {category.columns?.map((column) => (
                          <div key={column.id}>
                            {column.url ? (
                              <Link
                                href={column.url}
                                onClick={() => setMobileOpen(false)}
                                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-black"
                              >
                                {column.title}
                              </Link>
                            ) : (
                              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-black">
                                {column.title}
                              </p>
                            )}
                            <ul className="space-y-2">
                              {column.items.map((item) => (
                                <li key={item.id}>
                                  <Link
                                    href={item.url ?? "#"}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-xs uppercase text-neutral-600"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={category.url ?? "#"}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 text-sm font-medium uppercase tracking-wide ${
                      category.isSale ? "text-foa-red" : "text-black"
                    }`}
                  >
                    {category.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/account/login"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium uppercase tracking-wide"
              >
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
