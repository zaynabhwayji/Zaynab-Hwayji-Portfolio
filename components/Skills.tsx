"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Boxes,
  Code2,
  BrainCircuit,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Boxes,
  Code2,
  BrainCircuit,
  Wrench,
};

const accentMap: Record<
  number,
  { badge: string; icon: string; ring: string }
> = {
  0: {
    badge: "badge-lavender",
    icon: "bg-lavender-50 text-lavender-500",
    ring: "group-hover:border-lavender-200",
  },
  1: {
    badge: "badge-sage",
    icon: "bg-sage-50 text-sage-500",
    ring: "group-hover:border-sage-200",
  },
  2: {
    badge: "badge-blush",
    icon: "bg-blush-50 text-blush-500",
    ring: "group-hover:border-blush-200",
  },
  3: {
    badge: "badge-rose",
    icon: "bg-rose-50 text-rose-500",
    ring: "group-hover:border-rose-200",
  },
  4: {
    badge: "badge-lavender",
    icon: "bg-lavender-50 text-lavender-500",
    ring: "group-hover:border-lavender-200",
  },
  5: {
    badge: "badge-sage",
    icon: "bg-sage-50 text-sage-500",
    ring: "group-hover:border-sage-200",
  },
  6: {
    badge: "badge-blush",
    icon: "bg-blush-50 text-blush-500",
    ring: "group-hover:border-blush-200",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-cream-100/50">
      <div className="section-container">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
            Skills
          </span>
          <h2 className="section-title mt-4">Skills &amp; Technologies</h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-500">
            A snapshot of the tools, languages, and frameworks I work with
            across the stack.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] ?? Code2;
            const accent =
              accentMap[index % Object.keys(accentMap).length];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                className={`group card card-hover p-6 ${accent.ring}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.icon}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-700">
                    {category.name}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className={accent.badge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
