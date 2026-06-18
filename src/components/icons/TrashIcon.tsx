export function TrashIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3L1 3M5.00024 6V10M8.00024 6V10M11.0002 3V12.5C11.0002 12.6326 10.9476 12.7598 10.8538 12.8536C10.76 12.9473 10.6329 13 10.5002 13H2.50024C2.36764 13 2.24046 12.9473 2.14669 12.8536C2.05292 12.7598 2.00024 12.6326 2.00024 12.5V3M9.00025 3V2C9.00025 1.73478 8.89489 1.48043 8.70735 1.29289C8.51982 1.10536 8.26546 1 8.00024 1H5.00024C4.73503 1 4.48067 1.10536 4.29314 1.29289C4.1056 1.48043 4.00024 1.73478 4.00024 2V3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
