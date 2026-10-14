import type { Metadata } from "next";
import Script from "next/script";
import { assetPath } from "@/lib/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JiEnzi Africa",
    template: "%s | JiEnzi Africa",
  },
  description:
    "JiEnzi Africa is a youth-centered organization focused on reflection, proactivity, and intentional growth.",
  icons: {
    icon: assetPath("/favicon.ico"),
    shortcut: assetPath("/favicon.ico"),
    apple: assetPath("/apple-touch-icon.png"),
  },
};

const themeInitializationScript = `try {
  const savedTheme = window.localStorage.getItem("jienzi-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme =
    savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : prefersDark
        ? "dark"
        : "light";
} catch {
  document.documentElement.dataset.theme = "light";
}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="jienzi-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
