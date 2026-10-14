import type { PropsWithChildren } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <SkipLink />
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-[calc(100svh-5rem)]"
        tabIndex={-1}
      >
        {children}
      </main>
    </div>
  );
}
