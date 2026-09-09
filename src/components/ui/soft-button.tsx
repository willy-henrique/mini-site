import type { ButtonHTMLAttributes, ReactNode } from "react";

interface SoftButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function SoftButton({ children, className = "", variant = "primary", ...props }: SoftButtonProps) {
  return (
    <button className={`soft-button soft-button--${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
