import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experiencia" className="section bg-surface">
      <div className="container-x">
        <p className="eyebrow">Trajetória</p>
        <h2 className="section-title">Experiência profissional</h2>
        <p className="section-lead">
          Mais de 7 anos entregando software em saúde, fintech, edtech e engenharia.
        </p>

        <div className="mt-16">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="grid grid-cols-1 gap-4 border-t border-border py-10 last:border-b md:grid-cols-[220px_1fr] md:gap-12"
            >
              <div className="flex flex-wrap items-center gap-2.5 md:flex-col md:items-start md:gap-1.5">
                <span className="text-sm font-medium">{exp.period}</span>
                <span className="text-[13px] text-faint">{exp.location}</span>
                {exp.featured && (
                  <span className="rounded-full border border-border-strong px-2.5 py-0.5 text-[11.5px] font-medium text-muted">
                    Atual
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-[1.3rem] font-semibold tracking-[-0.02em]">
                  {exp.role}
                </h3>
                <p className="mt-1 text-[14.5px] font-medium text-muted">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      {exp.company}
                      <span className="ml-1 text-faint" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    exp.company
                  )}{" "}
                  · <span className="font-normal text-faint">{exp.type}</span>
                </p>
                <p className="mt-4 text-[15px] leading-[1.7] text-muted">
                  {exp.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <li key={s} className="badge">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
