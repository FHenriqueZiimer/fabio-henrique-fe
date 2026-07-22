import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section bg-surface">
      <div className="container-x">
        <p className="eyebrow">Competências</p>
        <h2 className="section-title">Stack e áreas de atuação</h2>
        <p className="section-lead">
          Tecnologias e domínios que uso para construir produtos escaláveis, integrar
          sistemas corporativos e automatizar processos com IA.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-border pt-6">
              <h3 className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.08em] text-faint">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="badge">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
