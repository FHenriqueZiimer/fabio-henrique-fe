// Configuração central do site — ajuste o domínio quando publicar.
export const siteConfig = {
  name: "Fábio Henrique",
  role: "Engenheiro de Software · Arquiteto de Soluções",
  // Troque pelo seu domínio final (ex.: https://fabiohenrique.dev)
  url: "https://fabiohenrique.com.br",
  locale: "pt-BR",
  description:
    "Fábio Henrique — Engenheiro de Software e Arquiteto de Soluções com mais de 7 anos de experiência. Idealizador e desenvolvedor do CESBE HUB, plataforma corporativa com integração a ERP e automação inteligente com IA (AWS Textract e OpenAI). Especialista em Next.js, NestJS, Node.js, TypeScript e Cloud AWS.",
  email: "fabohenrique@live.com",
  phone: "+55 41 99960-2859",
  location: "Curitiba, Paraná, Brasil",
  linkedin: "https://www.linkedin.com/in/fabio-h-ferreira-zi",
  // Substitua o arquivo em public/ pelo seu currículo real (mesmo nome).
  resumeUrl: "/CV-FabioHenrique.pdf",
  keywords: [
    "Fábio Henrique",
    "Fabio Henrique Ferreira",
    "Engenheiro de Software",
    "Arquiteto de Soluções",
    "CESBE HUB",
    "CESBE Engenharia",
    "INBRASC",
    "IA em Compras e Suprimentos",
    "Desenvolvimento seguro",
    "Segurança de aplicações",
    "Aikido Security",
    "Next.js",
    "NestJS",
    "Node.js",
    "TypeScript",
    "React",
    "AWS",
    "Integração de sistemas",
    "Automação com IA",
    "AWS Textract",
    "OpenAI",
    "Desenvolvedor Full Stack",
    "Curitiba",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
