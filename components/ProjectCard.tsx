import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImagePlaceholder } from "./ProjectImage";

const accentBadge: Record<string, (tech: string) => JSX.Element> = {
  lavender: (tech) => <span className="badge-lavender">{tech}</span>,
  blush: (tech) => <span className="badge-blush">{tech}</span>,
  sage: (tech) => <span className="badge-sage">{tech}</span>,
  rose: (tech) => <span className="badge-rose">{tech}</span>,
};

export default function ProjectCard({ project }: { project: Project }) {
  const badge = accentBadge[project.accent] ?? accentBadge.lavender;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-soft transition-all duration-300 hover:shadow-card hover:border-lavender-200 hover:-translate-y-1">
      <Link
        href={`/projects/${project.slug}`}
        className="block"
        aria-label={`View details for ${project.shortTitle}`}
      >
        <ProjectImagePlaceholder
          title={project.shortTitle}
          accent={project.accent}
          className="aspect-[16/10] w-full"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-charcoal-700">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-lavender-500"
          >
            {project.shortTitle}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-charcoal-500">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech}>{badge(tech)}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="badge-neutral">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="btn-ghost text-sm"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.shortTitle} on GitHub`}
            className="btn-secondary text-sm"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.shortTitle} live demo`}
              className="btn-primary text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
