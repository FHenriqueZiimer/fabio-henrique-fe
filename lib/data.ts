// Conteúdo do portfólio — edite aqui para atualizar textos, experiências etc.

export const about = {
  headline:
    "Engenheiro de Software com mais de 7 anos construindo sistemas escaláveis, integrações corporativas e automação inteligente com IA.",
  paragraphs: [
    "Engenheiro de Software com mais de 7 anos de experiência no desenvolvimento de soluções digitais em empresas de diferentes portes e segmentos — saúde, fintech, edtech e engenharia. Atuei em ambientes dinâmicos e de alta responsabilidade, desenvolvendo sistemas escaláveis e participando ativamente de decisões arquiteturais.",
    "Tenho sólida atuação Full Stack, com JavaScript e TypeScript como principais tecnologias, construindo aplicações modernas, APIs robustas e integrações entre sistemas. Experiência com React, Next.js, Node.js, NestJS, Vue.js, MySQL e MongoDB.",
    "Nos últimos anos, ampliei minha atuação para arquitetura de soluções, integrações com sistemas corporativos, cloud (AWS) e automação inteligente de processos com uso de IA — sempre com foco em eficiência operacional, escalabilidade e geração de valor para o negócio.",
  ],
  stats: [
    { value: "7+", label: "anos de experiência" },
    { value: "1º", label: "lugar · Semana da Qualidade 2025" },
    { value: "5+", label: "segmentos de mercado" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "React Native", "Vue.js", "Material UI", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["NestJS", "Node.js", "TypeScript", "APIs REST", "TypeORM", "PHP"],
  },
  {
    title: "Dados & Cloud",
    items: ["AWS", "MongoDB", "MySQL", "PostgreSQL", "Docker", "AWS Textract"],
  },
  {
    title: "Arquitetura & IA",
    items: [
      "Arquitetura de Soluções",
      "Microsserviços",
      "Integração com ERP",
      "OpenAI",
      "Automação de processos",
      "CI/CD",
    ],
  },
];

export const cesbeHub = {
  site: "https://cesbehub.com.br/",
  owner: { name: "CESBE Engenharia", url: "https://cesbeengenharia.com.br/" },
  eyebrow: "Projeto em destaque · Idealizado e desenvolvido por mim",
  title: "CESBE HUB",
  subtitle:
    "Plataforma corporativa interna que centraliza e automatiza os processos críticos do Grupo CESBE Engenharia, com integração ao ERP e inteligência artificial.",
  intro:
    "Eu idealizei, arquitetei e desenvolvi o CESBE HUB do zero. A plataforma conecta setores críticos da organização — compras, suprimentos, fornecedores, contratos e notas fiscais — reduzindo custos, eliminando retrabalho e aumentando a confiabilidade e a rastreabilidade dos processos. O sistema se integra em tempo real ao ERP Sapiens, consolidando dados e trazendo agilidade operacional.",
  award:
    "🥇 1º lugar na Premiação Semana da Qualidade 2025 — reconhecimento conquistado com menos de um ano de desenvolvimento da plataforma.",
  presentedAt: {
    label: "Apresentado no INBRASC",
    detail:
      "O CESBE HUB foi apresentado no INBRASC — evento de referência em Compras e Suprimentos — como caso de aplicação de inteligência artificial na gestão de suprimentos.",
    href: "https://inbrasc.liveuniversity.com",
    hrefLabel: "inbrasc.liveuniversity.com",
  },
  responsibilities: [
    "Definição da arquitetura e da stack tecnológica",
    "Modelagem de dados e estruturação de APIs REST",
    "Integração com sistemas internos e externos (ERP Sapiens)",
    "Infraestrutura e deploy em ambiente AWS",
    "Evolução contínua e sustentação da plataforma",
  ],
  features: [
    {
      title: "Automação de Suprimentos com IA",
      description:
        "Algoritmos de IA apoiam decisões de compras, priorizam demandas e automatizam fluxos de aprovação.",
    },
    {
      title: "Gestão de Contratos e Fornecedores",
      description:
        "Cadastro centralizado de fornecedores, acompanhamento de contratos vigentes e controle de documentação.",
    },
    {
      title: "Controle Financeiro",
      description:
        "Otimização das requisições de compra, acompanhamento de pedidos e lançamento de notas fiscais.",
    },
    {
      title: "Integração Sistêmica (ERP Sapiens)",
      description:
        "Sincronização em tempo real com o ERP corporativo, garantindo rastreabilidade total das operações.",
    },
  ],
  aiResearch: {
    title: "Pesquisa e automação inteligente com IA",
    description:
      "Projetei e implementei automações de IA para extração e interpretação de dados de notas fiscais em PDF, combinando AWS Textract (OCR) e OpenAI para estruturar e validar as informações. O resultado reduziu drasticamente o trabalho manual e aumentou a confiabilidade dos dados lançados no ERP.",
    bullets: [
      "Extração de dados de NF-e em PDF com AWS Textract",
      "Interpretação e estruturação semântica com OpenAI",
      "Validação automática e redução de erros de digitação",
      "Menos trabalho manual, mais rastreabilidade e velocidade",
    ],
  },
  modules: [
    {
      name: "Cadastro de Materiais e Serviços",
      description: "Padroniza e cria itens diretamente no ERP.",
      flow: [
        "Solicitante abre o pedido",
        "Busca de duplicidade em tempo real (matching por similaridade)",
        "Catalogador padroniza (família / descrição PDM)",
        "Validação técnica",
        "Validação fiscal",
        "Ativação automática no Sapiens (ou vínculo a código existente)",
      ],
      note: "SLA por etapa e histórico completo de tudo.",
      impact: "Menos cadastros duplicados [%] e rastreabilidade total do ciclo.",
    },
    {
      name: "Portal de Requisições de Compra",
      description: "Gerencia requisições e todo o fluxo de aprovação.",
      flow: [
        "Requisitante cria a requisição",
        "Aprovação multinível",
        "Pedido de esclarecimento opcional (pausa o SLA)",
        "Geração e acompanhamento da Ordem de Compra no Sapiens",
        "Cancelamento de itens com regras",
      ],
      impact: "Aprovação mais rápida [tempo] e menos erros de integração com o ERP.",
    },
    {
      name: "Portal Jurídico",
      description: "Solicitação e acompanhamento de contratos.",
      flow: [
        "Área solicita o contrato",
        "Triagem e esclarecimento",
        "Geração de minuta a partir de modelos .docx",
        "Acompanhamento de status até a conclusão",
      ],
      impact: "Padronização de contratos e agilidade na criação de minutas [tempo].",
    },
    {
      name: "Portal Notas+ (Notas Fiscais, Recibos e Boletos)",
      description: "Recebe e aprova documentos fiscais.",
      flow: [
        "Documento chega e é lido automaticamente (OCR + extração de campos)",
        "Múltiplos aprovadores decidem (aprovar / divergência / reprovar)",
        "Aprovação de “fora do prazo” quando aplicável",
        "Lançamento no ERP",
      ],
      note: "Timeline, chat por documento e trilha de auditoria.",
      impact: "Menos digitação e erros de lançamento [%].",
    },
    {
      name: "Portal do Fornecedor / Parceiro",
      description: "Onboarding e acesso externo seguro.",
      flow: [
        "Fornecedor se cadastra (CNPJ / CPF)",
        "Aprovação por grupos conforme faixa de score",
        "Acesso via login com 2FA (código por e-mail + app autenticador)",
      ],
      impact: "Entrada de fornecedores padronizada e segura.",
    },
  ],

  ai: [
    {
      name: "Assistente conversacional (LLM · OpenAI)",
      description:
        "Integrado ao portal, responde perguntas e apoia o usuário lendo anexos e PDFs — inclusive escaneados — extraindo e interpretando o conteúdo.",
      impact: "Reduz busca manual e acelera a tomada de decisão [tempo].",
    },
    {
      name: "Leitura inteligente de documentos fiscais (OCR + extração estruturada)",
      description:
        "Ao subir NF / boleto / recibo, extrai automaticamente emitente, CNPJ, datas, valores e vencimento, pré-preenchendo o formulário e sinalizando divergências.",
      impact: "Menos digitação e erros de lançamento [%].",
    },
    {
      name: "Detecção de duplicidade por similaridade",
      description:
        "Na abertura de cadastro, cruza a descrição com a base do Hub e do ERP e ranqueia candidatos por score de similaridade.",
      impact: "Menos itens duplicados no ERP [%].",
    },
    {
      name: "Engenharia de integração de IA em produção",
      description:
        "Chamadas resilientes à API de IA (timeout/erro, processamento de anexos e PDF), com atenção a custo, latência e confiabilidade.",
    },
  ],

  crosscutting: [
    "Notificações em tempo real",
    "Assistente de IA",
    "Permissões por perfil e grupo",
    "Integração SOAP resiliente com o ERP legado",
  ],

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "MUI",
    "NestJS",
    "MongoDB",
    "TypeORM",
    "NextAuth (Azure AD + 2FA)",
    "SOAP · Sapiens",
    "AWS (S3/SQS/Lambda)",
    "OpenAI",
  ],

  highlights: [
    "IA em produção: assistente GPT que lê PDFs/anexos e OCR que extrai dados de documentos fiscais.",
    "Integração ponta a ponta com ERP legado (Sapiens/Senior) via SOAP resiliente.",
    "Rastreabilidade e SLA multifásico em todos os fluxos críticos.",
  ],
};

export const security = {
  lead: "Trato segurança como parte do desenvolvimento — do design à produção, não como etapa final.",
  practices: [
    {
      title: "Secure by design",
      description:
        "Validação de entrada, autenticação e autorização aplicadas por padrão em cada fluxo.",
    },
    {
      title: "Gestão de segredos",
      description:
        "Credenciais e chaves em variáveis de ambiente e cofres — nunca no código-fonte.",
    },
    {
      title: "Análise contínua (SAST/SCA)",
      description:
        "Código e dependências monitorados continuamente em busca de vulnerabilidades.",
    },
    {
      title: "Menor privilégio",
      description:
        "Acessos mínimos necessários, revisão de código e dados em trânsito criptografados (TLS).",
    },
  ],
  aikido: {
    label: "Avaliado pela Aikido Security",
    detail:
      "O CESBE HUB passa por análise contínua de segurança com a Aikido — cobrindo SAST, dependências (SCA), secrets e infraestrutura — garantindo uma base segura e monitorada.",
    href: "https://www.aikido.dev/",
    hrefLabel: "aikido.dev",
  },
};

export const cicd = {
  summary:
    "No CESBE HUB, construí pipelines de CI/CD com ambientes isolados (HML/PRD), deploy dockerizado e checagem de qualidade automática antes do merge.",
  highlights: [
    "Deploy contínuo na Vercel, com preview por PR",
    "GitHub Actions + Docker + deploy remoto via AWS SSM",
    "Qualidade automatizada com Husky, ESLint e Jest",
  ],
  tools: [
    "Vercel",
    "GitHub Actions",
    "Docker",
    "AWS SSM",
    "Husky",
    "ESLint",
    "Jest",
    "Capacitor",
  ],
};

export type Experience = {
  role: string;
  company: string;
  url?: string;
  type: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Engenheiro de Software",
    company: "CESBE Engenharia",
    url: "https://cesbeengenharia.com.br/",
    type: "Tempo integral",
    period: "dez 2024 — atual",
    location: "Curitiba, PR · Híbrido",
    description:
      "Responsável técnico pelo desenvolvimento e evolução de sistemas internos estratégicos, liderando concepção, arquitetura e implementação. Idealizador e responsável pelo CESBE HUB, plataforma que centraliza e integra processos críticos (fornecedores, notas fiscais, requisições de compra e contratos) com integração ao ERP Sapiens. Também implementei automações com IA para extração de dados de notas fiscais usando AWS Textract e OpenAI.",
    stack: ["Next.js", "NestJS", "TypeORM", "MongoDB", "React", "Material UI", "AWS", "OpenAI"],
    featured: true,
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "CLAMED Farmácias",
    url: "https://www.clamed.com.br/",
    type: "Tempo integral",
    period: "dez 2023 — dez 2024",
    location: "Remoto",
    description:
      "Na equipe de produtos digitais, desenvolvi soluções para o backoffice e para os canais de venda (e-commerce e tele-entrega), além de apoiar colegas juniores. Principais entregas: link de pagamento, implementação de ESLint, testes automatizados, telas de cadastro e alteração de produtos e cadastro de lojas filiais.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Sybase"],
  },
  {
    role: "Desenvolvedor Mobile",
    company: "Instavagas",
    type: "Freelance",
    period: "mar 2024 — mai 2024",
    location: "Curitiba · Remoto",
    description:
      "App para encontrar vagas freelancers de forma rápida. Desenvolvi a nova tela de cadastro de vaga em React Native e implementei anúncios com Google Ads.",
    stack: ["React Native", "TypeScript", "Google Ads"],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Chaves na Mão",
    url: "https://www.chavesnamao.com.br/",
    type: "Tempo integral",
    period: "mai 2023 — dez 2023",
    location: "Curitiba, PR · Presencial",
    description:
      "Atuação Full Stack com PHP, TypeScript, Next.js e NestJS. Contribuí em telas de consulta de anúncios cancelados em PHP e na nova versão do site de anúncios de imóveis e carros em Next.js.",
    stack: ["Next.js", "NestJS", "PHP", "TypeScript"],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Beedoo AI_Learning",
    url: "https://beedoo.com.br/",
    type: "Tempo integral",
    period: "jan 2021 — mai 2023",
    location: "Remoto",
    description:
      "Plataforma corporativa de educação e engajamento de colaboradores, com módulos de Cursos, Feed de Notícias, Wiki, Chatbot e outros. Resolvi bugs complexos, refatorei componentes legados melhorando performance e escalabilidade, desenvolvi novas funcionalidades ponta a ponta e participei ativamente de decisões técnicas.",
    stack: ["ReactJS", "Vue.js", "TypeScript", "PHP", "MySQL", "Docker", "Jest", "Cypress", "Jenkins"],
  },
];

export const education = [
  {
    school: "PUC Minas",
    degree: "Pós-graduação — Arquitetura de Soluções",
    period: "jun 2025 — jan 2027",
    description:
      "Formação voltada a projetar, integrar e evoluir sistemas complexos e escaláveis: SOA, microsserviços e APIs, Cloud (AWS, Azure, GCP), DevOps, padrões arquiteturais, segurança, desempenho e governança de TI.",
  },
  {
    school: "Senac São Paulo",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "jan 2017 — nov 2019",
    description: "Formação tecnológica em desenvolvimento de sistemas.",
  },
];

export const certifications = [
  { name: "MCP Advanced", issuer: "Anthropic", date: "mai 2026" },
  { name: "Advanced React", issuer: "Meta", date: "—" },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado" },
];
