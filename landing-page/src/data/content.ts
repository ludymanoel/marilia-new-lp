/**
 * Dados estruturados da LP — facilita manutenção, testes e i18n futuro.
 * Cada bloco representa uma seção/componente da página.
 */

// ============================================================
// CONFIGURAÇÃO GERAL
// ============================================================

export const siteConfig = {
  name: 'Marília Cordeiro',
  product: 'Produtividade Sincera',
  method: 'Organização Sincera',
  domain: 'produtividade-sincera',
  url: 'https://mariliacordeiro.com/produtividade-sincera/',
  checkoutUrl: 'https://pay.kiwify.com.br/kiBE39E?coupon=OFERTAESPECIAL',
  price: {
    current: 697,
    original: 1497,
    installments: 12,
    installmentValue: 70.07, // valor oficial da LP antiga
  },
  paymentMethods: ['Cartão até 12x', 'Boleto', 'PIX'],
  contact: {
    email: 'contato@mariliacordeiro.com',
    instagram: 'https://instagram.com/mariliacordeiro',
    youtube: 'https://youtube.com/@mariliacordeiro',
    linkedin: 'https://linkedin.com/in/mariliacordeiro',
    cnpj: '51.459.704/0001-68',
  },
  analytics: {
    ga4: 'G-YLQMHNNY87',
    googleAds: 'AW-11264843190',
    metaPixel: '678121427532401',
    tiktokPixel: 'CPU8E4JC77U3QO8GT0M0',
    gtm: 'GTM-5TZR7VT8',
  },
} as const;

// ============================================================
// HERO — copy alinhada com KV aprovado da LP original
// ============================================================

export const heroData = {
  eyebrow: 'Método Organização Sincera · +5.000 alunas',
  headline: {
    line1: 'Produtividade Sincera:',
    line2Highlight: 'realize seus objetivos e vença a procrastinação, a improdutividade e a sobrecarga.',
  },
  subheadline:
    'Menos tempo, mais ganhos. Acabe com os problemas de organização na sua vida e no seu negócio em 30 dias. Esqueça tudo o que você aprendeu sobre organização.',
  videoId: 'xnAKf96lepM',
  ctaPrimary: {
    text: 'QUERO A METODOLOGIA QUE FUNCIONA',
    href: '#oferta',
  },
  microcopy: 'Acesso imediato · 7 dias de garantia · Compra 100% segura',
  trustBadges: [
    'Acesso Imediato',
    '7 Dias de Garantia',
    '12x R$70,07',
    '+5.000 Alunas',
  ],
} as const;

// ============================================================
// BAR DE PROVA SOCIAL
// ============================================================

export const socialProofBarData = {
  headline: 'A confiança de quem já transformou milhares de rotinas',
  metrics: [
    { value: '+5.000', label: 'Alunas formadas' },
    { value: '+12', label: 'Anos de método' },
    { value: '4.9/5', label: 'Satisfação' },
    { value: '8h', label: 'Conteúdo prático' },
  ],
} as const;

// ============================================================
// PROBLEMA (DOR)
// ============================================================

export const painPointsData = {
  eyebrow: 'Você se reconhece em alguma dessas?',
  headline: 'A rotina virou uma lista infinita — e a culpa é diária.',
  cards: [
    {
      icon: 'battery-low',
      title: 'Você começa o dia animada e termina exausta.',
    },
    {
      icon: 'notebook-x',
      title: 'Tem 3 planners abandonados que viraram peso de papel.',
    },
    {
      icon: 'heart-crack',
      title: 'Sente culpa quando tenta descansar.',
    },
    {
      icon: 'clock-alert',
      title: 'Fala “eu não tenho tempo” todo dia — mas o problema é outro.',
    },
  ],
  footerCta: 'Se você marcou pelo menos uma, continue ↓',
} as const;

// ============================================================
// SOLUÇÃO (TRANSFORMAÇÃO)
// ============================================================

export const beforeAfterData = {
  eyebrow: 'O antes e o depois',
  headline: 'Não é sobre fazer mais. É sobre fazer o que importa — sem se perder.',
  subheadline: 'A diferença não está no esforço. Está no método.',
  without: {
    label: 'Sem método',
    color: 'rose',
    items: [
      'Agenda cheia, mente acelerada.',
      'Trabalha o dia todo, não vê resultado.',
      'Compromissos que se acumulam.',
      'Descansa com culpa.',
      'Acorda com a sensação de que já está atrasada.',
    ],
  },
  withMethod: {
    label: 'Com Produtividade Sincera',
    color: 'emerald',
    items: [
      'Rotina sob medida, com margem pra imprevistos.',
      'Trabalho focado, resultado visível.',
      'Compromissos com hora de começar e de parar.',
      'Descansa porque rendeu.',
      'Acorda sabendo o que importa hoje.',
    ],
  },
  cta: 'Quero esse antes e depois pra mim →',
} as const;

// ============================================================
// QUEM É MARÍLIA — dados oficiais da LP antiga
// ============================================================

export const aboutMariliaData = {
  eyebrow: 'Quem vai te guiar',
  headline: 'Marília já ajudou grandes empresas e profissionais a alcançarem resultados extraordinários.',
  paragraphs: [
    'Especialista em organização e gestão do tempo, com uma trajetória que combina resultados práticos e impacto direto na vida de seus clientes. Ao longo de sua carreira, já ajudou empresas a economizarem mais de R$100 mil por mês, implementando técnicas simples e eficazes de organização.',
    'Além disso, Marília tem experiência em otimizar equipes de mais de 100 funcionários, ajudando empresas a aumentarem seu faturamento e gerirem suas operações de forma estratégica e produtiva. Tudo isso sem complicações — porque sua abordagem é prática, acessível e comprovada.',
    'Mas não para por aí: Marília não apenas transformou empresas, ela também ajudou milhares de pessoas a retomar o controle de suas rotinas, conquistando mais tempo, mais clareza e resultados com qualidade de vida. E sabe por quê? Porque a organização mudou a vida dela — e ela acredita que pode mudar a sua também.',
  ],
  stats: [
    { value: 'R$100k+', label: 'economizados/mês em empresas' },
    { value: '+100', label: 'funcionários em equipes otimizadas' },
    { value: '+5.000', label: 'pessoas transformadas' },
  ],
  photo: {
    src: '/images/marilia-2024.jpg',
    alt: 'Marília Cordeiro — criadora do Método Organização Sincera',
    width: 640,
    height: 960,
  },
  outroDescription: 'Já fui engenheira, trainee, startupeira e gestora. Hoje, aprendi a usar menos rótulos e explorar temas diversos que me fascinam: desenvolvimento humano, empreendedorismo, educação, tecnologia e produtividade. Além de professora, consultora e palestrante, sou também facilitadora da Fundação Estudar e mentora de projetos de inovação.',
} as const;

// ============================================================
// MÉTODO (4 PILARES)
// ============================================================

export const methodPillarsData = {
  eyebrow: 'O método em 4 pilares',
  headline: 'Especialista em simplificar — vai virar você.',
  subheadline:
    'Quatro passos testados em mais de 5.000 pessoas. Não é força de vontade. É arquitetura da rotina com base na fórmula SONHA.',
  pillars: [
    {
      number: '01',
      title: 'Desenhe',
      description:
        'Mapeie seus sonhos e o que precisa acontecer pra eles virarem realidade. Sem isso, qualquer método vira mais uma tentativa.',
      icon: 'pencil',
    },
    {
      number: '02',
      title: 'Simplifique',
      description:
        'Corte o que não é essencial. Você não precisa fazer mais — precisa fazer o que importa.',
      icon: 'funnel',
    },
    {
      number: '03',
      title: 'Estruture',
      description:
        'Monte uma rotina sob medida, com espaço pra imprevistos e para viver.',
      icon: 'blocks',
    },
    {
      number: '04',
      title: 'Ative',
      description:
        'O efeito dominó começa: uma decisão certa puxa a próxima.',
      icon: 'domino',
    },
  ],
} as const;

// ============================================================
// PARA QUEM É
// ============================================================

export const whoIsForData = {
  eyebrow: 'Esse método é pra você que…',
  headline: 'Especialista em simplificar? A gente também é.',
  cards: [
    {
      avatar: 'carla',
      title: 'Já tentou planners, apps e cursos',
      description:
        '— mas nada durou mais de 2 semanas. Você não precisa de mais disciplina. Precisa de um sistema que respeite como você funciona.',
    },
    {
      avatar: 'renata',
      title: 'Sente que não tem tempo nem pra começar',
      description:
        'um método novo. O Produtividade Sincera foi desenhado pra 30 minutos por dia. As aulas têm de 5 a 15 minutos.',
    },
    {
      avatar: 'julia',
      title: 'Quer resultados visíveis em 30 dias',
      description:
        '— sem virar a vida do avesso. Em quatro semanas você vai sentir a diferença na energia, no foco e no tempo livre.',
    },
  ],
  footerCta: 'Se você se reconheceu, continue ↓',
} as const;

// ============================================================
// MÓDULOS DO CURSO
// ============================================================

export const courseModulesData = {
  eyebrow: 'O que está incluso',
  headline: '8 horas de conteúdo, no seu ritmo, no seu celular ou notebook.',
  subheadline: 'Aulas curtas, ferramentas práticas, aplicação imediata.',
  modules: [
    {
      number: '01',
      title: 'Mapeamento',
      duration: '1h 10min',
      description: 'Diagnóstico honesto da sua rotina atual — sem julgamento, com clareza.',
      lessons: [
        'Por que você não consegue manter uma rotina (e o que fazer)',
        'Auditoria completa das suas 24 horas',
        'Identificando seus vazamentos de tempo e energia',
        'Definindo o que realmente importa pra você',
      ],
    },
    {
      number: '02',
      title: 'Sonhatividade',
      duration: '1h 25min',
      description: 'Do sonho ao plano: a fórmula exclusiva do método.',
      lessons: [
        'A diferença entre sonho e objetivo',
        'A fórmula SONHA (Sonhar, Organizar, Narrar, Haver, Agir)',
        'Construindo seu mapa de 12 meses',
        'Como dividir grandes sonhos em ações diárias',
      ],
    },
    {
      number: '03',
      title: 'Estrutura',
      duration: '1h 40min',
      description: 'Montando sua rotina sob medida — com espaço pra imprevistos.',
      lessons: [
        'O sistema de blocos da Organização Sincera',
        'Sua rotina ideal em 90 minutos',
        'Criando seus rituais de início e fim',
        'Margem para imprevistos (sem culpa)',
      ],
    },
    {
      number: '04',
      title: 'Hábitos',
      duration: '1h 20min',
      description: 'Como criar novos hábitos — e manter mesmo quando a motivação acaba.',
      lessons: [
        'A ciência do comportamento que ninguém te explicou',
        'Empilhamento de hábitos na prática',
        'O que fazer quando você "quebra" o hábito',
        'Recuperação rápida sem efeito cascata',
      ],
    },
    {
      number: '05',
      title: 'Foco',
      duration: '1h 15min',
      description: 'Técnicas pra vencer a procrastinação e o perfeccionismo.',
      lessons: [
        'Por que procrastinamos (não é preguiça)',
        'A regra dos 2 minutos',
        'Foco profundo em tempos curtos',
        'Como dizer não com elegância',
      ],
    },
    {
      number: '06',
      title: 'Manutenção',
      duration: '1h 10min',
      description: 'Ajustes contínuos sem culpa — pra vida seguir mudando sem você perder o controle.',
      lessons: [
        'Revisões semanais em 15 minutos',
        'O que mudar quando a vida muda',
        'Quando (e como) pausar sem recomeçar do zero',
        'A cultura da melhoria contínua',
      ],
    },
  ],
  totalDuration: '8 horas',
  cta: 'Quero acesso aos 6 módulos',
} as const;

// ============================================================
// BÔNUS — copy alinhada com KV aprovado (Lucas Veríssimo, Paula Furlan, Tássia Garcia)
// ============================================================

export const bonusesData = {
  eyebrow: 'Achou que tinha acabado?',
  headline: 'Além do curso Produtividade Sincera, você também vai receber 2 bônus exclusivos.',
  subheadline: 'Conteúdo extra pra aprofundar o método.',
  bonuses: [
    {
      badge: 'Bônus 1',
      title: 'Aulas com parceiros',
      value: 'R$ 497',
      description:
        'Aprenda a calcular sua hora de trabalho emocional com a orientação de Lucas Veríssimo, mentor especializado em profissionais autônomos e negócios criativos. Receba dicas valiosas sobre organização de home office em uma aula exclusiva com Paula Furlan, uma personal organizer especialista no setor de luxo. Além disso, explore estratégias mentais para realizar o que precisa com o método Ammar de Tássia Garcia, psicóloga e expert em mentalidade.',
      includes: [
        'Aula 1: Hora de trabalho emocional — Lucas Veríssimo',
        'Aula 2: Organização de home office — Paula Furlan',
        'Aula 3: Estratégias mentais — Tássia Garcia (método Ammar)',
      ],
    },
    {
      badge: 'Bônus 2',
      title: 'Planners Organização Sincera',
      value: 'R$ 197',
      description:
        'Aprenda como utilizar os Planners Organização Sincera: físico ou digital. Veja como essas ferramentas podem facilitar a execução do seu processo, seguindo o passo a passo que você aprenderá no curso.',
      includes: [
        'Versão digital (Notion + PDF)',
        'Versão física pra imprimir',
        'Templates de revisão semanal e mensal',
        'Acesso vitalício aos arquivos',
      ],
    },
  ],
  totalValue: 'R$ 694 em bônus inclusos',
} as const;

// ============================================================
// DEPOIMENTOS — Dados REAIS da LP oficial
// 6 vídeos do YouTube + 10 prints WhatsApp de alunas
// ============================================================

export const videosTestimonialsData = [
  { id: '7Zl_QvXu0Yw', title: 'Depoimento 1 — Aluna Organização Sincera', startAt: 274 },
  { id: 't-yhDktKi7E', title: 'Depoimento 2 — Aluna Organização Sincera', startAt: 52 },
  { id: 'tsf7_qWDUGA', title: 'Depoimento 3 — Aluna Organização Sincera', startAt: 6 },
  { id: '9JHwge4SPE0', title: 'Depoimento 4 — Aluna Organização Sincera', startAt: 1 },
  { id: 'M6Tz0iODlQg', title: 'Depoimento 5 — Aluna Organização Sincera', startAt: 1 },
  { id: '6eEJ-hDJqc0', title: 'Depoimento 6 — Aluna Organização Sincera', startAt: 0 },
] as const;

export const whatsappTestimonialsData = [
  { src: '/images/depoimentos/01.jpeg', alt: 'Depoimento WhatsApp 1' },
  { src: '/images/depoimentos/03.jpeg', alt: 'Depoimento WhatsApp 2' },
  { src: '/images/depoimentos/04.jpeg', alt: 'Depoimento WhatsApp 3' },
  { src: '/images/depoimentos/05.jpeg', alt: 'Depoimento WhatsApp 4' },
  { src: '/images/depoimentos/06.jpeg', alt: 'Depoimento WhatsApp 5' },
  { src: '/images/depoimentos/07.jpeg', alt: 'Depoimento WhatsApp 6' },
  { src: '/images/depoimentos/08.jpeg', alt: 'Depoimento WhatsApp 7' },
  { src: '/images/depoimentos/09.jpeg', alt: 'Depoimento WhatsApp 8' },
  { src: '/images/depoimentos/10.jpeg', alt: 'Depoimento WhatsApp 9' },
] as const;

export const testimonialsData = {
  eyebrow: 'Quem fez, conta',
  headline: 'Não sou só eu. Veja como meus alunos estão hoje.',
  introduction:
    'O método coleciona milhares de prints de pessoas que tinham os mesmos problemas de organização e procrastinação que você. Te garanto que, dessa vez, você nunca mais vai precisar tentar outro caminho de novo.',
  featured: {
    image: '/images/depoimentos/06.jpeg',
    caption: 'Print real de WhatsApp de aluna da Marília',
  },
  footer: 'Mais de 5.000 alunas. Mais de 5.000 histórias. A próxima pode ser a sua.',
} as const;

// ============================================================
// OFERTA — baseada no KV aprovado (R$ 1.497 → R$ 697 / 12x R$ 70,07)
// ============================================================

export const offerData = {
  eyebrow: 'Resumo do que você vai receber',
  headline: 'O CURSO PRODUTIVIDADE SINCERA É COMPROVADO, SEGURO E APENAS COM O QUE REALMENTE IMPORTA.',
  subheadline: '',
  anchor: 'DE R$ 1.497 POR',
  price: {
    main: '12x R$ 70,07',
    secondary: 'ou R$ 697 à vista',
  },
  includes: [
    'Metodologia Organização Sincera testada e aprovada por mais de 5.000 pessoas',
    'Estratégias com a fórmula da Sonhatividade, que vão desde o desenho dos seus sonhos e planejamento de longo prazo até uma nova rotina aplicada à sua realidade de hoje',
    'Passo a passo de como percorrer o caminho da gestão do tempo com as atividades necessárias, na ordem exata para você fluir no seu processo',
    'Estratégias para criação de novos Hábitos, de como vencer a Procrastinação e corrigir seu comportamento para atingir seus objetivos',
    '7 dias para testar ou seu dinheiro de volta',
  ],
  cta: {
    text: 'COMPRAR AGORA',
    href: siteConfig.checkoutUrl,
  },
  microcopy: 'Acesso imediato após o pagamento · 7 dias de garantia',
  countdown: {
    label: 'Oferta encerra em',
    durationHours: 24,
  },
  paymentMethods: [
    { name: 'Cartão', icon: 'card', detail: 'até 12x' },
    { name: 'Boleto', icon: 'barcode', detail: 'à vista' },
    { name: 'PIX', icon: 'pix', detail: 'à vista' },
  ],
} as const;

// ============================================================
// GARANTIA
// ============================================================

export const guaranteeData = {
  headline: 'Se não funcionar pra você, devolvemos seu dinheiro. Sem letras miúdas.',
  paragraphs: [
    'Você tem 7 dias inteiros pra mergulhar no método. Assistir às aulas, testar as ferramentas, aplicar na sua rotina.',
    'Se em qualquer momento dentro desses 7 dias você sentir que o Produtividade Sincera não é pra você, basta pedir o reembolso. Devolvemos 100% do valor, sem perguntas, sem burocracia.',
  ],
  cta: 'Começar sem risco →',
  ctaHref: '#oferta',
  seal: {
    title: 'Garantia 7 dias',
    subtitle: '100% do seu dinheiro de volta',
  },
} as const;

// ============================================================
// FAQ — 7 Perguntas OFICIAIS da LP antiga
// ============================================================

export const faqData = {
  eyebrow: 'Dúvidas frequentes',
  headline: 'Tira-dúvidas frequentes',
  questions: [
    {
      q: 'QUANTO CUSTA O CURSO PRODUTIVIDADE SINCERA?',
      a: 'O valor do método (módulos completos + bônus) é de apenas R$ 697, ou 12 vezes R$ 70,07.',
    },
    {
      q: 'QUAIS SÃO AS FORMAS DE PAGAMENTO?',
      a: 'Eu disponibilizo TODAS as formas de pagamento possíveis, ou seja, pagamento no cartão em até 12x, pagamento no boleto, PayPal e até PIX, se você ficar mais confortável.',
    },
    {
      q: 'COMO VOU ACESSAR O MÉTODO? É TUDO ONLINE?',
      a: 'Após a confirmação da compra você receberá no seu e-mail acesso à nossa plataforma online com todos os módulos e videoaulas disponíveis. Você precisará apenas de um dispositivo com acesso à internet para assistir e colocar a nossa metodologia em prática quando e onde desejar.',
    },
    {
      q: 'O CURSO É PARA INICIANTES OU PESSOAS MUITO DESORGANIZADAS?',
      a: 'O Produtividade Sincera é o MELHOR lugar para você começar a se organizar! Ele inclui toda a minha metodologia, desde o desenho de uma nova rotina até o acompanhamento do processo, incluindo também o desenvolvimento de melhores hábitos e como executar melhor suas atividades, com dicas e ferramentas necessárias para te acompanhar em todo o processo. Você vai percorrer o caminho da gestão do tempo de forma mais fluida e aprendendo todo o passo a passo, sem ficar perdendo tempo com erros bobos no caminho. O melhor: eu acelero o seu aprendizado trazendo o que funciona, de forma simples e enxuta. Você não precisa conhecer tudo sobre organização e produtividade. Eu já estudo muito e trabalho com isso por você. Aqui, eu selecionei o que você precisa saber. As aulas são curtas e o curso tem o total de 8h exatamente para que você possa realizá-lo e ficar satisfeito com o seu investimento, inclusive de tempo! 😉',
    },
    {
      q: 'EU JÁ ESTUDEI MUITO SOBRE PRODUTIVIDADE E JÁ FIZ ALGUNS CURSOS SOBRE O TEMA. O QUE ESSE TEM DE DIFERENTE?',
      a: 'Eu! Acredite, eu também já estudei muito, já li e fiz vários cursos sobre o tema. Claro, sempre tem algo que eu possa aprender e por isso não paro de estudar. Mas a verdade é que, até hoje, onde eu mais aprendi foi na prática: minha e com meus clientes. Entendendo as principais dúvidas e percebendo como eu costumo resolver na minha vida, a partir de insights próprios e de estudos múltiplos. A prática, os estudos e a melhoria constante me ajudaram a construir o Produtividade Sincera, que tem hoje a minha metodologia exclusiva. Os primeiros módulos possuem aulas e conceitos que você não encontrará em nenhum outro lugar, são exclusivos. Os últimos módulos são um compilado dos melhores conceitos que eu encontrei nos meus estudos e que acredito que vocês deveriam conhecer. Sem excessos, apenas o essencial para que você atinja a sua produtividade de forma mais realista, sincera e eficiente.',
    },
    {
      q: 'POSSO FAZER O CURSO PELO CELULAR?',
      a: 'Sim, o curso pode ser acessado por qualquer dispositivo que possui acesso à internet. Isso inclui tablet, celular, desktop, notebook e Smart TV. Mas eu recomendo fortemente que você assista às aulas a partir de um desktop ou notebook porque gera mais concentração e menos interrupção. Assim como tarefas de trabalho devem ser direcionadas para o seu computador. É uma boa forma de você começar a praticar.',
    },
    {
      q: 'POR QUANTO TEMPO TEREI ACESSO AO CURSO?',
      a: 'Você terá acesso ao programa por 1 ano (12 meses), a partir da data de aprovação da sua compra. Dentro desse período, você poderá rever todos os conteúdos quantas vezes quiser.',
    },
  ],
} as const;

// ============================================================
// CTA FINAL
// ============================================================

export const finalCtaData = {
  headline: 'Está dentro de você. Só falta o método.',
  subheadline:
    'Você pode continuar improvisando — ou pode começar hoje, com o passo a passo que +5.000 pessoas já aplicaram.',
  cta: {
    text: 'Quero começar agora',
    href: siteConfig.checkoutUrl,
  },
  microcopy: 'Acesso imediato · 7 dias de garantia · Compra 100% segura',
} as const;

export type HeroData = typeof heroData;
export type PainPoint = (typeof painPointsData.cards)[number];
export type Module = (typeof courseModulesData.modules)[number];
export type Testimonial = (typeof videosTestimonialsData)[number];
export type Pillar = (typeof methodPillarsData.pillars)[number];
export type Bonus = (typeof bonusesData.bonuses)[number];
export type Persona = (typeof whoIsForData.cards)[number];
export type FAQ = (typeof faqData.questions)[number];