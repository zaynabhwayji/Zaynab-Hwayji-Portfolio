import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-cream-100/50">
      <div className="section-container">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
            Education
          </span>
          <h2 className="section-title mt-4">Education</h2>
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-cream-200 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex sm:items-center ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-6 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-lavender-200 bg-white shadow-soft">
                    <GraduationCap
                      className="h-4 w-4 text-lavender-500"
                      strokeWidth={1.75}
                    />
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
  );
}
