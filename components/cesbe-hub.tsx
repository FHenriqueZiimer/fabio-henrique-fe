import { cesbeHub, security } from "@/lib/data";
import { ModulesCarousel } from "@/components/modules-carousel";

export function CesbeHub() {
  return (
    <section id="cesbe-hub" className="section bg-surface">
      <div className="container-x">
        <p className="eyebrow">Projeto em destaque</p>

        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          CESBE HUB
        </h2>

        <p className="mt-5 max-w-measure text-[1.05rem] leading-[1.75] text-muted">
          Plataforma corporativa interna da{" "}
          <a
            href={cesbeHub.owner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {cesbeHub.owner.name}
          </a>{" "}
          que{" "}
          <strong className="font-semibold text-foreground">
            idealizei, arquitetei e desenvolvi
          </strong>
          . Centraliza compras, suprimentos, fornecedores, contratos e documentos
          fiscais, integra-se ao ERP Sapiens e usa IA para acelerar decisões — reduzindo
          retrabalho e aumentando a rastreabilidade.
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <a
            href={cesbeHub.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-[7px] text-[13.5px] font-medium text-accent-foreground transition-opacity hover:opacity-85"
          >
            Visitar cesbehub.com.br
            <span aria-hidden="true">↗</span>
          </a>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background py-[7px] pl-2 pr-4 text-[13.5px] font-medium text-foreground">
            <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
              1º
            </span>
            Semana da Qualidade 2025
          </span>
          <a
            href={cesbeHub.presentedAt.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border bg-background px-4 py-[7px] text-[13.5px] font-medium text-foreground transition-colors hover:border-border-strong"
          >
            Apresentado no INBRASC
            <span className="ml-1.5 text-faint" aria-hidden="true">↗</span>
          </a>
          <a
            href={security.aikido.href}
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
            Avaliado pela Aikido
            <span className="text-faint" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Painel único: agrupa todos os detalhes do mesmo projeto */}
        <div className="mt-8 rounded-xl border border-border bg-background p-5 sm:p-8">
          {/* Destaques */}
          <div className="grid gap-3 sm:grid-cols-3">
            {cesbeHub.highlights.map((h) => (
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

          {/* Módulos */}
          <ModulesCarousel modules={cesbeHub.modules} />

          <hr className="my-7 border-t border-border" />

          {/* IA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              IA aplicada
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {cesbeHub.ai.map(
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

          {/* Transversais + Stack */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                Transversais
              </span>
              <ul className="flex flex-wrap gap-2">
                {cesbeHub.crosscutting.map((c) => (
                  <li key={c} className="badge">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                Stack
              </span>
              <ul className="flex flex-wrap gap-2">
                {cesbeHub.stack.map((t) => (
                  <li key={t} className="badge">
                    {t}
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
