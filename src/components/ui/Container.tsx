type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export default function Container({
  children,
  className = "",
  fullWidth = false,
}: ContainerProps) {
  return (
    <div
      className={`${fullWidth ? "w-full px-4 md:px-6" : "mx-auto w-full max-w-[1440px] px-4 md:px-8"} ${className}`}
    >
      {children}
    </div>
  );
}
