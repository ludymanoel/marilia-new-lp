# Estrutura do Redesign — Sequência de Seções

**Filosofia:** "Menos é mais. Cada seção precisa provar que merece existir."

A LP atual tem 30+ seções. O redesign propõe **15–17 seções**, organizadas
na lógica AIDA + framework StoryBrand:

1. **A**ttention (Hero + Bar de prova social)
2. **I**nterest (Problema + Solução)
3. **D**esire (Método + Conteúdo + Bônus + Depoimentos)
4. **A**ction (Oferta + Garantia + FAQ + CTA Final)

---

## Estrutura Proposta (Mobile-first, scroll contínuo)

| # | Seção                          | Função CRO                                | Componente                  | Cor de fundo     |
| - | ------------------------------ | ----------------------------------------- | --------------------------- | ---------------- |
| 0 | **Sticky Header**              | Logo + CTA âncora sempre visível          | `<Header>`                  | transparente     |
| 1 | **Hero**                       | Identificação + VSL + CTA principal       | `<Hero>`                    | gradiente escuro |
| 2 | **Bar de Prova Social**        | "5.000+ alunas · 4.9/5 estrelas · ..."    | `<SocialProofBar>`          | branco           |
| 3 | **Problema (Dor)**             | Carolina se reconhece em 4 cards          | `<PainPoints>`              | bege rosado      |
| 4 | **Solução (Transformação)**    | Antes/depois emocional e prático          | `<BeforeAfter>`             | branco           |
| 5 | **Quem é Marília**             | Autoridade + números                      | `<AboutMarilia>`            | bege rosado      |
| 6 | **Método (Sonhatividade)**     | 4 pilares numerados                       | `<MethodPillars>`           | branco           |
| 7 | **Para Quem É**                | 3 personas em cards visuais               | `<WhoIsFor>`                | bege rosado      |
| 8 | **O Que Você Vai Aprender**    | Módulos em accordion expansível           | `<CourseModules>`           | branco           |
| 9 | **Bônus Especiais**            | 2 cards com valor ancorado                | `<Bonuses>`                 | bege rosado      |
| 10| **Depoimentos**                | 1 destaque + 6 prints + carrossel         | `<Testimonials>`            | branco           |
| 11| **Oferta** (com countdown)     | Âncora + preço + CTA + garantia           | `<OfferCard>`               | gradiente escuro |
| 12| **Garantia 7 Dias**            | Selo + texto + FAQ curto                  | `<Guarantee>`               | branco           |
| 13| **FAQ Estratégico**            | 6 perguntas que combatem objeções         | `<FAQ>`                     | bege rosado      |
| 14| **CTA Final**                  | Reforço + última chamada emocional        | `<FinalCTA>`                | gradiente escuro |
| 15| **Footer**                     | Logo + links + CNPJ + social              | `<Footer>`                  | escuro sólido    |

---

## Justificativa de cada seção

### 0. Sticky Header
- Aparece após 200px de scroll
- Logo + CTA âncora (`#oferta`) sempre acessível
- Mobile: hamburger menu apenas para links institucionais

### 1. Hero (LCP crítico)
- Headline com **gancho emocional + palavra-chave**
- Subheadline com **promessa específica** (número + tempo)
- VSL thumbnail com `lite-yt-embed` (carrega só poster, iframe só no click)
- CTA primário acima da fold
- Badge de "Acesso Imediato · 7 Dias de Garantia"
- Fundo: gradiente radial escuro com leve pattern SVG

### 2. Bar de Prova Social
- 4–5 logos/métricas em linha horizontal
- "5.000+ alunas transformadas · +12 anos de método · 4.9/5 ★"
- 4.9/5 é o limite seguro (acima disso gera desconfiança)

### 3. Problema (Dor)
- 4 cards de dor com ícone line-art:
  - "Você começa o dia animada e termina exausta"
  - "Já comprou 3 planners que hoje são peso de papel"
  - "Sente culpa quando descansa"
  - "Tem a sensação de que poderia estar fazendo mais"
- Cada card com emoji-svg sutil (não emojis coloridos)

### 4. Solução (Transformação)
- Antes/Depois lado a lado (com fade-in on scroll)
- Esquerda: "Sem método" — agenda caótica, tarefas pendentes, culpa
- Direita: "Com Produtividade Sincera" — rotina clara, energia alta,
  resultados visíveis

### 5. Quem é Marília
- Foto profissional (a Marília, não avatar genérico)
- 3 números de autoridade:
  - "+12 anos otimizando rotinas"
  - "R$100k+ economizados/mês para empresas"
  - "+5.000 pessoas formadas"
- Bio em 2 parágrafos curtos
- Link para LinkedIn / imprensa

### 6. Método (Sonhatividade) — 4 Pilares
- Visual: 4 cards numerados (01, 02, 03, 04) em grid 2×2 mobile, 4×1 desktop
- Cada pilar com:
  - Número grande serif
  - Ícone line-art
  - Título (verbo de ação)
  - 2 linhas de descrição
- Pilares:
  1. **Desenhe** — Mapa dos seus sonhos
  2. **Simplifique** — Elimine o ruído
  3. **Estruture** — Rotina sob medida
  4. **Ative** — Efeito dominó

### 7. Para Quem É
- 3 cards de persona:
  - "Já tentou de tudo e nada durou"
  - "Não tem tempo nem pra começar"
  - "Quer resultados visíveis em 30 dias"
- Visual: avatar SVG ilustrado (estilo "Camila, 35, advogada")
- CTA ao final: "Se você se reconheceu em pelo menos 1, continue ↓"

### 8. O Que Você Vai Aprender (Módulos)
- Accordion com 6–8 módulos
- Cada módulo expande ao clicar (sem JS intrusivo, `<details>` nativo)
- Estrutura: "Módulo X — Título — • Aula 1: ... • Aula 2: ... (tempo)"
- Tempo total ao final: "8 horas de conteúdo no seu ritmo"

### 9. Bônus Especiais
- 2 cards grandes com:
  - Badge "BÔNUS"
  - Valor percebido ("vale R$497")
  - Imagem do bônus (planner ou foto da aula)
  - CTA contextual
- Countdown sutil: "Bônus disponível por mais Xh Ym"

### 10. Depoimentos
- 1 destaque topo: print WhatsApp com maior impacto emocional
- Carrossel com 6+ prints de WhatsApp (lazy-loaded)
- 1 vídeo curto embed (lite-youtube) com aluna contando resultado
- Cada depoimento com: nome, profissão (ex: "Carla, advogada, SP")

### 11. Oferta (a "estrela" da página)
- Card central com fundo gradiente escuro
- Âncora visual: "De R$1.497 por"
- Preço grande: "12x R$58,08" ou "R$697 à vista"
- Lista do que está incluído (check verde)
- CTA grande com microcopy: "Quero recuperar meu tempo"
- Selos: "Acesso Imediato · 7 Dias de Garantia · Compra Segura"
- Countdown acima do CTA

### 12. Garantia 7 Dias
- Selo visual grande (ícone de escudo + check)
- Texto: "Se em 7 dias você sentir que o método não é pra você,
  devolvemos 100% do seu investimento. Sem perguntas, sem burocracia."
- CTA âncora de volta pra `#oferta`

### 13. FAQ Estratégico (6 perguntas)
1. "Funciona pra quem tem TDAH ou se distrai fácil?"
2. "Quanto tempo por dia preciso dedicar?"
3. "Posso fazer pelo celular?"
4. "Por quanto tempo tenho acesso?"
5. "Como funciona a garantia?"
6. "Por que esse valor e não mais barato?"

### 14. CTA Final
- Headline emocional: "Daqui 30 dias você vai olhar pra trás e agradecer"
- CTA grande + selo de segurança + link FAQ
- Sem navegação extra (decisão final)

### 15. Footer
- Logo
- Links: Termos · Privacidade · Contato
- CNPJ + razão social
- Social: Instagram, YouTube, LinkedIn
- Copyright

---

## Sequência Lógica (StoryBrand)

```
PROBLEMA (Carolina sobrecarregada)
  → GUIA (Marília, especialista)
    → PLANO (Método Sonhatividade em 4 pilares)
      → CHAMADA À AÇÃO (Comprar curso)
        → SUCESSO (Rotina organizada, tempo recuperado, resultados)
        → FALHA (Continuar sobrecarregada, perder mais 1 ano)
```

Cada seção da LP corresponde a um passo acima.

---

## Diferença Quantitativa

| Métrica                  | LP Atual | LP Proposta |
| ------------------------ | -------- | ----------- |
| Total de seções          | ~30      | 15–17       |
| Vídeos embedados na home | 10+      | 1 (lite)    |
| Scripts de tracking      | ~20      | 5–7 (GTM)   |
| Tamanho HTML estimado    | 230KB+   | <50KB       |
| Tempo até 1º CTA         | Hero     | Hero        |
| CTAs únicos              | 7 idênticos | 7 com copy contextual |
| Breadcrumb Schema        | Sim (inútil) | Não       |
| Toast de vendas fake     | Sim      | Não         |
| Exit intent              | Não      | Sim (popup) |
| Sticky CTA               | Não      | Sim         |
| Order bump               | Não      | Sugerido    |

---

Próximo: `04-design-spec.md` com paleta oklch, tipografia e componentes.