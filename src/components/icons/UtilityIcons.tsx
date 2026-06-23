type IconProps = {
  className?: string;
};

export function FilterIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className={className} aria-hidden="true">
      <path d="M0 1H18M3 7H15M5 13H13" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="6" cy="1" r="1.5" fill="currentColor" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M13.5 4L6.5 11L3 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NewsletterArrowIcon({ className = "" }: IconProps) {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className={className} aria-hidden="true">
      <path d="M0.799805 5.5H12.7998" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.49976 1L13.9998 5.5L9.49976 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CollectionArrowIcon({ className = "" }: IconProps) {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.7526 0.46967C11.4597 0.176777 10.9848 0.176777 10.6919 0.46967C10.399 0.762563 10.399 1.23744 10.6919 1.53033L15.6919 6.53033L10.6919 10.4697C10.399 10.7626 10.399 11.2374 10.6919 11.5303C10.9848 11.8232 11.4597 11.8232 11.7526 11.5303L16.7526 6.53033C16.8932 6.38968 16.9722 6.19891 16.9722 6C16.9722 5.80109 16.8932 5.61032 16.7526 5.46967L11.7526 0.46967Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SizeChartIcon({ className = "" }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M2 14V4L8 1L14 4V14H2Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function DeliveryTruckIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className={className} aria-hidden="true">
      <path d="M1 4H12L15 7V11H3C1.9 11 1 10.1 1 9V4Z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="5" cy="11" r="1.5" fill="currentColor" />
      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function CareGuideIcon({ className = "" }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 7H11M5 10H9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9 1C4.58 1 1 4.58 1 9c0 1.57.46 3.03 1.26 4.26L1 17l3.87-1.01A7.94 7.94 0 009 17c4.42 0 8-3.58 8-8s-3.58-8-8-8z" />
    </svg>
  );
}

export function CopyLinkIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <path d="M7 10L11 6M8 5h3v3M6 13H4V4h9v2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function EmailIcon({ className = "" }: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="4" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 5L8.5 9.2L14 5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function BackToTopIcon({ className = "" }: IconProps) {
  return (
    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" className={className} aria-hidden="true">
      <path d="M4.87654 2.34497C4.87654 1.99178 5.16285 1.70547 5.51604 1.70547C5.86922 1.70547 6.15554 1.99179 6.15554 2.34497V15.5613C6.15554 15.9144 5.86922 16.2008 5.51604 16.2008C5.16285 16.2008 4.87654 15.9144 4.87654 15.5613V2.34497Z" fill="currentColor" />
      <path d="M0.197525 5.0502L5.02195 0.225769C5.14739 0.100345 5.32293 0.0251028 5.48588 0C5.66143 0 5.83696 0.0752197 5.96239 0.200647L10.7994 5.03761C10.9373 5.17554 11 5.33858 11 5.51412C11 5.68967 10.9248 5.8652 10.7994 5.99063C10.5486 6.254 10.1223 6.254 9.85892 5.99063L6.16301 2.30726C5.72921 2.1318 5.72921 1.70547 4.83387 2.29472L1.13796 5.99063C0.887198 6.254 0.460891 6.254 0.197525 5.99063C-0.0658415 5.73987 -0.0658415 5.31356 0.197525 5.0502Z" fill="currentColor" />
    </svg>
  );
}

export function KokoIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 56 20" height="20" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kokoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="15"
        fontSize="14"
        fontWeight="800"
        fill="url(#kokoGrad)"
        fontFamily="Arial, sans-serif"
        letterSpacing="0.5"
      >
        KOKO
      </text>
    </svg>
  );
}

export function MintpayIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 76 22" height="22" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* Dark pill background */}
      <rect x="0" y="0" width="76" height="22" rx="11" fill="#0d0d0d" />
      {/* Mint leaf icon */}
      <ellipse cx="12" cy="11" rx="5" ry="4" fill="#22c55e" transform="rotate(-20 12 11)" />
      <path d="M9 13 C10 9 14 8 15 12" fill="#16a34a" />
      <line x1="12" y1="14" x2="12" y2="8" stroke="#bbf7d0" strokeWidth="0.8" strokeLinecap="round" />
      {/* "intpay" text */}
      <text
        x="20"
        y="15"
        fontSize="9.5"
        fontWeight="600"
        fill="white"
        fontFamily="Arial, sans-serif"
        letterSpacing="0.2"
      >
        intpay
      </text>
    </svg>
  );
}

export function InfoIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="6" stroke="#aaaaaa" strokeWidth="1" />
      <path d="M7 6.5V10" stroke="#aaaaaa" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="4.5" r="0.6" fill="#aaaaaa" />
    </svg>
  );
}

export function GooglePayIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 41 17" height="17" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* G */}
      <path d="M8.07 7.3v2.2h3.6c-.14.83-.98 2.44-3.6 2.44-2.17 0-3.94-1.79-3.94-4S5.9 3.94 8.07 3.94c1.23 0 2.06.53 2.53.98l1.72-1.66C11.2 2.2 9.77 1.5 8.07 1.5 4.5 1.5 1.63 4.37 1.63 7.94s2.87 6.44 6.44 6.44c3.72 0 6.19-2.61 6.19-6.29 0-.43-.05-.75-.1-1.08H8.07v.29z" fill="#4285F4"/>
      {/* o */}
      <path d="M16.5 5.4c-1.96 0-3.56 1.49-3.56 3.54 0 2.03 1.6 3.54 3.56 3.54s3.56-1.51 3.56-3.54c0-2.05-1.6-3.54-3.56-3.54zm0 5.68c-1.07 0-2-.89-2-2.14s.93-2.14 2-2.14 2 .9 2 2.14-.93 2.14-2 2.14z" fill="#EA4335"/>
      {/* o */}
      <path d="M23.5 5.4c-1.96 0-3.56 1.49-3.56 3.54 0 2.03 1.6 3.54 3.56 3.54s3.56-1.51 3.56-3.54c0-2.05-1.6-3.54-3.56-3.54zm0 5.68c-1.07 0-2-.89-2-2.14s.93-2.14 2-2.14 2 .9 2 2.14-.93 2.14-2 2.14z" fill="#FBBC04"/>
      {/* g */}
      <path d="M30.39 5.56v.54h-.04c-.35-.43-.99-.7-1.8-.7-1.7 0-3.26 1.5-3.26 3.55 0 2.02 1.56 3.53 3.26 3.53.8 0 1.45-.28 1.8-.72h.04v.45c0 1.36-.73 2.09-1.9 2.09-.95 0-1.54-.68-1.78-1.26l-1.3.54c.39.93 1.41 2.1 3.08 2.1 1.79 0 3.3-1.06 3.3-3.63V5.56h-1.4zm-1.7 5.5c-1.07 0-1.97-.9-1.97-2.12 0-1.24.9-2.16 1.97-2.16 1.06 0 1.9.93 1.9 2.16 0 1.22-.84 2.12-1.9 2.12z" fill="#4285F4"/>
      {/* P */}
      <path d="M34.6 1.85h-2.3v12.06h1.53V9.4h.77c2.02 0 4.01-1.46 4.01-3.78S36.62 1.85 34.6 1.85zm.05 6.1h-.82V3.27h.82c1.13 0 1.77.92 1.77 2.34 0 1.4-.64 2.34-1.77 2.34z" fill="#34A853"/>
      {/* a */}
      <path d="M38.97 13.91h1.54V1.85h-1.54v12.06z" fill="#EA4335"/>
    </svg>
  );
}

export function RulerIcon({ className = "" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="5" width="16" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 5v3M7 5v2M10 5v3M13 5v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function FreeShippingIcon({ className = "" }: IconProps) {
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" fill="none" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* Truck body */}
      <rect x="1" y="8" width="26" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      {/* Truck cab */}
      <path d="M27 12h6l4 5v7h-10V12z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      {/* Wheels */}
      <circle cx="9" cy="25" r="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="20" cy="25" r="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="34" cy="25" r="3" stroke="currentColor" strokeWidth="1.3" />
      {/* FREE label */}
      <rect x="6" y="11" width="16" height="8" rx="1" fill="currentColor" />
      <text x="8" y="18" fontSize="5" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">FREE</text>
    </svg>
  );
}

export function VisaIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 38 24" height="24" width="38" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="38" height="24" rx="3" fill="#1434CB" />
      <text x="19" y="16" fontSize="10" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif" textAnchor="middle" fontStyle="italic" letterSpacing="0.5">VISA</text>
    </svg>
  );
}

export function MastercardIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 38 24" height="24" width="38" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="38" height="24" rx="3" fill="#252525" />
      <circle cx="15" cy="12" r="6" fill="#EB001B" />
      <circle cx="23" cy="12" r="6" fill="#F79E1B" fillOpacity="0.8" />
    </svg>
  );
}

export function AmexIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 38 24" height="24" width="38" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="38" height="24" rx="3" fill="#006FCF" />
      <text x="19" y="15" fontSize="7" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif" textAnchor="middle">AMEX</text>
    </svg>
  );
}

export function PlusBadgeIcon({ text, className = "" }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 38 24" height="24" width="38" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="37" height="23" x="0.5" y="0.5" rx="2.5" fill="white" stroke="#dedede" />
      <text x="19" y="15" fontSize="10" fontWeight="500" fill="#666" fontFamily="Arial, sans-serif" textAnchor="middle">{text}</text>
    </svg>
  );
}
