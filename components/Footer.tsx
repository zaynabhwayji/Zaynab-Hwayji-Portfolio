import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-200 bg-cream-100/60">
      <div className="section-container py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-charcoal-700">
              {siteConfig.name}
            </h2>
            <p className="mt-1 text-sm text-charcoal-400">{siteConfig.role}</p>
            <p className="mt-1 text-sm text-charcoal-400">
              {siteConfig.location}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 bg-white text-charcoal-500 transition-all hover:border-lavender-300 hover:text-lavender-500 hover:shadow-soft"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 bg-white text-charcoal-500 transition-all hover:border-lavender-300 hover:text-lavender-500 hover:shadow-soft"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 bg-white text-charcoal-500 transition-all hover:border-lavender-300 hover:text-lavender-500 hover:shadow-soft"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <Link
            href="/#home"
            className="flex items-center gap-2 text-sm font-medium text-charcoal-500 transition-colors hover:text-lavender-500"
          >
            <span className="hidden sm:inline">Back to top</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200 bg-white transition-all hover:border-lavender-300 hover:text-lavender-500">
              <ArrowUp className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-10 border-t border-cream-200 pt-6 text-center">
          <p className="text-sm text-charcoal-400">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
