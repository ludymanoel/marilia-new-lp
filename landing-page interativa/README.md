# landing page interativa

Página única em `index.html`, sem build e sem dependências externas. O HTML mantém CSS e JavaScript inline para facilitar publicação direta e carrega fontes/imagens locais pela pasta `assets/`.

## estrutura da página

A LP foi reorganizada como um website editorial/profissional, não mais como um card isolado:

- `header.site-header`: logo real da Marília Cordeiro.
- `section.hero`: breadcrumb preenchido, título, introdução, credencial curta da Marília, CTA `ir direto para o quiz`, CTA `entender a lógica` e foto vertical em card profissional.
- `#metodo`: seção textual real com a sequência `direção → prioridade → tempo → constância`; o CTA do hero aponta para esta explicação, não para a foto.
- `#quiz`: seção integrada com contexto, tela de abertura, quiz interativo, progresso/checklist e card/avatar da Marília acompanhando as perguntas.
- `#resultado`: continuação da página com diagnóstico, embed de vídeo quando houver URL ou recomendação textual profissional quando não houver, ponte diagnóstico→oferta, oferta, seção “O que está incluso”, bônus, depoimentos oficiais em prints, garantia, FAQ e última chamada.
- `footer.site-footer`: rodapé institucional oficial com logo, links institucionais, legais e redes.

Âncoras úteis: `#top`, `#metodo`, `#quiz` e `#resultado`.

## direção visual

A base visual atual busca um tom mais profissional/premium e editorial alinhado à landing Astro original: navy e off-white predominam, amarelo aparece como CTA pill com brilho, azul/ciano/magenta aparecem em gradientes radiais, cards brancos translúcidos e padrões/fractais discretos. A fonte local é Config Rounded via `@font-face`.

## assets locais

Os arquivos necessários foram copiados para `assets/` para que o deploy estático da LP interativa não dependa da pasta Astro original:

- `assets/images/logo-mc-primary.png`: logo usado no header.
- `assets/images/logo-mc.png`: variação de logo disponível para troca manual.
- `assets/images/logo-white.svg`, `assets/images/logo-blue.svg`: variações de logo disponíveis para troca manual.
- `assets/images/logo-mc-fractal-color.png`: fractal/pattern discreto nos cards.
- `assets/images/marilia-2024.webp`: foto principal do hero.
- `assets/images/marilia-perfil.webp`: retrato/avatar usado no quiz.
- `assets/images/marilia-site.webp`: foto extra disponível para substituir hero/quiz se desejado.
- `assets/images/mockups/curso-1.webp`: mockup lateral compacto do curso na seção “O que está incluso”.
- `assets/images/mockups/bonus1.webp` e `assets/images/mockups/bonus2.webp`: mockups dos bônus.
- `assets/images/depoimentos/01.webp`, `03.webp`, `04.webp`, `05.webp`, `06.webp`, `07.webp`, `08.webp`, `09.webp`, `10.webp`: prints oficiais usados em “E por WhatsApp também”.
- `assets/images/guarantee-seal.svg`, `assets/images/garantia-7-dias.gif`, `assets/images/original-garantia-7-dias.gif`, `assets/images/security-seal.webp` e `assets/images/image-2.webp`: selo/garantia, segurança e formas de pagamento.
- `assets/fonts/ConfigRounded-Regular.otf`, `ConfigRounded-Medium.otf`, `ConfigRounded-Bold.otf`: fonte local.

Para trocar logo/fotos, substitua os arquivos mantendo o mesmo caminho/nome ou altere os `src` correspondentes em `index.html`. Prefira WebP para fotos e mantenha `alt` descritivo.

## como editar

Abra `index.html` e altere o objeto `CONFIG` no topo do JavaScript:

- `cores`: troca navy, azul, ciano, amarelo, magenta e off-white.
- `textos` e `perguntas`: muda abertura, botões, credencial curta, títulos e opções do quiz.
- `metodo`: edita a seção real do método e seus quatro passos.
- `textos.mostrarRespostasRegistradas`: deixe `false` na versão pública; use `true` apenas para teste interno.
- `textoDinamicoVideo`: muda o texto acima do vídeo para cada perfil.
- `teseFinal`: edita a tese da tela final, a sequência do método (`direção → prioridade → tempo → constância`) e a amarração de custo de continuar no mesmo ciclo.
- `diagnosticos`: edita o resumo textual discreto exibido antes do vídeo/oferta para cada perfil.
- `recomendacaoTextual`: edita o fallback textual profissional exibido no lugar do vídeo quando `videos.[perfil].url` estiver vazio.
- `roteirosVideo`: guarda a estrutura editável para gravação dos vídeos personalizados de ~60s por perfil: nomear resposta, reenquadrar, credencial curta, apresentar curso e CTA.
- `videos`: preencha `url` com link do YouTube ou Vimeo e ajuste `titulo`.
- `oferta`: edite eyebrow, título, preço atual, preço anterior, parcelamento, lista “Você recebe”, selos, imagem de formas de pagamento, ponte diagnóstico→oferta, texto do botão, microcopy e link de checkout.
- `blocos`: edite ou remova blocos finais mudando `ativo` para `false`.
- `blocos.oQueTemDentro`: controla a seção “O que está incluso” da oferta. Edite `titulo`, `intro`, `apoio`, `total`, `ctaTexto` e os `grupos`. Cada grupo tem `titulo` e uma lista de `modulos`; cada módulo usa `numero`, `titulo`, `descricao` e `aulas`.
- `blocos.bonus`: controla os dois bônus, incluindo eyebrow, título, subtexto, descrição, bullets e imagens.
- `blocos.depoimentos`: usa apenas imagens oficiais de prints, sem depoimento textual inventado. Edite `prints` para alterar/remover arquivos.
- `blocos.garantia`: controla selo, eyebrow, título, textos e CTA da garantia de 7 dias.
- `blocos.faq`: controla as 7 perguntas/respostas em `<details>`.
- `blocos.ultimaChamada`: controla a última chamada antes do rodapé.
- `blocos.rodape`: controla descrição institucional, links legais/institucionais, redes, CNPJ e copyright.

### Como editar os módulos do conteúdo incluso

No `CONFIG`, procure por `blocos.oQueTemDentro.grupos`. A estrutura é:

```js
{
  titulo: 'Planejamento',
  modulos: [
    {
      numero: '03',
      titulo: 'Planejamento a Longo Prazo',
      descricao: 'Transforme seus grandes sonhos em um mapa de 12 meses — com direção, sem pressa.',
      aulas: [
        'Desenhando seu mapa de 12 meses',
        'Dividindo grandes sonhos em ações diárias'
      ]
    }
  ]
}
```

Mantenha os números como texto (`'01'`, `'02'`...) para preservar o zero à esquerda. O CTA secundário dessa seção usa `oferta.link`, então continua apontando para o mesmo checkout real.

## vídeos

Enquanto `url` estiver vazio, a página não exibe placeholder visual: ela renderiza uma recomendação textual profissional por perfil, editável em `recomendacaoTextual`. Ao preencher uma URL válida de YouTube ou Vimeo, o embed aparece automaticamente na proporção 9:16.

Os vídeos são opcionais. Use `roteirosVideo` como guia para gravar cada versão por perfil e só preencha `videos.[perfil].url` quando houver um link real. A página não simula vídeo existente nem apresenta estado inacabado.

## checklist/progresso

No mobile, o checklist aparece compacto e horizontal abaixo da barra de progresso. Em telas maiores, ele passa para uma coluna lateral sticky dentro da seção do quiz, mantendo a pergunta em destaque à direita.

## CTAs e navegação

O CTA `ir direto para o quiz` usa `data-start-link`: ele rola até `#quiz`, reinicia o estado e já abre a primeira pergunta. O CTA `entender a lógica` aponta para a seção textual `#metodo`. O botão interno `começar` usa `data-start` com a mesma lógica do quiz. Ao completar as 4 perguntas, a página revela `#resultado` e rola para a área de diagnóstico/oferta.

O JavaScript respeita `prefers-reduced-motion`: rolagem suave só é usada quando o usuário não solicitou redução de movimento. O foco também é movido para o título da pergunta/resultado para melhorar navegação por teclado e leitores de tela.

## checkout

O link atual em `oferta.link` aponta para o checkout Kiwify real: `https://pay.kiwify.com.br/vLg5OEC`. Os CTAs principais da oferta e da última chamada usam esse mesmo valor. Se a página de pagamento mudar, atualize `oferta.link` e o `href` inicial do CTA final (`#offer-link`) no `index.html`.

A garantia está em `CONFIG.blocos.garantia.texto` e comunica 7 dias de reembolso pela plataforma. Ajuste esse texto no `CONFIG` se a política comercial mudar.

## respostas do quiz

As respostas ficam em `state.respostas` e são gravadas internamente no final junto com o perfil. A versão pública oculta “respostas registradas” por padrão via `textos.mostrarRespostasRegistradas: false`. O ponto de integração está marcado no código com `// TODO: enviar respostas para [ferramenta]`.
