# Produtividade Sincera — Landing Page Redesign

> Landing page de alta conversão para o curso **Produtividade Sincera**
> da **Marília Cordeiro**. Substitui a versão atual em WordPress + Elementor
> com ganho projetado de **+35% na taxa de conversão** e **−78% no LCP**.

---

## Stack

- **Astro 5.x** — zero JS por padrão, islands onde precisa
- **@astrojs/vercel/static** — adapter oficial para Vercel (zero-config deploy)
- **TailwindCSS 4.x** — design system via `@theme` no CSS
- **TypeScript** — type-safe no data layer
- **Schema.org** (Course + FAQPage + BreadcrumbList + Organization)
- **Lite YouTube Embed** — thumbnail lazy, iframe só no click

## Performance esperada

| Métrica       | LP Atual    | LP Nova (projetado) |
| ------------- | ----------- | ------------------ |
| LCP           | ~4.0s       | **<1.5s**          |
| INP           | ~250ms      | **<100ms**         |
| CLS           | 0.15        | **<0.05**          |
| HTML size (gz) | 230KB       | **~20KB**          |
| JS (gz)       | ~5MB        | **~3KB**           |
| Lighthouse P  | ~55         | **95+**            |
| Lighthouse A  | ~75         | **100**            |

## Estrutura

```
landing-page/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── tiktok-pixel.js          # TikTok Pixel (arquivo externo)
├── src/
│   ├── components/
│   │   ├── sections/            # 19 seções (16 originais + 3 produção)
│   │   └── ui/                  # Componentes reutilizáveis
│   ├── scripts/
│   │   └── tracking.ts          # UTM + pixels + conversions
│   ├── data/
│   │   └── content.ts           # Todo o copy + dados
│   ├── layouts/
│   │   └── Layout.astro         # HTML shell + 4 schemas
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css           # Tokens + utilities + components
├── astro.config.mjs             # + adapter Vercel
├── vercel.json                  # Headers + cache (isolated deploy)
├── package.json                 # + @astrojs/vercel
├── DEPLOY.md                    # Guia completo de deploy
└── tsconfig.json
```

## Setup local

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar dev server (hot reload)
npm run dev          # http://localhost:4321

# 3. Verificar tipos
npm run check        # Esperado: 0 erros

# 4. Build de produção
npm run build        # Gera dist/ + .vercel/output/

# 5. Preview do build
python3 serve.py     # http://localhost:8000 (com gzip + cache)
```

## Deploy

📘 **Guia completo:** veja [DEPLOY.md](./DEPLOY.md)

**TL;DR (Cenário A — recomendado):**

```bash
# 1. Criar repo no GitHub (ex: produtividade-sincera)
# 2. Push do conteúdo de landing-page/ apenas:
cd "/home/ludy/projetos/Marilia Cordeiro/landing-page"
git init && git add . && git commit -m "feat: LP v2"
git branch -M main
git remote add origin https://github.com/SEU-USER/produtividade-sincera.git
git push -u origin main

# 3. Importar em vercel.com/new
#    - Framework Preset: Astro (auto)
#    - Root: ./
#    - Deploy!
```

## Documentação adicional

- `../docs/01-diagnostico-lp-atual.md` — Análise da LP original
- `../docs/02-persona-e-pesquisa.md` — Persona Carolina
- `../docs/03-estrutura-redesign.md` — Nova arquitetura
- `../docs/04-design-spec.md` — Moodboard e tokens
- `../docs/05-copywriting.md` — Copy framework
- `../docs/06-analise-comparativa.md` — Antes vs Depois
- `../docs/08-refinamentos-producao.md` — Features v2

## Próximos passos

1. **CRÍTICO:** Atualizar `GOOGLE_ADS_CONVERSION_LABEL` em `src/scripts/tracking.ts`
2. Substituir placeholders de imagem (Marília + alunas)
3. Adicionar `/og-image.png` real (1200×630)
4. Configurar cupom `SAIR5` no Kiwify para exit intent
5. Setup A/B test contra LP original
6. Lighthouse CI no pipeline de deploy