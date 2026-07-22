// Configuração central do site — ajuste o domínio quando publicar.
export const siteConfig = {
  name: "Fábio Henrique Ferreira",
  shortName: "Fábio Henrique",
  role: "Engenheiro de Software · Arquiteto de Soluções",
  // Troque pelo seu domínio final (ex.: https://fabiohenrique.dev)
  url: "https://fabiohenrique.com.br",
  locale: "pt-BR",
  description:
    "Fábio Henrique Ferreira — Engenheiro de Software e Arquiteto de Soluções com mais de 7 anos de experiência, especializado em sistemas escaláveis, integração de IA em produção e cloud (Next.js, NestJS, Node.js, TypeScript, AWS). Entre os projetos, idealizou e desenvolveu o CESBE HUB — plataforma corporativa com IA (assistente OpenAI/GPT e OCR de notas fiscais) integrada ao ERP Sapiens.",
  email: "fabohenrique@live.com",
  phone: "+55 41 99960-2859",
  location: "Curitiba, Paraná, Brasil",
  linkedin: "https://www.linkedin.com/in/fabio-h-ferreira-zi",
  // Substitua o arquivo em public/ pelo seu currículo real (mesmo nome).
  resumeUrl: "/CV-FabioHenrique.pdf",
  keywords: [
    // Pessoa (foco principal)
    "Fábio Henrique Ferreira",
    "Fabio Henrique Ferreira",
    "Fábio Henrique",
    "Fábio Henrique desenvolvedor",
    "Engenheiro de Software",
    "Arquiteto de Soluções",
    "desenvolvedor Full Stack",
    "desenvolvedor em Curitiba",
    "arquitetura de software escalável",
    "tomada de decisão técnica",
    "mentoria de desenvolvedores juniores",
    "code review",
    // Habilidades / IA (do profissional)
    "integração de IA em produção",
    "automação de processos com IA",
    "engenharia de software com IA",
    "assistente com OpenAI / GPT",
    "OCR de notas fiscais com IA",
    "integração com ERP",
    "testes automatizados (Jest, Cypress)",
    "desenvolvimento seguro",
    // Stack
    "Next.js",
    "NestJS",
    "Node.js",
    "TypeScript",
    "React",
    "AWS",
    "OpenAI",
    // Projeto principal
    "CESBE HUB",
    "CESBE Engenharia",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
