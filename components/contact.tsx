"use client";

import { siteConfig } from "@/lib/site";
import { useLang } from "@/components/language-provider";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

export function Contact() {
  const { t } = useLang();
  const contact = t.contact;

  return (
    <section id="contato" className="section">
      <div className="container-x">
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
            <a
              className="btn-ghost"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-10 border-t border-border pt-6 text-[13.5px] text-faint">
            {t.footer.location}
          </p>
        </div>
      </div>
    </section>
  );
}
