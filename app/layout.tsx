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
    // A imagem vem de app/opengraph-image.png (convenção de arquivo do Next).
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    // O Next preenche twitter:image com o app/opengraph-image.png.
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
  verification: {
    google: siteConfig.googleSiteVerification,
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
    sameAs: [siteConfig.linkedin, siteConfig.fros],
    knowsAbout: [
      "Fros — SaaS multi-tenant de gestão de projetos com IA",
      "CESBE HUB",
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

  const frosLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/#fros`,
    name: "Fros",
    alternateName: ["fros.app", "Fros SaaS"],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteConfig.fros,
    creator: { "@id": `${siteConfig.url}/#person` },
    author: { "@id": `${siteConfig.url}/#person` },
    description:
      "Fros é um SaaS multi-tenant idealizado, arquitetado e desenvolvido por Fábio Henrique Ferreira. Reúne portal do cliente (Fros Bridge), roadmap público, quadro Scrum/Kanban com SLA e a assistente de IA Lyra, que faz triagem, rascunha cards e estima prazos.",
    featureList: [
      "Portal do cliente (Fros Bridge): registrar, votar e comentar pedidos",
      "Quadro Scrum/Kanban com SLA por prioridade e por empresa cliente",
      "Lyra (IA): triagem automática, rascunho de cards e estimativa de prazos",
      "Multi-tenant por banco — isolamento real entre clientes",
      "Anexos em S3 privado com upload direto por URLs assinadas",
      "Colunas, tipos de item e campos configuráveis por projeto",
    ],
    keywords:
      "Fros, fros.app, SaaS de gestão de projetos, portal do cliente, roadmap público, Scrum, Kanban, SLA, assistente de IA Lyra, multi-tenant, Next.js, NestJS, MongoDB",
    offers: {
      "@type": "Offer",
      category: "SaaS",
      priceCurrency: "BRL",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(frosLd) }}
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
