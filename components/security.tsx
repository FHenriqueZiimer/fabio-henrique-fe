import { security } from "@/lib/data";

export function Security() {
  return (
    <section id="seguranca" className="section">
      <div className="container-x">
        <p className="eyebrow">Segurança</p>
        <h2 className="section-title">Desenvolvimento seguro</h2>
        <p className="section-lead">{security.lead}</p>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
          {security.practices.map((p) => (
            <article key={p.title} className="bg-background p-7">
              <h3 className="text-base font-semibold tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-muted">{p.description}</p>
            </article>
          ))}
        </div>

        <a
          href={security.aikido.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded border border-border bg-surface p-6 transition-colors hover:border-border-strong"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <span className="flex-1 min-w-[200px]">
            <span className="block text-[15px] font-semibold">
              {security.aikido.label}
            </span>
            <span className="mt-0.5 block text-sm leading-[1.6] text-muted">
              {security.aikido.detail}
            </span>
          </span>
          <span className="text-[13px] font-medium text-faint">
            {security.aikido.hrefLabel} ↗
          </span>
        </a>
      </div>
    </section>
  );
}
