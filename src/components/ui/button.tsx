import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonStyles =
  "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] border px-5 py-3 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 ease-out hover:-translate-y-0.5 focus-visible:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "border-[var(--color-brand-yellow)] bg-[var(--color-brand-yellow)] text-[var(--color-ink-on-brand)] hover:bg-[color-mix(in_srgb,var(--color-brand-yellow)_86%,var(--color-surface))]",
  secondary:
    "border-[var(--color-ink)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]",
  onBrand:
    "border-[var(--color-ink-on-brand)] bg-transparent text-[var(--color-ink-on-brand)] hover:bg-[var(--color-ink-on-brand)] hover:text-[var(--color-brand-yellow)]",
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonStyles, variants[variant], className)} {...props} />
  );
}

export function LinkButton({
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <a className={cn(buttonStyles, variants[variant], className)} {...props} />
  );
}
