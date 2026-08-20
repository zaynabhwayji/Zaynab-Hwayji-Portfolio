import { GraduationCap, Award, BookOpen, Globe } from "lucide-react";
import { education, certifications, languages } from "@/data/education";

export default function EducationCertifications() {
  return (
    <>
      {/* Education */}
      <section id="education" className="section-padding bg-cream-100/50">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
              Education
            </span>
            <h2 className="section-title mt-4">Education</h2>
          </div>

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-cream-200 sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className={`relative flex sm:items-center ${
                    index % 2 === 0
                      ? "sm:justify-start"
                      : "sm:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-6 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-lavender-200 bg-white shadow-soft">
                      <GraduationCap className="h-4 w-4 text-lavender-500" strokeWidth={1.75} />
                    </span>
                  </div>

                  <div
                    className={`ml-14 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                      index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                    }`}
                  >
                    <div className="card card-hover p-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lavender-500">
                        {item.date}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-charcoal-700">
                        {item.degree}
                      </h3>
                      {item.institution && (
                        <p className="mt-1 text-sm text-charcoal-500">
                          {item.institution}
                        </p>
                      )}
                      <p className="mt-2 text-sm font-medium text-charcoal-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
              Certifications
            </span>
            <h2 className="section-title mt-4">Certifications & Workshops</h2>
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
                <p className="mt-1.5 text-sm text-charcoal-500">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="section-padding bg-cream-100/50">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
              Languages
            </span>
            <h2 className="section-title mt-4">Languages</h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {languages.map((lang) => (
              <div key={lang.name} className="card card-hover p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-500">
                  <Globe className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal-700">
                  {lang.name}
                </h3>
                <p className="mt-1 text-sm text-charcoal-500">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
