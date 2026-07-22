"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { useLang } from "@/components/language-provider";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

export function Contact() {
  const { t } = useLang();
  const contact = t.contact;

  return (
    <section id="contato" className="section">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16">
          {/* Texto + ações */}
          <div className="max-w-measure">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              {contact.title}
            </h2>
            <p className="mt-5 text-[1.1rem] leading-[1.7] text-muted">{contact.lead}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn-primary" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <a
                className="btn-ghost"
                href={`https://wa.me/${phoneDigits}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-10 border-t border-border pt-6 text-[13.5px] text-faint">
              {t.footer.location}
            </p>
          </div>

          {/* Card LinkedIn on-brand */}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-5 rounded-xl border border-border bg-background p-6 shadow-soft transition-colors hover:border-border-strong sm:p-7"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/profile.png"
                alt="Fábio Henrique"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full border border-border object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-[15px] font-semibold">Fábio Henrique</p>
                <p className="truncate text-[13px] text-muted">{t.hero.role}</p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="#0A66C2"
                aria-hidden="true"
                className="ml-auto h-7 w-7 shrink-0"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-[13.5px] font-medium text-accent-foreground transition-opacity group-hover:opacity-85">
                {contact.linkedinCta}
                <span aria-hidden="true">↗</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
