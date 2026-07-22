"use client";

import { siteConfig } from "@/lib/site";
import { useLang } from "@/components/language-provider";

export function Footer() {
  const { t } = useLang();
  const footer = t.footer;

  return (
    <footer className="border-t border-border pb-10 pt-16">
      <div className="container-x flex flex-wrap items-start justify-between gap-8 border-b border-border pb-10">
        <div>
          <a href="#conteudo" className="text-[15px] font-semibold tracking-[-0.01em]">
            Fábio Henrique
          </a>
          <p className="mt-2 text-[13.5px] text-faint">{footer.tagline}</p>
        </div>

        <nav className="flex flex-wrap items-center gap-6" aria-label="Rodapé">
          {[
            { href: "#cesbe-hub", label: footer.links.cesbe },
            { href: "#experiencia", label: footer.links.experience },
            { href: "#contato", label: footer.links.contact },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-medium text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] font-medium text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="container-x flex flex-wrap justify-between gap-3 pt-6 text-[12.5px] text-faint">
        <span>© {new Date().getFullYear()} Fábio Henrique</span>
        <span>{footer.location}</span>
      </div>
    </footer>
  );
}
