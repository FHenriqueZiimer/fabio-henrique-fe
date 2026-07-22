"use client";

import { useRef } from "react";

type Module = {
  name: string;
  description: string;
  flow: string[];
  note?: string;
  impact?: string;
};

export function ModulesCarousel({
  modules,
  label,
  hint,
}: {
  modules: readonly Module[];
  label: string;
  hint: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(360, el.clientWidth * 0.85), behavior: "smooth" });
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
            {label}
          </h3>
          <p className="mt-1 text-[13px] text-muted">{hint}</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Módulo anterior"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Próximo módulo"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {modules.map((m, i) => (
          <article
            key={m.name}
            className="flex shrink-0 basis-[300px] snap-start flex-col rounded border border-border bg-surface p-6 sm:basis-[340px]"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                {i + 1}
              </span>
              <h4 className="text-[15px] font-semibold leading-tight tracking-[-0.01em]">
                {m.name}
              </h4>
            </div>

            <p className="mt-3 text-sm leading-[1.55] text-muted">{m.description}</p>

            <ol className="mt-4 flex flex-wrap gap-1.5">
              {m.flow.map((step, s) => (
                <li
                  key={step}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-[11.5px] leading-tight text-foreground"
                >
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent text-[9px] font-semibold text-accent-foreground">
                    {s + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-auto pt-4">
              {m.note && (
                <p className="text-[12.5px] italic text-faint">{m.note}</p>
              )}
              {m.impact && (
                <p className="mt-2 flex items-start gap-1.5 text-[12.5px] font-medium text-foreground">
                  <span className="text-accent" aria-hidden="true">↗</span>
                  {m.impact}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
