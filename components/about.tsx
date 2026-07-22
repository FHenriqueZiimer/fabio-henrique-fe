"use client";

import { useLang } from "@/components/language-provider";

export function About() {
  const { t } = useLang();
  const about = t.about;

  return (
    <section id="sobre" className="section">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="section-title max-w-[18ch] font-medium">{about.headline}</h2>
          </div>

          <div className="flex flex-col gap-[18px]">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[1.05rem] leading-[1.75] text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>

        <dl className="mt-[72px] grid grid-cols-1 border-t border-border sm:grid-cols-3">
          {about.stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-t border-border py-6 sm:border-t-0 sm:pt-8 ${
                i > 0 ? "sm:border-l sm:border-border sm:pl-8" : ""
              }`}
            >
              <dt className="text-[2.25rem] font-medium leading-none tracking-[-0.03em]">
                {s.value}
              </dt>
              <dd className="mt-2.5 text-[13.5px] leading-[1.45] text-muted">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
