import type { ReactNode } from "react";

type PaymentIconProps = {
  className?: string;
};

function PaymentCard({
  className = "",
  children,
  fill = "#fff",
}: PaymentIconProps & {
  children: ReactNode;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 24"
      width="38"
      height="24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="38" height="24" rx="3" fill={fill} />
      <rect x=".5" y=".5" width="37" height="23" rx="2.5" fill="none" stroke="#000" strokeOpacity=".08" />
      {children}
    </svg>
  );
}

export function AmericanExpressIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className} fill="#0071CE">
      <text
        x="19"
        y="10"
        fill="#fff"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="7"
        fontWeight="900"
        letterSpacing="-.45"
        textAnchor="middle"
      >
        AM
      </text>
      <text
        x="19"
        y="17.5"
        fill="#fff"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="7"
        fontWeight="900"
        letterSpacing="-.45"
        textAnchor="middle"
      >
        EX
      </text>
    </PaymentCard>
  );
}

export function ApplePayIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className}>
      <path
        fill="#000"
        d="M9.7 8.1c.6-.7 1-1.7.9-2.7-.9.1-1.8.6-2.4 1.3-.5.6-1 1.6-.9 2.5.9.1 1.8-.4 2.4-1.1zM10.5 12.2c0-1.3.7-2.4 1.8-3-.7-.9-1.8-1.4-2.9-1.4-1.2 0-1.7.6-2.6.6-.8 0-1.4-.6-2.5-.6-1.3 0-2.5.8-3.1 2-1.3 2.4-.3 5.8.9 7.7.6.9 1.3 1.9 2.3 1.9.9 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-.9 2.2-1.8c.7-1 1-2 1-2.1-.1 0-2.1-.8-2.1-3.3z"
      />
      <text x="16" y="15.5" fill="#000" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="700">
        Pay
      </text>
    </PaymentCard>
  );
}

export function DinersClubIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className}>
      <circle cx="15" cy="12" r="6.4" fill="none" stroke="#3086C8" strokeWidth="2" />
      <circle cx="23" cy="12" r="6.4" fill="none" stroke="#3086C8" strokeWidth="2" />
      <text x="19" y="15" fill="#3086C8" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="800" textAnchor="middle">
        DC
      </text>
    </PaymentCard>
  );
}

export function DiscoverIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className}>
      <circle cx="27.4" cy="12" r="6.1" fill="#F48120" />
      <text
        x="18.8"
        y="14.2"
        fill="#231F20"
        fontFamily="Arial, sans-serif"
        fontSize="6"
        fontWeight="800"
        letterSpacing="-.35"
        textAnchor="middle"
      >
        DISCOVER
      </text>
    </PaymentCard>
  );
}

export function GooglePayIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className}>
      <path d="M9.6 12.2c0-.5 0-.9-.1-1.3H5.4v1.7h2.3c-.1.6-.4 1.1-.9 1.4v1.2h1.5c.8-.8 1.3-1.8 1.3-3z" fill="#4285F4" />
      <path d="M5.4 16.4c1.2 0 2.2-.4 2.9-1.1L6.8 14c-.4.3-.9.4-1.5.4-1.1 0-2-.7-2.4-1.6H1.4V14c.8 1.4 2.2 2.4 4 2.4z" fill="#34A853" />
      <path d="M3 12.8c-.1-.3-.2-.5-.2-.8s.1-.6.2-.8V10H1.4c-.3.6-.5 1.3-.5 2s.2 1.4.5 2L3 12.8z" fill="#FBBC04" />
      <path d="M5.4 9.6c.6 0 1.2.2 1.7.7L8.4 9C7.6 8.2 6.6 7.8 5.4 7.8c-1.8 0-3.2 1-4 2.4L3 11.2c.4-.9 1.3-1.6 2.4-1.6z" fill="#EA4335" />
      <text x="14" y="14.8" fill="#5f6368" fontFamily="Arial, sans-serif" fontSize="7.8" fontWeight="700">
        Pay
      </text>
    </PaymentCard>
  );
}

export function JCBIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className}>
      <rect x="7" y="5" width="8" height="14" rx="2" fill="#006EBC" />
      <rect x="15" y="5" width="8" height="14" rx="2" fill="#F00036" />
      <rect x="23" y="5" width="8" height="14" rx="2" fill="#2AB419" />
      <text x="19" y="15.2" fill="#fff" fontFamily="Arial, sans-serif" fontSize="7.2" fontWeight="900" textAnchor="middle">
        JCB
      </text>
    </PaymentCard>
  );
}

export function MastercardIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className} fill="#1C1C1C">
      <circle cx="16" cy="12" r="6.9" fill="#EB001B" />
      <circle cx="22" cy="12" r="6.9" fill="#F79E1B" />
      <path d="M19 6.5a6.9 6.9 0 0 1 0 11 6.9 6.9 0 0 1 0-11z" fill="#FF5F00" />
    </PaymentCard>
  );
}

export function UnionPayIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className} fill="#E9292D">
      <path fill="#005B9A" d="M14.8 0h7.7l-4.2 24h-7.7L14.8 0z" />
      <path fill="#059DA4" d="M22.5 0H35c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3H18.3l4.2-24z" />
      <text x="23.8" y="10.6" fill="#fff" fontFamily="Arial, sans-serif" fontSize="4.7" fontWeight="800" textAnchor="middle">
        Union
      </text>
      <text x="23.8" y="16.2" fill="#fff" fontFamily="Arial, sans-serif" fontSize="4.7" fontWeight="800" textAnchor="middle">
        Pay
      </text>
    </PaymentCard>
  );
}

export function VisaIcon({ className = "" }: PaymentIconProps) {
  return (
    <PaymentCard className={className} fill="#1434CB">
      <text
        x="19"
        y="15.8"
        fill="#fff"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="11"
        fontStyle="italic"
        fontWeight="900"
        letterSpacing="-.7"
        textAnchor="middle"
      >
        VISA
      </text>
    </PaymentCard>
  );
}
