import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="py-[100px] pt-[120px]" aria-labelledby="hero-title">
      <div className="container-x grid items-center gap-14 md:grid-cols-[1.4fr_0.6fr] md:gap-[72px]">
        <div className="max-w-[620px]">
          <p className="eyebrow">Engenheiro de Software · Arquiteto de Soluções</p>

          <h1
            id="hero-title"
            className="mt-1.5 text-[clamp(2.75rem,6.5vw,4.5rem)] font-semibold leading-none tracking-tightest"
          >
            Fábio Henrique
          </h1>

          <p className="mt-7 text-[1.15rem] leading-[1.7] text-muted">
            Mais de 7 anos construindo sistemas escaláveis, integrações corporativas e
            automação com IA — em saúde, fintech, edtech e engenharia. Foco em código
            limpo, arquitetura e impacto real no negócio.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={siteConfig.resumeUrl} download className="btn-primary">
              Baixar currículo
            </a>
            <a href="#contato" className="btn-ghost">
              Entrar em contato
            </a>
          </div>

          <p className="mt-10 border-t border-border pt-6 text-[13.5px] text-faint">
            Curitiba, PR &nbsp;·&nbsp;
            Next.js · NestJS · AWS · Typescript · Docker · CI/CD
          </p>
        </div>

        <div className="justify-self-start md:justify-self-end">
          <div className="w-[min(300px,70vw)] overflow-hidden rounded border border-border shadow-soft md:w-[300px]">
            <Image
              src="/profile.png"
              alt="Fábio Henrique — Engenheiro de Software"
              width={340}
              height={340}
              priority
              className="aspect-square h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
