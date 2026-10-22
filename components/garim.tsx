"use client";

import { useLang } from "@/components/language-provider";
import { siteConfig } from "@/lib/site";

export function Garim() {
  const { t } = useLang();
  const g = t.garim;

  return (
    <section id="garim" className="section bg-surface">
      <div className="container-x">
        <p className="eyebrow">{g.eyebrow}</p>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Garim
          </h2>
          <a
            href={siteConfig.garim}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
          >
            {g.domain}
          </a>
        </div>

        <p className="mt-5 max-w-measure text-[1.05rem] leading-[1.75] text-muted">
          {g.lead}
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <a
            href={siteConfig.garim}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-[7px] text-[13.5px] font-medium text-accent-foreground transition-opacity hover:opacity-85"
          >
            {g.visitLabel}
            <span aria-hidden="true">↗</span>
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-[7px] text-[13.5px] font-medium text-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {g.statusLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-[7px] text-[13px] font-medium text-muted">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
              aria-hidden="true"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            {g.pwaLabel}
          </span>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-background p-5 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {g.highlights.map((h) => (
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

          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                {g.ideaLabel}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-muted">{g.idea}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                {g.buildLabel}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-muted">{g.build}</p>
            </div>
          </div>

          <hr className="my-7 border-t border-border" />

          {/* Modelo da plataforma — vitrine direta */}
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              {g.modelLabel}
            </h3>
            <p className="mt-2 max-w-measure text-[13.5px] leading-[1.65] text-foreground">
              {g.model}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <a
                href={siteConfig.garim}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-[7px] text-[13.5px] font-medium text-accent-foreground transition-opacity hover:opacity-85"
              >
                {g.visitLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <hr className="my-7 border-t border-border" />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              {g.stackLabel}
            </span>
            <ul className="flex flex-wrap gap-2">
              {g.stack.map((tech) => (
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
