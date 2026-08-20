"use client";

import Image from "next/image";
import { Code2 } from "lucide-react";

type ProjectImageProps = {
  src: string;
  alt: string;
  accent?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

const accentBg: Record<string, string> = {
  lavender: "from-lavender-50 to-lavender-200",
  blush: "from-blush-50 to-blush-200",
  rose: "from-rose-50 to-rose-200",
  sage: "from-sage-50 to-sage-200",
};

export default function ProjectImage({
  src,
  alt,
  accent = "lavender",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
}: ProjectImageProps) {
  const gradient = accentBg[accent] ?? accentBg.lavender;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-cream-200 bg-gradient-to-br ${gradient} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

export function ProjectImagePlaceholder({
  title,
  accent = "lavender",
  className = "",
}: {
  title: string;
  accent?: string;
  className?: string;
}) {
  const gradient = accentBg[accent] ?? accentBg.lavender;
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-cream-200 bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative flex flex-col items-center gap-3 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 shadow-soft backdrop-blur-sm">
          <Code2 className="h-8 w-8 text-charcoal-400" strokeWidth={1.5} />
        </div>
        <p className="text-sm font-semibold text-charcoal-500">{title}</p>
        <p className="text-xs text-charcoal-400">Screenshot coming soon</p>
      </div>
    </div>
  );
}
