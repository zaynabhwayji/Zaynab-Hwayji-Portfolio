import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="card overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-bold text-charcoal-700 sm:text-4xl text-balance">
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-500">
              I&apos;m currently looking for opportunities as a Junior
              Full-Stack Developer or Junior Front-End Developer.
            </p>

            <div className="mt-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-primary"
                aria-label="Get in touch by email"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Contact links */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 p-6 transition-all hover:border-lavender-200 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lavender-50 text-lavender-500 transition-colors group-hover:bg-lavender-100">
                <Mail className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                  Email
                </p>
                <p className="mt-1 break-all text-sm font-medium text-charcoal-600">
                  {siteConfig.email}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-charcoal-300 transition-colors group-hover:text-lavender-500" />
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 p-6 transition-all hover:border-lavender-200 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blush-50 text-blush-500 transition-colors group-hover:bg-blush-100">
                <Linkedin className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                  LinkedIn
                </p>
                <p className="mt-1 text-sm font-medium text-charcoal-600">
                  zaynab-hwayji
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-charcoal-300 transition-colors group-hover:text-blush-500" />
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 p-6 transition-all hover:border-lavender-200 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-500 transition-colors group-hover:bg-sage-100">
                <Github className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                  GitHub
                </p>
                <p className="mt-1 text-sm font-medium text-charcoal-600">
                  zaynabhwayji
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-charcoal-300 transition-colors group-hover:text-sage-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
