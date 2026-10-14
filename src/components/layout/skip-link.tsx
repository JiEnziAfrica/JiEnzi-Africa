export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only z-[60] rounded-[var(--radius-sm)] bg-[var(--color-ink)] px-4 py-3 text-sm font-semibold text-[var(--color-paper)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to main content
    </a>
  );
}
