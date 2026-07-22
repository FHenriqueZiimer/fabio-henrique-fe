import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: `Portfólio · ${siteConfig.name}`,
  category: "technology",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: `${siteConfig.name} — Portfólio`,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: "Fábio Henrique Ferreira",
    jobTitle: "Engenheiro de Software · Arquiteto de Soluções",
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/profile.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    sameAs: [siteConfig.linkedin],
    knowsAbout: [
      "Next.js",
      "NestJS",
      "Node.js",
      "TypeScript",
      "React",
      "Arquitetura de Soluções",
      "Integração com ERP",
      "AWS",
      "Automação com Inteligência Artificial",
      "AWS Textract",
      "OpenAI",
    ],
    worksFor: {
      "@type": "Organization",
      name: "CESBE Engenharia",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "PUC Minas" },
      { "@type": "EducationalOrganization", name: "Senac São Paulo" },
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "MCP Advanced — Anthropic" },
      { "@type": "EducationalOccupationalCredential", name: "Advanced React — Meta" },
    ],
  };

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "CESBE HUB",
    creator: { "@type": "Person", name: siteConfig.name },
    author: { "@type": "Person", name: siteConfig.name },
    description:
      "Plataforma corporativa interna do Grupo CESBE Engenharia, idealizada e desenvolvida por Fábio Henrique. Centraliza e automatiza compras, suprimentos, fornecedores, contratos e notas fiscais, com integração ao ERP Sapiens e automação inteligente com IA (AWS Textract e OpenAI).",
    keywords:
      "CESBE HUB, plataforma corporativa, integração ERP, Sapiens, automação com IA, AWS Textract, OpenAI, Next.js, NestJS",
    about: "Plataforma corporativa de gestão de compras, suprimentos e contratos com IA",
    award: "1º lugar — Premiação Semana da Qualidade 2025",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
