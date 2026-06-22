"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";
import {
  AmericanExpressIcon,
  ApplePayIcon,
  DinersClubIcon,
  DiscoverIcon,
  GooglePayIcon,
  JCBIcon,
  MastercardIcon,
  UnionPayIcon,
  VisaIcon,
} from "@/components/icons/PaymentIcons";
import { footerData } from "@/data/mockData";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
};

const paymentMethods = [
  { label: "American Express", Icon: AmericanExpressIcon },
  { label: "Apple Pay", Icon: ApplePayIcon },
  { label: "Diners Club", Icon: DinersClubIcon },
  { label: "Discover", Icon: DiscoverIcon },
  { label: "Google Pay", Icon: GooglePayIcon },
  { label: "JCB", Icon: JCBIcon },
  { label: "Mastercard", Icon: MastercardIcon },
  { label: "Union Pay", Icon: UnionPayIcon },
  { label: "Visa", Icon: VisaIcon },
];

function FooterMenu({
  title,
  items,
}: {
  title: string;
  items: { id: string; label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#444] md:border-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-6 text-left text-[20px] font-semibold uppercase tracking-[0.05em] text-white md:pointer-events-none md:py-0 md:text-[14px] md:font-semibold md:tracking-[0.1em]"
        aria-expanded={open}
      >
        {title}
        <span className="relative block h-[19px] w-[19px] md:hidden">
          <span
            className={`absolute left-1/2 top-[3px] h-3 w-px -translate-x-1/2 bg-white transition-transform ${
              open ? "scale-y-0" : "scale-y-100"
            }`}
          />
          <span className="absolute left-[3px] top-[9px] h-px w-3 bg-white" />
        </span>
      </button>
      <ul
        className={`mb-8 list-none space-y-[5px] overflow-hidden p-0 md:mb-0 md:block ${
          open ? "block" : "hidden md:block"
        }`}
      >
        {items.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="text-[15px] text-white transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-[15px] text-white" id="footer">
      <div className="mx-auto max-w-[1440px] px-6 py-[45px] md:px-10 md:py-[65px]">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12 md:gap-x-6">
          <div className="mb-10 md:col-span-6 md:mb-10">
            <div className="widget--text">
              <Image
                src="https://foaclothing.com/cdn/shop/files/FOA_Logos-03.png?v=1684393386&width=301"
                alt="FOA Clothing"
                width={150}
                height={50}
                className="mb-5 h-auto w-[120px] md:w-[150px]"
              />
            </div>
          </div>

          <div className="mb-10 md:col-span-6 md:mb-10">
            <div className="widget--signup">
              <div className="mb-5 text-[14px] font-semibold uppercase tracking-[0.1em]">
                Sign up for the FOA Newsletter
              </div>
              <p className="mb-0 text-[15px] leading-relaxed text-white">
                Be the first to know about our new collections and promotions
              </p>
              <div className="signup-container">
                <form className="relative">
                  <fieldset className="relative border-0 p-0">
                    <div className="thb-field thb-field-dark relative">
                      <input
                        type="email"
                        id="footer-newsletter-email"
                        name="contact[email]"
                        placeholder=" "
                        required
                        autoComplete="email"
                        className="thb-field-input thb-field-input-dark pr-10"
                        aria-label="Email address"
                      />
                      <label
                        htmlFor="footer-newsletter-email"
                        className="thb-field-label thb-field-label-dark"
                      >
                        Email
                      </label>
                      <button
                        type="submit"
                        className="absolute bottom-0 right-0 flex h-full max-h-[52px] w-10 items-center justify-center text-white transition-opacity hover:opacity-60"
                        aria-label="Subscribe to newsletter"
                      >
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
                          <path
                            d="M0.799805 5.5H12.7998"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.49976 1L13.9998 5.5L9.49976 10"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>

          <div className="mb-10 md:col-span-6 md:mb-10">
            <div className="widget--text">
              <div className="mb-5 text-[14px] font-semibold uppercase tracking-[0.1em]">
                Follow Us
              </div>
              <ul className="m-0 flex list-none flex-wrap gap-0 p-0">
                {footerData.followUs.social.map(({ id, label, href }) => {
                  const Icon = socialIconMap[label];
                  return (
                    <li key={id} className="inline-flex">
                      <Link
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        title={label}
                        className="inline-flex h-11 w-11 items-center justify-center text-white transition-opacity hover:opacity-70"
                        aria-label={label}
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <FooterMenu title="Support" items={footerData.support.items} />
          </div>

          <div className="md:col-span-3">
            <FooterMenu title="Info" items={footerData.info.items} />
          </div>
        </div>
      </div>

      <div className="sub-footer mt-10 text-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="hidden md:col-span-8 md:block" />
            <div className="md:col-span-4">
              <div className="mb-9 flex flex-wrap items-center justify-start gap-[5px] md:mb-6 md:justify-end">
                {paymentMethods.map(({ label, Icon }) => (
                  <figure key={label} className="m-0 inline-flex" aria-label={label}>
                    <Icon className="h-6 w-[38px]" />
                  </figure>
                ))}
              </div>
            </div>
            <div className="col-span-full">
              <p className="text-[13px] text-white/60">
                © {new Date().getFullYear()} FOA Clothing, All rights reserved.{" "}
                <Link
                  href="https://www.shopify.com?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white/60 underline underline-offset-2 hover:text-white"
                >
                  Powered by Shopify
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
