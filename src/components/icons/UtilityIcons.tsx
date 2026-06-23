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
    <svg viewBox="0 0 80 20" className={className} aria-hidden="true">
      <text x="0" y="15" fontSize="13" fontWeight="700" fill="currentColor">Koko</text>
    </svg>
  );
}

export function MintpayIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 90 20" className={className} aria-hidden="true">
      <text x="0" y="15" fontSize="11" fontWeight="700" fill="currentColor">mintpay</text>
    </svg>
  );
}
