"use client";

import { useLang } from "@/components/language-provider";

export function CesbeHub() {
  const { t } = useLang();
  const c = t.cesbeHub;

  return (
    <section id="cesbe-hub" className="section bg-surface">
      <div className="container-x">
        <p className="eyebrow">{c.eyebrow}</p>

        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          CESBE HUB
        </h2>

        <p className="mt-5 max-w-measure text-[1.05rem] leading-[1.75] text-muted">
          {c.lead.pre}
          <a
            href={c.owner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {c.owner.name}
          </a>
          {c.lead.mid}
          <strong className="font-semibold text-foreground">{c.lead.strong}</strong>
          {c.lead.post}
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background py-[7px] pl-2 pr-4 text-[13.5px] font-medium text-foreground">
            <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
              1º
            </span>
            {c.awardLabel}
          </span>
          <a
            href={c.presentedHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border bg-background px-4 py-[7px] text-[13.5px] font-medium text-foreground transition-colors hover:border-border-strong"
          >
            {c.presentedLabel}
            <span className="ml-1.5 text-faint" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-background p-5 sm:p-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              {c.resultsLabel}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {c.results.map((r) => (
                <div key={r} className="flex gap-3">
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] text-accent-foreground"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <p className="text-[13.5px] leading-[1.5] text-foreground">{r}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-7 border-t border-border" />

          {/* CI/CD — prática de engenharia, sem detalhe de sistema interno */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              {t.cicd.title}
            </h3>
            <p className="mt-2 max-w-measure text-[13.5px] leading-[1.6] text-muted">
              {t.cicd.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.cicd.tools.map((tool) => (
                <li key={tool} className="badge">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <hr className="my-7 border-t border-border" />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              {c.stackLabel}
            </span>
            <ul className="flex flex-wrap gap-2">
              {c.stack.map((tech) => (
                <li key={tech} className="badge">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
