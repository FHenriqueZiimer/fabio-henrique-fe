"use client";

import { useLang } from "@/components/language-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLang();

  return (
    <div
      className="inline-flex items-center rounded-lg border border-border p-0.5 text-[12px] font-semibold"
      role="group"
      aria-label="Idioma / Language"
    >
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-md px-2 py-1 uppercase transition-colors ${
            locale === l
              ? "bg-accent text-accent-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
