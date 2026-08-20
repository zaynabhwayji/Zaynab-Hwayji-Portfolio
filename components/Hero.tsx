"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Code2,
} from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-lavender-100 blur-3xl opacity-60" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-blush-100 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-sage-100 blur-3xl opacity-40" />
      </div>

      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
            Computer Science Graduate · Beirut, Lebanon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-charcoal-700 sm:text-5xl lg:text-6xl text-balance"
          >
            Hi, I&apos;m Zaynab Hwayji.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-xl font-semibold text-lavender-500 sm:text-2xl"
          >
            Junior Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-500 sm:text-lg"
          >
            Computer Science graduate with hands-on experience building modern
            web applications using Next.js, React, Node.js, Express.js,
            MongoDB, and REST APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link href="/#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.cvPath}
              download
              className="btn-secondary"
              aria-label="Download CV"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="text-sm font-medium text-charcoal-400">
              Find me on
            </span>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200 bg-white text-charcoal-500 transition-all hover:border-lavender-300 hover:text-lavender-500 hover:shadow-soft"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200 bg-white text-charcoal-500 transition-all hover:border-lavender-300 hover:text-lavender-500 hover:shadow-soft"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-200 bg-white text-charcoal-500 transition-all hover:border-lavender-300 hover:text-lavender-500 hover:shadow-soft"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: abstract developer visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 rounded-3xl bg-grid opacity-60" />
          <div className="absolute inset-0 rounded-3xl border border-cream-200 bg-gradient-to-br from-white/60 to-cream-100/40 backdrop-blur-sm" />

          {/* Floating code card */}
          <div className="absolute left-6 top-10 w-64 rounded-2xl border border-cream-200 bg-white/90 p-5 shadow-card backdrop-blur-sm animate-float-slow">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-blush-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-sage-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-lavender-300" />
            </div>
            <pre className="mt-3 overflow-hidden text-[11px] leading-relaxed text-charcoal-500">
              <code>{`const developer = {
  name: "Zaynab Hwayji",
  role: "Full-Stack Developer",
  stack: ["Next.js", "React",
    "Node.js", "MongoDB"],
  location: "Beirut, LB",
};`}</code>
            </pre>
          </div>

          {/* Floating skill chips */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {["Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech, i) => (
              <div
                key={tech}
                className="rounded-full border border-cream-200 bg-white/90 px-4 py-2 text-xs font-semibold text-charcoal-600 shadow-soft backdrop-blur-sm"
                style={{
                  animation: `floatSlow 6s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-lavender-200 bg-gradient-to-br from-lavender-50 to-blush-50 shadow-card">
              <Code2
                className="h-12 w-12 text-lavender-400"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-cream-200 bg-white/90 px-5 py-2.5 text-sm font-semibold text-charcoal-600 shadow-soft backdrop-blur-sm">
            Open to opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}
