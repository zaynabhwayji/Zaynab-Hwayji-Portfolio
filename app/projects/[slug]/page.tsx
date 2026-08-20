import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Check,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectImagePlaceholder } from "@/components/ProjectImage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.shortTitle,
    description: project.description,
    openGraph: {
      title: `${project.shortTitle} | Zaynab Hwayji`,
      description: project.description,
    },
  };
}

const accentBadge: Record<string, (tech: string) => JSX.Element> = {
  lavender: (tech) => <span className="badge-lavender">{tech}</span>,
  blush: (tech) => <span className="badge-blush">{tech}</span>,
  sage: (tech) => <span className="badge-sage">{tech}</span>,
  rose: (tech) => <span className="badge-rose">{tech}</span>,
};

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const badge = accentBadge[project.accent] ?? accentBadge.lavender;

  return (
    <main className="pt-24 sm:pt-28">
      <div className="section-container py-12 sm:py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-500 transition-colors hover:text-lavender-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-8">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
            {project.featured ? "Featured Project" : "Project"}
          </span>
          <h1 className="mt-4 text-3xl font-bold text-charcoal-700 sm:text-4xl text-balance">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal-500">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Large screenshot / placeholder */}
        <div className="mt-10">
          <ProjectImagePlaceholder
            title={project.shortTitle}
            accent={project.accent}
            className="aspect-[16/9] w-full"
          />
        </div>

        {/* Technologies */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-charcoal-700">
            Technologies
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech}>{badge(tech)}</span>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Features */}
          <section className="card p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-charcoal-700">
              <Check className="h-5 w-5 text-sage-500" strokeWidth={2} />
              Features
            </h2>
            <ul className="mt-5 space-y-2.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-charcoal-500"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-300" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Development highlights */}
          <section className="card p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-charcoal-700">
              <Sparkles className="h-5 w-5 text-blush-500" strokeWidth={2} />
              Development Highlights
            </h2>
            <ul className="mt-5 space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-sm leading-relaxed text-charcoal-500"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* What I learned */}
        <section className="mt-8 card p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-charcoal-700">
            <Lightbulb className="h-5 w-5 text-lavender-500" strokeWidth={2} />
            What I Learned
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.learnings.map((learning) => (
              <li
                key={learning}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-500"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush-300" />
                {learning}
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom CTAs */}
        <div className="mt-12 flex flex-wrap gap-3 border-t border-cream-200 pt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          <Link href="/#projects" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </div>
      </div>
    </main>
  );
}
