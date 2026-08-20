"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cream-200 bg-cream-50/80 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/#home"
          className="text-lg font-bold tracking-tight text-charcoal-700 hover:text-lavender-500 transition-colors"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-charcoal-500 transition-colors hover:bg-lavender-50 hover:text-lavender-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={siteConfig.cvPath}
            download
            className="btn-primary"
            aria-label="Download CV"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-charcoal-600 transition-colors hover:bg-cream-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-[32rem] border-t border-cream-200 bg-cream-50/95 backdrop-blur-md"
            : "max-h-0"
        }`}
      >
        <div className="section-container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base font-medium text-charcoal-600 transition-colors hover:bg-lavender-50 hover:text-lavender-500"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={siteConfig.cvPath}
            download
            className="btn-primary mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
