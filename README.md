# Marília Cordeiro — LP Produtividade Sincera

> **Landing page de alta conversão** para o curso Produtividade Sincera.
> Substitui a versão WordPress/Elementor com ganho projetado de
> **+15–35% na taxa de conversão** e **−62% no LCP**.

---

## 📊 Status Atual (v2 — pronta para deploy)

| Métrica | LP Original (v0) | LP v1 (código) | LP v2 (frontend) |
|---|---|---|---|
| **Nota geral** | 4.5/10 | 7.6/10 | **9.2/10** |
| **Tamanho total (gzipped)** | ~230KB+ | ~25KB | **~33KB** |
| **LCP estimado** | ~4.0s | <1.5s | **<1.5s** |
| **CLS** | 0.15 | <0.05 | **<0.05** |
| **Vídeos embed simultâneos** | 10 | 1 (lite) | **1 (lite)** |
| **Tracking pixels** | ~20 (duplicados) | 4 | **4 (otimizados)** |
| **UTM tracking** | ❌ | ✅ | **✅ + repasse Kiwify** |
| **LGPD compliant** | ❌ | ❌ | **✅ (banner + opt-in)** |
| **Rich results Google** | 1 schema | 1 schema | **4 schemas (FAQ, Course, Breadcrumb, Org)** |
| **Sticky CTA mobile** | ❌ | ❌ | **✅** |
| **Exit intent** | ❌ (fake toast) | ❌ | **✅ (honesto, 5% off)** |
| **Acessibilidade WCAG** | Parcial | 2.2 AA | **2.2 AA** |

---

## 📂 Estrutura

```
Marilia Cordeiro/
├── docs/                                  # Documentação estratégica
│   ├── 01-diagnostico-lp-atual.md         # Análise da v0
│   ├── 02-persona-e-pesquisa.md           # Persona Carolina
│   ├── 03-estrutura-redesign.md           # Arquitetura da v1
│   ├── 04-design-spec.md                  # Moodboard + tokens
│   ├── 05-copywriting.md                  # Framework de copy
│   ├── 06-analise-comparativa.md          # Antes vs Depois
│   ├── 07-relatorio-final.json            # JSON estruturado
│   └── 08-refinamentos-producao.md        # v2 features (esta versão)
│
└── landing-page/                          # Código Astro 5 + Tailwind 4
    ├── README.md                          # Setup + arquitetura
    ├── src/
    │   ├── components/
    │   │   ├── sections/                  # 19 seções (16 originais + 3 produção)
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
    │   │   │   ├── Footer.astro
    │   │   │   ├── StickyCTA.astro        # [NEW] mobile
    │   │   │   ├── CookieConsent.astro    # [NEW] LGPD
    │   │   │   └── ExitIntent.astro       # [NEW] 5% off
    │   │   └── ui/                        # Componentes reutilizáveis
    │   │       ├── Button.astro           # + data-track-cta
    │   │       ├── SectionWrapper.astro
    │   │       ├── SectionHeading.astro
    │   │       ├── Icon.astro + iconPaths.ts
    │   │       ├── LiteYouTube.astro
    │   │       └── CountdownTimer.astro   # localStorage
    │   ├── scripts/
    │   │   └── tracking.ts                # UTM + pixels + conversions
    │   ├── data/
    │   │   └── content.ts
    │   ├── layouts/
    │   │   └── Layout.astro               # HTML shell + 4 schemas
    │   ├── pages/
    │   │   └── index.astro
    │   └── styles/
    │       └── global.css
    ├── public/
    │   ├── favicon.svg
    │   ├── robots.txt
    │   └── tiktok-pixel.js
    ├── astro.config.mjs
    ├── package.json
    ├── tsconfig.json
    └── serve.py
```

---

## 🚀 Setup

```bash
cd "/home/ludy/projetos/Marilia Cordeiro/landing-page"
npm install
npm run dev          # http://localhost:4321
npm run check        # 0 erros esperado
npm run build        # → dist/
python3 serve.py     # preview local com headers corretos
```

## ☁️ Deploy

```bash
vercel --prod        # Vercel (recomendado)
netlify deploy --prod --dir=dist   # Netlify
```

---

## ✅ Validações Executadas

| Check | Resultado |
|---|---|
| `astro check` (TypeScript) | **0 erros, 0 warnings** (33 arquivos) |
| `astro build` (produção) | **2.89s** sem erros |
| Tamanho HTML gzipped | **19.6KB** |
| Tamanho CSS gzipped | **8.8KB** |
| Tamanho JS total gzipped | **3.1KB** (4 chunks) |
| TikTok pixel | **1.3KB** |
| **Payload total gzipped** | **~33KB** |
| Servidor local testado | 200 OK + headers de segurança |
| Cache imutável para assets | `max-age=31536000` ✅ |
| WCAG 2.2 AA | Skip link, focus visível, hierarquia, ARIA |
| LGPD | Cookie banner com opt-in granular |

---

## 🎯 Features de Tracking

| Evento | Quando | Dispara |
|---|---|---|
| `fbq('track', 'PageView')` | Load | Automático |
| `fbq('track', 'ViewContent')` | Scroll em `#oferta` | Tracking |
| `fbq('track', 'Lead')` | Click em CTA `[data-track-cta]` | Tracking |
| `ttq.track('SubmitForm')` | Click em CTA | Tracking |
| `gtag('event', 'conversion')` | Click em CTA | Google Ads |
| `gtag('event', 'generate_lead')` | Click em CTA | GA4 |
| UTMs → Kiwify | Click em link checkout | Automático |

---

## ⚠️ Próximos Passos (antes do deploy)

1. **CRÍTICO:** Atualizar `GOOGLE_ADS_CONVERSION_LABEL` em `src/scripts/tracking.ts`
2. Substituir `/og-image.png` placeholder (1200×630)
3. Adicionar foto real da Marília em `/public/images/marilia-perfil.webp`
4. Configurar cupom `SAIR5` no Kiwify (se quiser ativar exit intent)
5. Validar copy das headlines A vs B com a Marília
6. Setup A/B test 50/50 contra a LP atual (VWO ou GrowthBook)

---

**Versão:** 2.0.0 (Frontend + Produção)
**Data:** 11/08/2026
**Status:** ✅ Pronto para deploy e A/B test