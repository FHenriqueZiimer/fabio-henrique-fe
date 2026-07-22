import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { LanguageProvider } from "@/components/language-provider";
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
    alternateLocale: ["en_US"],
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
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: ["Fábio Henrique", "Fabio Henrique Ferreira"],
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
      "Inteligência Artificial aplicada",
      "Integração de IA em produção",
      "Assistentes com LLM (OpenAI / GPT)",
      "OCR e extração de dados de notas fiscais com IA",
      "Automação de compras e suprimentos com IA",
      "Integração com ERP Sapiens",
      "Arquitetura de Soluções",
      "Next.js",
      "NestJS",
      "Node.js",
      "TypeScript",
      "React",
      "AWS",
      "AWS Textract",
      "OpenAI",
    ],
    worksFor: {
      "@type": "Organization",
      name: "CESBE Engenharia",
      url: "https://cesbeengenharia.com.br/",
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
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/#cesbe-hub`,
    name: "CESBE HUB",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://cesbehub.com.br/",
    creator: { "@id": `${siteConfig.url}/#person` },
    author: { "@id": `${siteConfig.url}/#person` },
    publisher: {
      "@type": "Organization",
      name: "CESBE Engenharia",
      url: "https://cesbeengenharia.com.br/",
    },
    description:
      "Plataforma corporativa interna da CESBE Engenharia, idealizada e desenvolvida por Fábio Henrique Ferreira. Usa inteligência artificial — assistente com OpenAI/GPT que lê PDFs e anexos, OCR e extração de dados de notas fiscais, e detecção de duplicidade por similaridade — integrada ao ERP Sapiens para automatizar compras, suprimentos, contratos e documentos fiscais.",
    featureList: [
      "Assistente de IA (OpenAI/GPT) que lê PDFs e anexos, inclusive escaneados",
      "OCR e extração estruturada de dados de notas fiscais com IA",
      "Detecção de duplicidade de cadastros por similaridade com IA",
      "Automação de suprimentos e requisições de compra",
      "Integração em tempo real com o ERP Sapiens via SOAP",
      "Gestão de contratos, fornecedores e documentos fiscais",
    ],
    keywords:
      "CESBE HUB, inteligência artificial, IA em compras e suprimentos, assistente com OpenAI GPT, OCR de notas fiscais com IA, detecção de duplicidade com IA, automação de suprimentos, integração ERP Sapiens, Next.js, NestJS",
    award: "1º lugar — Premiação Semana da Qualidade 2025",
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} — Portfólio`,
    inLanguage: ["pt-BR", "en"],
    about: { "@id": `${siteConfig.url}/#person` },
    author: { "@id": `${siteConfig.url}/#person` },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
