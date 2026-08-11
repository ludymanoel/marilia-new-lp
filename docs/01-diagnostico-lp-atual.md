# Diagnóstico Crítico — LP "Produtividade Sincera"

**URL:** https://mariliacordeiro.com/produtividade-sincera/
**Data da análise:** 11/08/2026
**Método:** Análise de HTML/CSS/JS renderizado + heurísticas de CRO (CXL, Good Rebels, Unbounce)

---

## 1. Resumo Executivo

A página atual é uma LP WordPress + Elementor com **30+ seções empilhadas**,
**10+ iframes YouTube carregados em paralelo**, **20 scripts de tracking** e
inúmeros widgets redundantes. Ela tenta vender tudo ao mesmo tempo — método,
bônus, comunidade, garantia, comparação, FAQ — sem hierarquia visual, sem
ancoragem de preço clara e sem um único momento de "sim, é isso que eu
preciso". O visitante chega, se perde no scroll infinito, e desiste antes de
chegar no checkout.

**Nota geral atual: 4.5 / 10**

---

## 2. Matriz de Avaliação (nota 0–10 por critério)

| Critério                              | Peso | Nota | Justificativa curta                                                                                            |
| ------------------------------------- | ---- | ---- | -------------------------------------------------------------------------------------------------------------- |
| Clareza da proposta de valor (Hero)   | 20%  | 4.0  | Headline confusa ("Produtividade Sincera: realize seus objetivos..."), não fala de resultado específico.        |
| Estrutura de persuasão                | 18%  | 3.5  | Sem hook forte no topo, sem antes/depois, sem âncora de preço bem feita. 30 seções = fadiga de decisão.          |
| Copy / Tom de voz                     | 12%  | 5.5  | Linguagem coerente e acolhedora, mas verbosa. Repetição de "passo a passo" sem mostrar o passo.                  |
| Prova social                          | 12%  | 5.0  | Há prints de depoimentos, mas sem vídeo, sem métricas agregadas, sem transformação quantificada.                |
| CTAs e ofertas                        | 12%  | 4.5  | 7 botões idênticos para Kiwify, sem escassez real, sem order bump, sem segmentação.                            |
| Hierarquia visual / Design            | 10%  | 5.0  | Marca visual fraca (azul escuro + vermelho/rosa), tipografia sem ritmo, espaçamentos inconsistentes.            |
| Performance / Core Web Vitals         | 8%   | 2.0  | 10+ vídeos embedados, 20 scripts, CSS 230KB+. LCP provavelmente >4s. CLS alto por widgets de altura dinâmica.   |
| Acessibilidade                        | 4%   | 4.0  | Falta `lang` no `html` em alguns contextos, headings pulando níveis, contraste baixo em alguns textos roxos.    |
| SEO técnico                           | 4%   | 6.5  | Schema.org presente, canonical OK, mas title genérico e meta description "BÔNUS ESPECIAL..." parece spam.        |
| **Média ponderada**                   | 100% | **4.5** |                                                                                                                |

---

## 3. Problemas Críticos (que matam conversão)

### 🔴 3.1 Hero fraco — LCP e copy prejudicam o início
- VSL (vídeo) YouTube embed com `autoplay=1` em iframe dentro do hero —
  pesa ~2MB de JS só para renderizar. LCP provavelmente acima de 4s.
- Headline não tem **gancho emocional**. É descritiva, não é magnética.
- Subheadline repete os mesmos benefícios do título.
- CTA "ASSISTA AO VÍDEO PARA ENTENDER MELHOR" não é um CTA de venda.

### 🔴 3.2 Toast de "compras recentes" — Dark pattern problemático
- Script inline com lista de 30 nomes fake ("Vanessa R. comprou há 19 min")
  usando `https://wtfismyip.com/json` (requisição para IP externo).
- Pode gerar **denúncia ao Procon** (prática comercial abusiva, art. 36 CDC).
- Sanciona Meta/Google Ads (política de representações enganosas).
- **Remover imediatamente.**

### 🔴 3.3 Inconsistência "Produtividade" vs "Organização"
- A página mistura os dois termos sem critério:
  - "Produtividade Sincera" (nome do curso)
  - "Método Organização Sincera" (nome da metodologia)
  - "Marca Organização Sincera" (planners)
- Gera dúvida na cabeça da compradora: "são produtos diferentes?".
- **Decisão:** unificar como "Produtividade Sincera — o Método" e usar
  "Organização Sincera" apenas no contexto da metodologia autoral.

### 🔴 3.4 Grid de depoimentos sem hierarquia
- 9 prints jogados em grid 3x3 (5+ MP4 do YouTube + 4 prints de WhatsApp).
- Sem contexto: nome da pessoa, profissão, antes/depois.
- Sem destaque do resultado quantificado.
- **Reorganizar:** 2-3 prints grandes + carrossel + 1 vídeo de transformação.

### 🔴 3.5 Oferta fraca — sem ancoragem
- Preço R$697 / 12x R$70,07 é mostrado em duas seções separadas.
- Sem comparar com o que a pessoa gastou tentando resolver sozinha.
- Sem mostrar ROI ("se você recuperar 2h/dia, em 30 dias são 60h").
- **Resolver:** criar card de oferta com âncora visual forte + ROI calculado.

### 🔴 3.6 10+ vídeos YouTube simultâneos
- Carrega 10 iframes (`<iframe class="elementor-video">`) na primeira dobra.
- Cada iframe custa ~500KB de JS + 1 request adicional.
- LCP + 2s só de carregar placeholders.
- **Resolver:** usar thumbnail estática + click-to-play (lazy).

### 🔴 3.7 FAQ técnico demais
- "QUANTO CUSTA", "QUAIS SÃO AS FORMAS DE PAGAMENTO" — não combate objeção,
  só transcreve a página de checkout.
- Falta FAQ sobre transformação: "Funciona para quem tem TDAH?",
  "Quanto tempo por dia preciso dedicar?".
- **Refazer:** 6 perguntas focadas em remover dúvida existencial.

### 🔴 3.8 "Para quem é" mal posicionado
- Aparece DEPOIS do módulo/conteúdo/bônus, ou seja, quando a pessoa já
  decidiu (ou já abandonou).
- 3 cards numerados (01, 02, 03) com texto longo — escaneabilidade zero.
- **Mover para ANTES da seção de módulos.**

### 🔴 3.9 Seção "COMO VOCÊ QUER ESTAR EM ALGUMAS SEMANAS?"
- Texto das opções 1 e 2 é derrotista sem gerar curiosidade.
- Opção 3 é literalmente um resumo da oferta (sem CTA).
- **Refazer:** comparar "Sem método" vs "Com método" como antes/depois visual.

---

## 4. Problemas Moderados (que podem ser otimizados)

| Item                       | Problema                                                              | Recomendação                                            |
| -------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------- |
| Elementor + Happy Addons   | CSS bloated, widgets proprietários difíceis de otimizar                | Migrar para Astro + Tailwind ou Next.js + Tailwind      |
| 20 scripts de tracking     | Bounce rate sobe com tracking pesado; CPL pode inflar por dados ruins | Consolidar em GTM server-side                          |
| Imagens sem lazy load      | 9 imagens de depoimento todas acima da fold                            | `loading="lazy"` em tudo abaixo do hero                |
| Toast de cidades          | Quebra GDPR/LGPD e Política Google Ads                                | Remover totalmente                                      |
| Cor `#000154` (azul marinho) | Pouco contraste com branco puro (#FFF)                                | Usar como background + texto claro, ou escurecer        |
| Ícones do método sem sentido | `far fa-heart`, `far fa-circle`, `far fa-building`, `fas fa-dice-six` | Substituir por ícones line-art coerentes com o tema     |
| Sem contagem regressiva    | "BÔNUS VAI ENCERRAR A QUALQUER MOMENTO" sem credibilidade             | Implementar countdown real + escassez honesta          |
| Logo branco sobre branco   | No mobile, o logo da Marília some em alguns momentos                  | Garantir sempre fundo escuro até a dobra               |
| `breadcrumb` Schema inútil | Só tem 2 níveis (Início → Curso)                                      | Remover ou complementar com mais contexto              |

---

## 5. Problemas Leves (polish)

- Falta skip-link "Pular para o conteúdo principal" (A11y)
- Falta aria-label em ícones decorativos
- Múltiplas tags `<b>` em vez de `<strong>` semântico
- CSS `wp-custom-css` poluindo o `<head>`
- Botões `<a>` sem `aria-label`, só texto
- Vídeos sem `preload="none"` e sem `poster`
- Google Fonts chamada sem `display=swap` explícito

---

## 6. O Que Fazer Bem (manter e amplificar)

✅ **Tom de voz da Marília** — acolhedor, direto, sem jargão corporativo.
✅ **Foco em "mãe/profissional sobrecarregada"** — conexão emocional real.
✅ **Garantia 7 dias** — presente e visualmente destacada.
✅ **Bônus bem definidos** — 2 bônus com valor percebido claro.
✅ **Prova por prints de WhatsApp** — gera credibilidade por ser "real".
✅ **Método com nome próprio** ("Sonhatividade") — bom para memorização.
✅ **Marca pessoal forte** — Marília é o ativo principal.

---

## 7. Notas Finais do Diagnóstico

A LP atual **não é descartável** — tem bons ativos de copy e marca. Mas
precisa de **cirurgia estrutural** (cortar 50% das seções, reordenar o
restante) e **reset técnico** (performance, acessibilidade, tracking).

Próximo passo: ver `02-persona-e-pesquisa.md` para entender quem está
comprando e alinhar toda a nova estrutura à jornada dessa pessoa.