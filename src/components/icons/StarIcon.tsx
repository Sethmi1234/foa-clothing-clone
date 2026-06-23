export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M10 2.5L12.32 7.13L17.5 7.74L13.75 11.27L14.78 16.37L10 13.77L5.22 16.37L6.25 11.27L2.5 7.74L7.68 7.13L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
