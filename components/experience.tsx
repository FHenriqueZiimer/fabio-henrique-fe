"use client";

import { useLang } from "@/components/language-provider";

export function Experience() {
  const { t } = useLang();
  const exp = t.experience;

  return (
    <section id="experiencia" className="section">
      <div className="container-x">
        <p className="eyebrow">{exp.eyebrow}</p>
        <h2 className="section-title">{exp.title}</h2>
        <p className="section-lead">{exp.lead}</p>

        <div className="mt-16">
          {exp.items.map(
            (job: {
              role: string;
              company: string;
              url?: string;
              type: string;
              period: string;
              location: string;
              description: string;
              stack: string[];
              featured?: boolean;
            }) => (
            <article
              key={`${job.company}-${job.period}`}
              className="grid grid-cols-1 gap-4 border-t border-border py-10 last:border-b md:grid-cols-[220px_1fr] md:gap-12"
            >
              <div className="flex flex-wrap items-center gap-2.5 md:flex-col md:items-start md:gap-1.5">
                <span className="text-sm font-medium">{job.period}</span>
                <span className="text-[13px] text-faint">{job.location}</span>
                {job.featured && (
                  <span className="rounded-full border border-border-strong px-2.5 py-0.5 text-[11.5px] font-medium text-muted">
                    {exp.currentTag}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-[1.3rem] font-semibold tracking-[-0.02em]">
                  {job.role}
                </h3>
                <p className="mt-1 text-[14.5px] font-medium text-muted">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      {job.company}
                      <span className="ml-1 text-faint" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    job.company
                  )}{" "}
                  · <span className="font-normal text-faint">{job.type}</span>
                </p>
                <p className="mt-4 text-[15px] leading-[1.7] text-muted">
                  {job.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <li key={s} className="badge">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
