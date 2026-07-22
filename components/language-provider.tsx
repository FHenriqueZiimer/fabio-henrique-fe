"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Locale } from "@/lib/content";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "pt" || stored === "en") setLocaleState(stored);
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: content[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang deve ser usado dentro de <LanguageProvider>");
  return ctx;
}
