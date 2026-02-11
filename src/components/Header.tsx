"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

type HeaderDict = {
  logo: string;
  nav: { features: string; comparison: string; useCases: string; faq: string };
  cta: string;
  langSwitch: string;
};

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: HeaderDict;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const altLocale = locale === "en" ? "zh" : "en";

  const navItems = [
    { label: dict.nav.features, href: "#features" },
    { label: dict.nav.comparison, href: "#comparison" },
    { label: dict.nav.useCases, href: "#use-cases" },
    { label: dict.nav.faq, href: "#faq" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-bg-primary/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="font-display text-lg font-bold text-accent">
          {dict.logo}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={`/${altLocale}`}
            className="rounded-md px-3 py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {dict.langSwitch}
          </Link>
          <a
            href="https://youseedance2.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-hover"
          >
            {dict.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-text-primary transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border/50 bg-bg-primary px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <Link
              href={`/${altLocale}`}
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              {dict.langSwitch}
            </Link>
            <a
              href="https://youseedance2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg-primary hover:bg-accent-hover"
            >
              {dict.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
