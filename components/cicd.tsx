import { cicd } from "@/lib/data";

export function Cicd() {
  return (
    <section id="cicd" className="section bg-surface">
      <div className="container-x">
        <p className="eyebrow">Engenharia · DevOps</p>
        <h2 className="section-title">CI/CD &amp; Deploy</h2>
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
          {cicd.tools.map((t) => (
            <li key={t} className="badge">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
