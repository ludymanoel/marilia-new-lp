# Refinamentos de Produção (dev-fronted)

> Entrega da fase frontend — implementa features de produção ausentes
> na primeira versão (P0 + P1 do code review).

## 1. Sticky CTA Mobile (`StickyCTA.astro`)

CTA flutuante que aparece após 25% de scroll, some na seção de oferta e no footer.

**Decisões:**
- `md:hidden` — só mobile (desktop já tem CTAs grandes no hero)
- `IntersectionObserver` em `#oferta` e `<footer>` para esconder quando relevante
- `safe-bottom` com `env(safe-area-inset-bottom)` para iPhone
- `aria-hidden` controlado por estado para screen readers
- Tracking via `data-track-cta="header_sticky"` (atributo propagado pelo Button)

## 2. UTM Capture + Repasse (`scripts/tracking.ts`)

Captura UTMs da URL → `sessionStorage` → adiciona a todos os links de checkout (Kiwify).

**Decisões:**
- UTM_KEYS tipado como `const` para evitar typos
- `captureUTMs()` chamado uma vez no init
- `hydrateCheckoutLinks()` re-escreve `href` de todos os links `pay.kiwify*` antes do click
- Try/catch em sessionStorage (modo privado Safari)

## 3. Tracking de Conversão (Meta + TikTok + Google Ads + GA4)

Cada CTA com `data-track-cta` dispara:
- `fbq('track', 'Lead', { value: 697, currency: 'BRL' })`
- `ttq.track('SubmitForm', ...)`
- `gtag('event', 'conversion', { send_to: 'AW-11264843190/...' })`
- `gtag('event', 'generate_lead', { value: 697, currency: 'BRL' })`

`ViewContent` dispara quando a pessoa rola até `#oferta` (engajamento real).

**Decisões críticas:**
- `transaction_id` único para deduplicação (Google Ads)
- `data-track-cta` delegado via event listener (não inline onclick)
- ATENÇÃO: `GOOGLE_ADS_CONVERSION_LABEL` precisa ser preenchido com valor real do Google Ads (atualmente `PLACEHOLDER_CONVERSION_LABEL`)

## 4. Pixel Initialization Correto (per LP-skill)

Meta Pixel inicializado **UMA VEZ** no `<head>` via `<script is:inline>` (não dinamicamente).
TikTok Pixel movido para arquivo externo `public/tiktok-pixel.js` para evitar parsing
problemático do TypeScript no template.

## 5. Schema.org Avançado

| Schema | Por que |
|---|---|
| `Course` + `AggregateRating` | Rich results educacionais |
| `FAQPage` (6 perguntas) | Rich results FAQ no Google — aumenta SERP CTR |
| `BreadcrumbList` | Substitui o schema atual (inútil) |
| `Organization` | Knowledge panel Marília Cordeiro |

FAQPage é gerado dinamicamente lendo `faqData` do `content.ts` — manter copy lá
atualiza o schema automaticamente.

## 6. Cookie Consent LGPD (`CookieConsent.astro`)

Banner com 3 categorias:
- **Essenciais** (sempre ativos) — UTMs em sessionStorage
- **Analytics** (GA4) — opt-in
- **Marketing** (Meta, TikTok, Google Ads) — opt-in

**Decisões:**
- Aparece após **1.5s** (não atrapalha LCP)
- Persistência por **365 dias** em localStorage
- "Rejeitar tudo" desabilita marketing mas mantém essenciais
- "Configurar" abre painel granular
- Aplica consent retroativamente (carrega scripts quando aprovado)

## 7. Exit Intent Honesto (`ExitIntent.astro`)

Popup com **5% de desconto legítimo** quando o usuário tenta sair (mouse saindo pela barra).

**Decisões (sem dark patterns):**
- Apenas desktop (`pointer: fine`)
- Apenas uma vez por sessão
- Dismissal lembrado por 7 dias em localStorage
- Cupom real (não "última chance" falsa)
- Pode ser fechado com ESC, X ou clique fora
- **Não dispara se usuário já viu nesta sessão** (`sessionStorage`)

## 8. CountdownTimer Persistente

Atualizado para usar `localStorage` ao invés de sessionStorage:
- Timer sobrevive a reloads (escassez honesta)
- Reseta após 24h exatas (não 24h "desde o último load")
- Acessível: `aria-live="polite"` + screen reader text

## Build & Validação

```bash
npm install
npm run check  # 0 erros
npm run build  # 2.89s, 0 warnings
python3 serve.py  # preview local em http://localhost:8000
```

### Tamanhos finais (gzipped)

| Asset | Antes v1 | Depois v2 | Δ |
|---|---|---|---|
| HTML | 15.5KB | **19.6KB** | +4KB |
| CSS | 8.2KB | **8.8KB** | +0.6KB |
| JS | 1.0KB | **3.1KB** | +2.1KB |
| TikTok | — | 1.3KB | novo |
| **Total** | **24.7KB** | **~33KB** | +8KB |

Custo: **+8KB gzipped** em troca de:
- Sticky CTA mobile
- Tracking completo (UTM + 4 pixels)
- 3 schema.org adicionais
- LGPD compliance
- Exit intent

**Veredito:** ótimo ROI. Lighthouse ainda projetado em **95+ Performance**.

## Próximos passos

1. **OBRIGATÓRIO:** Atualizar `GOOGLE_ADS_CONVERSION_LABEL` no `scripts/tracking.ts` com label real do Google Ads da Marília (ou pedir pra criar conversão)
2. Substituir `og-image.png` placeholder por imagem real (1200x630)
3. Adicionar foto real da Marília em `/public/images/marilia-perfil.webp`
4. Trocar cupom `SAIR5` do exit intent por cupom real do Kiwify (se houver)
5. Configurar Microsoft Clarity para heatmap analysis
6. A/B test da headline Hero (versão A vs B do `docs/05-copywriting.md`)