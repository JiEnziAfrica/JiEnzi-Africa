"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { BrandMark } from "@/components/ui/brand-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { mainNavigation, type NavigationItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative h-4 w-5" aria-hidden="true">
      <span
        className={cn(
          "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200",
          isOpen && "translate-y-[7px] rotate-45",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200",
          isOpen && "opacity-0",
        )}
      />
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform duration-200",
          isOpen && "-translate-y-[7px] -rotate-45",
        )}
      />
    </span>
  );
}

function DesktopNavItem({ item }: { item: NavigationItem }) {
  const href = item.href?.startsWith("#") ? `/${item.href}` : item.href;
  const className = cn(
    "rounded-[var(--radius-sm)] px-3 py-2 text-xs font-semibold transition-colors duration-200",
    item.isPrimary
      ? "border border-[var(--color-brand-yellow)] bg-[var(--color-brand-yellow)] px-4 text-[var(--color-ink-on-brand)] hover:bg-[color-mix(in_srgb,var(--color-brand-yellow)_84%,var(--color-surface))]"
      : "text-[var(--color-ink)] hover:text-[color-mix(in_srgb,var(--color-ink)_72%,var(--color-brand-yellow))]",
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <span
      className={cn(className, "cursor-default opacity-70")}
      aria-disabled="true"
      title={`${item.label} destination pending implementation`}
    >
      {item.label}
    </span>
  );
}

function MobileNavItem({
  item,
  onImplementedSelect,
}: {
  item: NavigationItem;
  onImplementedSelect: () => void;
}) {
  const href = item.href?.startsWith("#") ? `/${item.href}` : item.href;
  const className = cn(
    "flex min-h-12 w-full items-center rounded-[var(--radius-sm)] px-4 text-sm font-semibold transition-colors duration-200",
    item.isPrimary
      ? "mt-3 justify-center border border-[var(--color-brand-yellow)] bg-[var(--color-brand-yellow)] text-[var(--color-ink-on-brand)]"
      : "text-[var(--color-ink)] hover:bg-[color-mix(in_srgb,var(--color-brand-yellow)_14%,transparent)]",
  );

  if (href) {
    return (
      <Link href={href} className={className} onClick={onImplementedSelect}>
        {item.label}
      </Link>
    );
  }

  return (
    <span
      className={cn(className, "cursor-default opacity-70")}
      aria-disabled="true"
      title={`${item.label} destination pending implementation`}
    >
      {item.label}
    </span>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    firstFocusable?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="flex min-h-20 items-center justify-between gap-2 py-3 sm:gap-6">
        <Link
          href="/"
          aria-label="JiEnzi Africa home"
          className="brand-home-link rounded-[var(--radius-sm)]"
          onClick={() => setIsOpen(false)}
        >
          <BrandMark className="w-28 sm:w-36 md:w-44" priority />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {mainNavigation.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          <ThemeToggle />

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 items-center gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-sm font-semibold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-ink)] sm:px-4 lg:hidden"
            aria-controls={menuId}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="site-header__menu-label">Menu</span>
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        ref={panelRef}
        className={cn(
          "grid overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-paper)] transition-[grid-template-rows,opacity] duration-200 ease-out lg:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <Container className="min-h-0">
          <nav
            className="flex min-h-0 flex-col gap-1 overflow-hidden py-4"
            aria-label="Primary mobile"
          >
            {mainNavigation.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onImplementedSelect={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
