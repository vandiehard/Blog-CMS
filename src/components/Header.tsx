"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Facilities", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Impact", href: "/impact" },
  { label: "CSR", href: "/csr" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_12px_rgba(27,94,55,0.1)]"
          : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 focus-ring rounded-md">
            <div className="flex items-center gap-2">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#1B5E37" />
                <path d="M18 8C13 8 10 12 10 16C10 20 13 22 16 24C14 22 12 19 14 16C16 13 18 12 18 12C18 12 20 13 22 16C24 19 22 22 20 24C23 22 26 20 26 16C26 12 23 8 18 8Z" fill="#A8C96E" />
                <path d="M18 14V28M15 18L18 14L21 18" stroke="#F7FAF4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">
                Ree-Cycle
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors rounded-md hover:bg-surface focus-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-3 py-1.5 text-xs font-semibold border-2 border-primary text-primary rounded-md hover:bg-surface transition-colors">
              ID | EN
            </button>
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-5 py-2.5 bg-tertiary text-text-inverse text-sm font-semibold rounded-md border-2 border-tertiary hover:bg-tertiary-hover hover:border-tertiary-hover transition-colors focus-ring"
            >
              Partnership Inquiry
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-primary focus-ring rounded-md"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border-subtle shadow-large">
          <nav className="mx-auto max-w-[1400px] px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-primary hover:bg-surface rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border-subtle space-y-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-tertiary text-text-inverse text-sm font-semibold rounded-md"
              >
                Partnership Inquiry
              </Link>
              <button className="block w-full text-center px-3 py-2 text-xs font-semibold border-2 border-primary text-primary rounded-md">
                ID | EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
