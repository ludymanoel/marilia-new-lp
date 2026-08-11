# Design Spec — Moodboard & Sistema Visual

**Universo:** Desenvolvimento pessoal / Produtividade feminina
**Público:** Mulheres 30–45, profissionais/empreendedoras, classe B/C
**Referência cultural:** wellness moderno, marca pessoal feminina,
minimalismo sofisticado com calor

---

## 1. Paleta de Cores (oklch + hex equivalente)

### 1.1 Cores primárias (brand)

| Nome           | oklch             | Hex      | Uso                                        |
| -------------- | ----------------- | -------- | ------------------------------------------ |
| `--brand-900`  | `oklch(28% 0.05 270)` | `#1E1B4B` | Background escuro (hero, oferta, CTA)      |
| `--brand-700`  | `oklch(40% 0.08 275)` | `#312E81` | Hover, gradientes                          |
| `--brand-500`  | `oklch(55% 0.15 280)` | `#6366F1` | Links, ícones, detalhes                    |
| `--brand-100`  | `oklch(95% 0.03 280)` | `#EEF2FF` | Backgrounds suaves                         |

**Justificativa:** Mantém o DNA do azul marinho original (#000154)
mas com mais luminosidade e calor para evitar o aspecto "datado".

### 1.2 Cores de destaque (accent)

| Nome           | oklch             | Hex      | Uso                                        |
| -------------- | ----------------- | -------- | ------------------------------------------ |
| `--accent-500` | `oklch(70% 0.18 50)`  | `#F59E0B` | CTAs primários, badges de bônus, alertas   |
| `--accent-400` | `oklch(78% 0.15 45)`  | `#FBBF24` | Hover de CTA, gradientes                   |
| `--accent-100` | `oklch(95% 0.05 50)`  | `#FEF3C7` | Background de "antes" no antes/depois      |

**Justificativa:** Âmbar (não vermelho/rosa) gera sensação de "calor,
oportunidade, urgência saudável" — compatível com o tom acolhedor da
Marília. Vermelho agressivo demais; rosa pálido demais.

### 1.3 Cores neutras

| Nome           | oklch             | Hex      | Uso                                        |
| -------------- | ----------------- | -------- | ------------------------------------------ |
| `--neutral-50` | `oklch(98% 0.005 90)` | `#FAFAF9` | Background claro principal                 |
| `--neutral-100`| `oklch(96% 0.008 90)` | `#F5F5F4` | Cards, superfícies                         |
| `--neutral-200`| `oklch(90% 0.01 80)`  | `#E7E5E4` | Borders suaves, divisores                  |
| `--neutral-500`| `oklch(50% 0.01 80)`  | `#78716C` | Texto secundário                           |
| `--neutral-700`| `oklch(30% 0.01 80)`  | `#44403C` | Texto corpo (contraste 12:1 sobre branco)  |
| `--neutral-900`| `oklch(15% 0.01 80)`  | `#1C1917` | Texto principal (contraste 16:1)           |

### 1.4 Cores de estado

| Nome           | oklch             | Hex      | Uso                                        |
| -------------- | ----------------- | -------- | ------------------------------------------ |
| `--success-500`| `oklch(65% 0.16 145)`  | `#10B981` | Confirmação, checks                        |
| `--success-100`| `oklch(95% 0.04 145)`  | `#D1FAE5` | Backgrounds de confirmação                 |
| `--error-500`  | `oklch(60% 0.22 25)`   | `#EF4444` | Erros, alertas                             |
| `--warning-500`| `oklch(75% 0.16 70)`   | `#EAB308` | Avisos, escassez suave                     |

### 1.5 Modo escuro (não implementado nesta LP, mas no design system)

Mesmas cores com ajuste de luminosidade para `oklch(15% 0.005 270)` como
background principal. Reservado para futuro blog.

---

## 2. Tipografia

### 2.1 Famílias (com fallback stack)

```css
--font-display: 'Fraunces', 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### 2.2 Escala modular (1.25 — major third)

| Token        | Size   | Line-height | Weight | Tracking | Uso                              |
| ------------ | ------ | ----------- | ------ | -------- | -------------------------------- |
| `text-xs`    | 0.75rem (12px)   | 1.5  | 400    | 0.02em   | Eyebrow, badges                   |
| `text-sm`    | 0.875rem (14px)  | 1.5  | 400    | normal   | Caption, microcopy                |
| `text-base`  | 1rem (16px)      | 1.6  | 400    | normal   | Corpo                              |
| `text-lg`    | 1.125rem (18px)  | 1.55 | 400    | normal   | Lead                               |
| `text-xl`    | 1.25rem (20px)   | 1.5  | 500    | normal   | Subtítulo seção                    |
| `text-2xl`   | 1.5rem (24px)    | 1.4  | 500    | -0.01em  | H4                                  |
| `text-3xl`   | 1.875rem (30px)  | 1.3  | 600    | -0.015em | H3                                  |
| `text-4xl`   | 2.25rem (36px)   | 1.25 | 600    | -0.02em  | H2 (mobile)                        |
| `text-5xl`   | 3rem (48px)      | 1.15 | 700    | -0.025em | H1 (mobile)                        |
| `text-6xl`   | 3.75rem (60px)   | 1.1  | 700    | -0.03em  | H1 (desktop)                       |
| `text-7xl`   | 4.5rem (72px)    | 1.05 | 700    | -0.035em | Display (hero desktop)             |

### 2.3 Estratégia de pesos
- **Fraunces** (display): apenas 600 e 700. Bold demais quebra a elegância.
- **Inter** (body): 400, 500, 600, 700. Italic disponível para ênfase.

### 2.4 Hierarchy de leitura
1. **Eyebrow** (text-xs uppercase tracking) — categoria da seção
2. **H2 da seção** (text-3xl mobile / text-4xl desktop, Fraunces 600)
3. **Lead** (text-lg, Inter 400) — parágrafo de abertura
4. **Corpo** (text-base, Inter 400 line-height 1.6)
5. **Destaque** (text-base, Inter 600 ou Fraunces 500)

### 2.5 Onde NÃO usar Fraunces
- Botões (Inter 600 com tracking 0.02em)
- Tabelas/listas
- Navegação
- Microcopy (CTAs, badges)

---

## 3. Espaçamento (sistema 8px)

```
--space-1: 0.25rem (4px)   — micro ajustes
--space-2: 0.5rem  (8px)   — gap entre elementos irmãos
--space-3: 0.75rem (12px)
--space-4: 1rem    (16px)  — padding padrão de card mobile
--space-5: 1.25rem (20px)
--space-6: 1.5rem  (24px)  — gap entre blocos
--space-8: 2rem    (32px)  — padding padrão de card desktop
--space-10: 2.5rem (40px)
--space-12: 3rem   (48px)  — separação entre seções (mobile)
--space-16: 4rem   (64px)  — separação entre seções (desktop)
--space-20: 5rem   (80px)
--space-24: 6rem   (96px)  — espaço extra para hero
```

### Regras
- **Vertical rhythm:** margins sempre múltiplos de 8px.
- **Section padding:** mínimo 64px (mobile) / 96px (desktop) entre seções.
- **Container max-width:** 1280px (mas seções full-width podem ir além).
- **Card padding:** 24px (mobile) / 32px (desktop).

---

## 4. Componentes

### 4.1 Button

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;        /* 16px 32px */
  border-radius: 9999px;     /* pill */
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1;
  min-height: 48px;          /* WCAG 2.5.8 touch target */
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn--primary {
  background: linear-gradient(135deg, #F59E0B, #FBBF24);
  color: #1C1917;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.35);
}
.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.45);
}
.btn--secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}
.btn--ghost {
  background: white;
  color: var(--brand-700);
  border: 1px solid var(--neutral-200);
}
```

Variantes:
- `--primary` (CTA principal — âmbar)
- `--secondary` (CTA secundário — outline branco)
- `--ghost` (CTA neutro — fundo branco)

### 4.2 Card

```css
.card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04),
              0 4px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06),
              0 12px 24px rgba(0, 0, 0, 0.08);
}
.card--feature {
  background: linear-gradient(135deg, white 0%, #FAFAF9 100%);
  border: 1px solid var(--neutral-100);
}
```

### 4.3 Badge

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.badge--brand {
  background: var(--brand-100);
  color: var(--brand-700);
}
.badge--accent {
  background: var(--accent-100);
  color: #92400E;
}
.badge--success {
  background: var(--success-100);
  color: #065F46;
}
```

### 4.4 Avatar / Logo card

- Circular, 80–120px de diâmetro
- Borda 2px em `--brand-100`
- Sombra suave

### 4.5 IconBox

- 56px × 56px container com ícone line-art
- Background `--brand-100` ou `--accent-100`
- Border-radius 16px
- Ícone 28px stroke-width 1.5

### 4.6 Stat / Number card

- Número em display (Fraunces 700, 48–60px)
- Label em text-sm uppercase
- Background gradient sutil

### 4.7 Video Card (lite-yt-embed)

- Aspect ratio 16:9 fixo
- Thumbnail lazy-loaded
- Ícone play centralizado
- Border-radius 16px
- Sombra média

### 4.8 Testimonial Card

- Print WhatsApp com moldura
- Nome + profissão/idade
- Estrelas (4.9/5)
- Background branco com sombra

---

## 5. Layout & Grid

### 5.1 Breakpoints (mobile-first)

```
sm: 640px   — tablet portrait (2 colunas)
md: 768px   — tablet landscape (3 colunas)
lg: 1024px  — desktop (grid completo)
xl: 1280px  — desktop grande (container max)
2xl: 1536px — wide (grids mais densos)
```

### 5.2 Grid de seções

- **Hero:** 1 coluna (mobile) → 2 colunas 50/50 (lg+)
- **Bar de prova social:** flex-wrap, gap 32px
- **Pain points:** 1 coluna → 2 colunas (sm) → 4 colunas (lg)
- **About Marilia:** 1 coluna → 2 colunas 40/60 (lg+)
- **Method pillars:** 1 coluna → 2 colunas (sm) → 4 colunas (lg)
- **Who is for:** 1 coluna → 3 colunas (lg)
- **Course modules:** accordion full-width
- **Bonuses:** 1 coluna → 2 colunas (md)
- **Testimonials:** carrossel horizontal (mobile) + grid 2 colunas (desktop)
- **Offer card:** 1 coluna centralizada, max-width 720px
- **FAQ:** accordion full-width, max-width 800px centralizado
- **Final CTA:** 1 coluna centralizada

### 5.3 Containers

```
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1280px
```

Seções full-width usam `width: 100%; max-width: var(--container-xl); margin: 0 auto; padding-inline: clamp(1rem, 4vw, 2rem);`.

---

## 6. Animações (regra geral)

- **Duração:** 200ms (micro), 400ms (macro)
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard)
- **Trigger:** IntersectionObserver, classe `.is-visible`
- **Reduzir:** sempre respeitar `prefers-reduced-motion`

### Tipos permitidos
- Fade in (opacidade 0 → 1)
- Slide up (translateY 20px → 0)
- Stagger (filhos com delay 80ms)
- Hover lift (translateY -4px)

### Tipos proibidos
- Loops infinitos (pulse, spin contínuo)
- Parallax agressivo
- Auto-play de vídeo com som
- Carrossel com auto-rotate > 5s

---

## 7. Sombras (depth system)

```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.04);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.03);
--shadow-glow: 0 0 40px rgba(99, 102, 241, 0.25);  /* accent brand */
--shadow-glow-accent: 0 0 40px rgba(245, 158, 11, 0.35);  /* accent */
```

---

## 8. Border Radius

```
--radius-sm: 0.375rem (6px)   — badges, inputs
--radius-md: 0.5rem   (8px)   — botões pequenos
--radius-lg: 1rem     (16px)  — cards
--radius-xl: 1.5rem   (24px)  — hero cards, ofertas
--radius-2xl: 2rem    (32px)  — destaque
--radius-full: 9999px        — pills, avatares
```

---

## 9. Ilustrações & Ícones

### 9.1 Ícones
- **Biblioteca:** Lucide Icons (SVG inline, 24x24, stroke 1.5)
- **Estilo:** line, rounded caps
- **Quando usar SVG custom:** logos, ícones de marca

### 9.2 Ilustrações
- Estilo "soft abstract" — formas orgânicas com gradientes sutis
- Cores alinhadas à paleta (brand-100, accent-100, neutral-100)
- Onde usar: hero background, espaçadores entre seções, badges visuais

### 9.3 Fotos
- **Marília:** foto profissional real (não stock), sorriso natural,
  fundo neutro claro
- **Alunas:** prints WhatsApp (originais) com autorização
- **Bônus (planner):** foto do produto físico em mesa organizada

---

## 10. Iconografia SVG custom

Para cada pilar do método, criar SVG próprio (não emoji):
- **Desenhe** — mão com lápis sobre papel
- **Simplifique** — funil
- **Estruture** — blocos LEGO encaixando
- **Ative** — dominó em cascata

Todos em stroke 1.5, 80x80px, com `<defs>` compartilhado para gradients.

---

Próximo: `05-copywriting.md` com a copy completa de cada seção.