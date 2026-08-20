import { GraduationCap, MapPin, Award, CalendarDays } from "lucide-react";

const aboutTech = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
];

const infoCards = [
  {
    icon: GraduationCap,
    label: "Computer Science Graduate",
    value: "Beirut Arab University",
  },
  {
    icon: Award,
    label: "GPA",
    value: "3.45",
  },
  {
    icon: CalendarDays,
    label: "Graduated",
    value: "May 2025",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Beirut, Lebanon",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
            About
          </span>
          <h2 className="section-title mt-4">About Me</h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal-500">
            Computer Science graduate with hands-on experience developing
            full-stack and front-end web applications. I enjoy building clean,
            responsive, and user-friendly applications while continuously
            learning modern web technologies.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {aboutTech.map((tech) => (
            <span key={tech} className="badge-neutral">
              {tech}
            </span>
          ))}
        </div>

        {/* Info cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div key={label} className="card card-hover p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-50 text-lavender-500">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                {label}
              </p>
              <p className="mt-1 text-base font-semibold text-charcoal-700">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
