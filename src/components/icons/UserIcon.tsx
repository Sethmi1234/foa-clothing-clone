export function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M2 18C2 14 5.5 11.5 10 11.5C14.5 11.5 18 14 18 18"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}