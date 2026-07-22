"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#conteudo" className="text-[15px] font-semibold tracking-[-0.01em]">
          Fábio Henrique
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={siteConfig.resumeUrl}
            download
            className="hidden text-[13.5px] font-medium text-muted transition-colors hover:text-foreground md:inline-flex"
          >
            Currículo
          </a>
          <a
            href="#contato"
            className="hidden rounded-lg bg-accent px-4 py-2 text-[13.5px] font-medium text-accent-foreground transition-opacity hover:opacity-85 md:inline-flex"
          >
            Contato
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-[9px] border border-border md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className={`h-[1.5px] w-[17px] bg-foreground transition-transform ${
                  open ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-[17px] bg-foreground transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-[17px] bg-foreground transition-transform ${
                  open ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="flex flex-col border-b border-border bg-background px-[22px] pb-4 pt-1 md:hidden"
          aria-label="Navegação mobile"
        >
          {[...links, { href: "#contato", label: "Contato" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-border py-[13px] text-[15px] font-medium last:border-none"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            download
            className="py-[13px] text-[15px] font-medium"
            onClick={() => setOpen(false)}
          >
            Baixar currículo
          </a>
        </nav>
      )}
    </header>
  );
}
