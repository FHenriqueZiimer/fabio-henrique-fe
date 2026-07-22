# Portfólio · Fábio Henrique

Portfólio pessoal — Engenheiro de Software & Arquiteto de Soluções.
Feito com **Next.js (App Router)** + **Tailwind CSS** (tokens de tema no padrão shadcn),
estética limpa e corporativa, foco em **SEO**. Quase tudo são Server Components —
só o `Navbar` é client (menu mobile + efeito de scroll).

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de produção
npm start         # servir o build
```

## Personalização rápida

| O que | Onde |
|------|------|
| Nome, e-mail, telefone, domínio, palavras-chave (SEO) | `lib/site.ts` |
| Textos PT **e** EN (experiências, skills, CESBE HUB, etc.) | `lib/content.ts` (`pt` / `en`) |
| Cores e tema (claro/escuro) | `app/globals.css` (variáveis `:root`) + `tailwind.config.ts` |
| Currículo (PDF) | `public/CV-FabioHenrique.pdf` (substitua pelo real) |
| SEO / Open Graph / dados estruturados (JSON-LD) | `app/layout.tsx` |

## Imagens (substitua os placeholders em `/public`)

- **`public/profile.png`** → sua foto de perfil (a que você enviou). Basta salvar por cima.
- **`public/CV-FabioHenrique.pdf`** → seu currículo (usado no botão "Baixar currículo").
- **`public/og-image.png`** (1200×630) → imagem de compartilhamento em redes sociais.

> Os placeholders atuais são gerados só para o layout não quebrar antes de você
> adicionar os arquivos reais.

## SEO já incluído

- Metadata completo (title/description/keywords), canonical e `metadataBase`
- Open Graph + Twitter Card
- **JSON-LD** `Person` + `CreativeWork` (CESBE HUB, com você como autor/criador)
- `sitemap.xml` e `robots.txt` gerados automaticamente
- HTML semântico, `lang="pt-BR"` e headings hierárquicos

Antes de publicar, ajuste `url` em `lib/site.ts` para o seu domínio real.
