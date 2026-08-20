import { Award } from "lucide-react";
import { certifications } from "@/data/education";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="section-container">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
            Certifications
          </span>
          <h2 className="section-title mt-4">Certifications &amp; Workshops</h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-500">
            Continuous learning across web development, security, and AI.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.title} className="card card-hover p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blush-50 text-blush-500">
                <Award className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                {cert.date}
              </p>
              <h3 className="mt-1.5 text-base font-semibold leading-snug text-charcoal-700">
                {cert.title}
              </h3>
              <p className="mt-1.5 text-sm text-charcoal-500">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
