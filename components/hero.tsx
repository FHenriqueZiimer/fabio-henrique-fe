"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { useLang } from "@/components/language-provider";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="py-[100px] pt-[120px]" aria-labelledby="hero-title">
      <div className="container-x grid items-center gap-14 md:grid-cols-[1.4fr_0.6fr] md:gap-[72px]">
        <div className="max-w-[620px]">
          <p className="eyebrow">{t.hero.role}</p>

          <h1
            id="hero-title"
            className="mt-1.5 text-[clamp(2.75rem,6.5vw,4.5rem)] font-semibold leading-none tracking-tightest"
          >
            Fábio Henrique
          </h1>

          <p className="mt-7 text-[1.15rem] leading-[1.7] text-muted">{t.hero.lead}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={siteConfig.resumeUrl} download className="btn-primary">
              {t.hero.downloadCv}
            </a>
            <a href="#contato" className="btn-ghost">
              {t.hero.contact}
            </a>
          </div>

          <p className="mt-10 border-t border-border pt-6 text-[13.5px] text-faint">
            {t.hero.meta}
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
