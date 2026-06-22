import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
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

const socialIcons = footerData.followUs.social.map(({ id, label, href }) => ({
  id,
  label,
  href,
  Icon: socialIconMap[label],
}));

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

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-10 md:py-16">
        {/* Row 1: Logo (50%) + Newsletter (50%) */}
        <div className="mb-14 grid gap-10 md:grid-cols-2 md:gap-8">
          <div className="flex items-start">
            <Logo variant="light" className="[&_img]:h-8 [&_img]:w-auto md:[&_img]:h-10" />
          </div>

          <div>
            <h3 className="thb-widget-title mb-3 text-[13px] font-semibold uppercase tracking-[0.08em]">
              Sign up for the FOA Newsletter
            </h3>
            <p className="mb-5 text-[14px] leading-relaxed text-white/70">
              Be the first to know about our new collections and promotions
            </p>
            <form className="relative">
              <div className="thb-field thb-field-dark">
                <input
                  type="email"
                  id="footer-newsletter-email"
                  name="contact[email]"
                  placeholder=" "
                  required
                  className="thb-field-input thb-field-input-dark"
                  aria-label="Email address"
                />
                <label htmlFor="footer-newsletter-email" className="thb-field-label thb-field-label-dark">
                  Email
                </label>
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-white transition-opacity hover:opacity-60"
                  aria-label="Subscribe"
                >
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
                    <path d="M0.8 5.5H12.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M9.5 1L14 5.5L9.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Row 2: Follow Us (50%) | Support (25%) | Info (25%) */}
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h3 className="thb-widget-title mb-5 text-[13px] font-semibold uppercase tracking-[0.08em]">
              Follow Us
            </h3>
            <div className="flex gap-5">
              {socialIcons.map(({ id, Icon, href, label }) => (
                <Link
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-opacity hover:opacity-70"
                  aria-label={label}
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="thb-widget-title mb-5 text-[13px] font-semibold uppercase tracking-[0.08em]">
              Support
            </h3>
            <ul className="space-y-3">
              {footerData.support.items.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="thb-widget-title mb-5 text-[13px] font-semibold uppercase tracking-[0.08em]">
              Info
            </h3>
            <ul className="space-y-3">
              {footerData.info.items.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-[#444]">
        <div className="mx-auto max-w-[1440px] px-6 py-6 md:px-10">
          <div className="flex justify-end">
            <div className="flex flex-wrap items-center justify-end gap-2">
              {paymentMethods.map(({ label, Icon }) => (
                <figure key={label} className="m-0" aria-label={label}>
                  <Icon className="h-6 w-[38px]" />
                </figure>
              ))}
            </div>
          </div>

          <p className="mt-5 text-[13px] text-white/60">
            © {new Date().getFullYear()} FOA Clothing, All rights reserved.{" "}
            <Link
              href="https://www.shopify.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="underline hover:text-white"
            >
              Powered by Shopify
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
