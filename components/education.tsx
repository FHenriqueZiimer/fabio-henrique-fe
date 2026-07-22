"use client";

import { useLang } from "@/components/language-provider";

export function Education() {
  const { t } = useLang();
  const edu = t.education;

  return (
    <section id="formacao" className="section">
      <div className="container-x">
        <p className="eyebrow">{edu.eyebrow}</p>
        <h2 className="section-title">{edu.title}</h2>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-[1.5fr_1fr] md:gap-14">
          <div className="flex flex-col">
            {edu.items.map((ed) => (
              <article
                key={ed.school}
                className="border-t border-border py-8 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.01em]">
                    {ed.school}
                  </h3>
                  <span className="text-[13px] text-faint">{ed.period}</span>
                </div>
                <p className="mt-1.5 text-[14.5px] font-medium text-muted">{ed.degree}</p>
                <p className="mt-3.5 text-[14.5px] leading-[1.7] text-muted">
                  {ed.description}
                </p>
              </article>
            ))}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded border border-border bg-background p-7">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                {edu.certificationsLabel}
              </h3>
              <ul>
                {edu.certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between gap-3 border-t border-border py-4"
                  >
                    <div className="flex flex-col">
                      <strong className="text-[14.5px] font-medium">{cert.name}</strong>
                      <span className="text-[13px] text-faint">{cert.issuer}</span>
                    </div>
                    <span className="whitespace-nowrap text-[12.5px] text-muted">
                      {cert.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded border border-border bg-background p-7">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                {edu.languagesLabel}
              </h3>
              <ul>
                {edu.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between gap-3 border-t border-border py-4"
                  >
                    <strong className="text-[14.5px] font-medium">{lang.name}</strong>
                    <span className="whitespace-nowrap text-[12.5px] text-muted">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
