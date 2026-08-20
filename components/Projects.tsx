"use client";

import { motion } from "framer-motion";
import { featuredProjects, moreProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            Projects
          </span>
          <h2 className="section-title mt-4">Featured Projects</h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-500">
            A selection of full-stack and front-end applications I&apos;ve
            built, with a focus on clean architecture and thoughtful user
            experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-charcoal-700">
            More Projects
          </h3>
          <p className="mt-2 text-charcoal-500">
            Additional applications exploring different tools and patterns.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
