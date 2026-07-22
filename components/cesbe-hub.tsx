"use client";

import { ModulesCarousel } from "@/components/modules-carousel";
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
          <a
            href={c.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-[7px] text-[13.5px] font-medium text-accent-foreground transition-opacity hover:opacity-85"
          >
            {c.visitLabel}
            <span aria-hidden="true">↗</span>
          </a>
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
          <a
            href={t.security.aikido.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-[7px] text-[13.5px] font-medium text-foreground transition-colors hover:border-border-strong"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            {c.aikidoLabel}
            <span className="text-faint" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Painel único: agrupa todos os detalhes do mesmo projeto */}
        <div className="mt-8 rounded-xl border border-border bg-background p-5 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {c.highlights.map((h) => (
              <div key={h} className="flex gap-3">
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

          <hr className="my-7 border-t border-border" />

          <ModulesCarousel
            modules={c.modules}
            label={c.modulesLabel}
            hint={c.modulesHint}
          />

          <hr className="my-7 border-t border-border" />

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              {c.aiLabel}
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {c.ai.map(
                (a: { name: string; description: string; impact?: string }) => (
                  <article
                    key={a.name}
                    className="flex flex-col rounded border border-border bg-surface p-5"
                  >
                    <h4 className="text-[14.5px] font-semibold leading-tight tracking-[-0.01em]">
                      {a.name}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-muted">
                      {a.description}
                    </p>
                    {a.impact && (
                      <p className="mt-auto flex items-start gap-1.5 pt-3 text-[12.5px] font-medium text-foreground">
                        <span className="text-accent" aria-hidden="true">↗</span>
                        {a.impact}
                      </p>
                    )}
                  </article>
                )
              )}
            </div>
          </div>

          <hr className="my-7 border-t border-border" />

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                {c.crosscuttingLabel}
              </span>
              <ul className="flex flex-wrap gap-2">
                {c.crosscutting.map((item) => (
                  <li key={item} className="badge">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
      </div>
    </section>
  );
}
