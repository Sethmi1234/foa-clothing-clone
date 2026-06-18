type HeartIconProps = {
  className?: string;
  filled?: boolean;
};

export function HeartIcon({ className = "", filled = false }: HeartIconProps) {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 14.5L1.5 8.5C0.5 7.5 0 6.2 0 4.8C0 2.1 2.1 0 4.8 0C6.5 0 8 0.8 9 2.1C10 0.8 11.5 0 13.2 0C15.9 0 18 2.1 18 4.8C18 6.2 17.5 7.5 16.5 8.5L9 14.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
