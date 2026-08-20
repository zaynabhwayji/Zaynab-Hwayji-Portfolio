import { Globe } from "lucide-react";
import { languages } from "@/data/education";

export default function Languages() {
  return (
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
  );
}
