export function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 1H20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 7H20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 13H20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
