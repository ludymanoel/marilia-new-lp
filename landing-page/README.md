# Produtividade Sincera — Landing Page Redesign

> Landing page de alta conversão para o curso **Produtividade Sincera**
> da **Marília Cordeiro**. Substitui a versão atual em WordPress + Elementor
> com ganho projetado de **+35% na taxa de conversão** e **−78% no LCP**.

---

## Stack

- **Astro 5.x** — zero JS por padrão, islands onde precisa
- **TailwindCSS 4.x** — design system via `@theme` no CSS
- **TypeScript** — type-safe no data layer
- **Schema.org Course** — SEO estruturado
- **Lite YouTube Embed** — thumbnail lazy, iframe só no click

## Performance esperada

| Métrica       | LP Atual    | LP Nova (projetado) |
| ------------- | ----------- | ------------------ |
| LCP           | ~4.0s       | **<1.5s**          |
| INP           | ~250ms      | **<100ms**         |
| CLS           | 0.15        | **<0.05**          |
| HTML size     | 230KB       | **<50KB**          |
| JS requests   | ~20         | **2–3**            |
| Lighthouse P  | ~55         | **95+**            |
| Lighthouse A  | ~75         | **100**            |

## Estrutura

```
landing-page/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── animations/         # (reservado para Lottie, SVG interativos)
│   │   ├── sections/           # 14 seções da LP
│   │   │   ├── Header.astro
│   │   │   ├── Hero.astro
│   │   │   ├── SocialProofBar.astro
│   │   │   ├── PainPoints.astro
│   │   │   ├── BeforeAfter.astro
│   │   │   ├── AboutMarilia.astro
│   │   │   ├── MethodPillars.astro
│   │   │   ├── WhoIsFor.astro
│   │   │   ├── CourseModules.astro
│   │   │   ├── Bonuses.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── OfferCard.astro
│   │   │   ├── Guarantee.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── FinalCTA.astro
│   │   │   └── Footer.astro
│   │   └── ui/                 # Componentes reutilizáveis
│   │       ├── Button.astro
│   │       ├── SectionWrapper.astro
│   │       ├── SectionHeading.astro
│   │       ├── Icon.astro
│   │       ├── LiteYouTube.astro
│   │       └── CountdownTimer.astro
│   ├── data/
│   │   └── content.ts          # Todo o copy + dados estruturados
│   ├── layouts/
│   │   └── Layout.astro        # HTML shell + SEO + Analytics
│   ├── pages/
│   │   └── index.astro         # Página principal
│   └── styles/
│       └── global.css          # Design tokens + utilities + components
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Setup local

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar dev server (hot reload)
npm run dev

# 3. Verificar tipos
npm run check

# 4. Build de produção
npm run build

# 5. Preview do build
npm run preview
```

## Deploy

### Vercel (recomendado)
```bash
vercel --prod
```

O `astro.config.mjs` já está pronto para auto-detect da Vercel.

### Netlify
```bash
netlify deploy --prod --dir=dist
```

## Documentação adicional

- `../docs/01-diagnostico-lp-atual.md` — Análise da LP atual
- `../docs/02-persona-e-pesquisa.md` — Persona mapeada
- `../docs/03-estrutura-redesign.md` — Nova arquitetura
- `../docs/04-design-spec.md` — Moodboard e tokens
- `../docs/05-copywriting.md` — Copy framework completo
- `../docs/06-analise-comparativa.md` — Antes vs Depois

## Próximos passos

1. **Substituir placeholders:** fotos da Marília e das alunas
   (otimizar para WebP/AVIF, usar `<Image>` do Astro)
2. **A/B test do hero:** testar Headline A vs B
3. **Exit-intent popup** com order bump (R$797 com 1 ano de mentoria)
4. **Server-side tracking** via GTM Stape para reduzir impacto no INP
5. **Lighthouse CI** no pipeline de deploy (bloquear se < 90)