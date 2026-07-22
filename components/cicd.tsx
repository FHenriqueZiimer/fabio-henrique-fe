"use client";

import { useLang } from "@/components/language-provider";

export function Cicd() {
  const { t } = useLang();
  const cicd = t.cicd;

  return (
    <section id="cicd" className="section bg-surface">
      <div className="container-x">
        <p className="eyebrow">{cicd.eyebrow}</p>
        <h2 className="section-title">{cicd.title}</h2>
        <p className="section-lead">{cicd.summary}</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {cicd.highlights.map((h) => (
            <div
              key={h}
              className="flex gap-3 rounded border border-border bg-background p-5"
            >
              <span
                className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] text-accent-foreground"
                aria-hidden="true"
              >
                ✓
              </span>
              <p className="text-[13.5px] leading-[1.5] text-foreground">{h}</p>
            </div>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {cicd.tools.map((tool) => (
            <li key={tool} className="badge">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
