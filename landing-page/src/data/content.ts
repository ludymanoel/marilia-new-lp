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
    installmentValue: 58.08, // 697 / 12 (arredondado)
  },
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
// HERO
// Tom de voz: acessível, profissional, pragmático, prático, objetivo,
// resolutivo e sincero. Sem exageros, sem mimimi. Caloroso, não coercivo.
// ============================================================

export const heroData = {
  eyebrow: 'Método Organização Sincera · +5.000 alunas',
  headline: {
    line1: 'Organize a caixa.',
    line2Highlight: 'Pra pensar dentro e fora dela.',
  },
  subheadline:
    'O Método Produtividade Sincera é o passo a passo pra você parar de improvisar a rotina e começar a viver com mais clareza, foco e tempo pro que importa.',
  videoId: 'xnAKf96lepM',
  ctaPrimary: {
    text: 'Quero simplificar minha rotina',
    href: '#oferta',
  },
  microcopy: 'Acesso imediato · 7 dias de garantia · Compra segura',
  trustBadges: [
    'Acesso Imediato',
    '7 Dias de Garantia',
    '12x R$58,08',
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
// QUEM É MARÍLIA
// ============================================================

export const aboutMariliaData = {
  eyebrow: 'Quem vai te guiar',
  headline: '+12 anos organizando rotinas — inclusive de grandes empresas.',
  paragraphs: [
    'Engenheira por formação, especialista em organização e gestão do tempo por escolha. Já otimizei rotinas de times com mais de 100 pessoas e ajudei empresas a economizarem mais de R$100 mil por mês.',
    'Hoje, dedico meu tempo a ensinar mulheres reais a recuperarem o controle da própria rotina — com método, não com força de vontade.',
  ],
  stats: [
    { value: '+12', label: 'anos otimizando rotinas' },
    { value: 'R$100k+', label: 'economizados/mês em empresas' },
    { value: '+5.000', label: 'pessoas formadas' },
  ],
  // Foto deve ser otimizada e servida em srcset
  photo: {
    src: '/images/marilia-perfil.webp',
    alt: 'Marília Cordeiro — especialista em organização e produtividade',
    width: 480,
    height: 600,
  },
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
// BÔNUS
// ============================================================

export const bonusesData = {
  eyebrow: 'E tem mais',
  headline: 'Dois bônus pra ir além do método.',
  subheadline: 'Conteúdo complementar pra acelerar seus resultados.',
  bonuses: [
    {
      badge: 'Bônus 1',
      title: 'Aulas com especialistas parceiras',
      value: 'R$ 497',
      description:
        '3 aulas extras com quem entende de verdade: Lucas Veríssimo (hora emocional pra autônomos), Paula Furlan (organização de home office) e Tássia Garcia (mentalidade pra realizar).',
      includes: [
        'Aula 1: Como calcular sua hora de trabalho emocional',
        'Aula 2: Organização de home office que funciona',
        'Aula 3: Estratégias mentais pra fazer o que precisa',
      ],
    },
    {
      badge: 'Bônus 2',
      title: 'Planners Organização Sincera',
      value: 'R$ 197',
      description:
        'Os planners oficiais do método — físicos ou digitais, prontos pra usar no primeiro dia. Simples assim.',
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
// DEPOIMENTOS
// ============================================================

export const testimonialsData = {
  eyebrow: 'Quem fez, conta',
  headline: 'Transformações reais de quem aplicou o método.',
  featured: {
    quote:
      'Em 30 dias, recuperei 2h por dia. Hoje tenho tempo pra academia, pra ler, pra jantar com meu marido sem o celular do lado. O método não mudou só minha rotina — mudou meu casamento.',
    author: 'Carla M.',
    role: 'Advogada, 38 anos · São Paulo',
  },
  grid: [
    {
      quote: 'Parei de me sentir culpada quando descanso. Só isso já vale o investimento.',
      author: 'Vanessa R.',
      role: 'Empresária, 42 · Rio de Janeiro',
    },
    {
      quote: '3 planners abandonados. 1 método aplicado. A diferença é o passo a passo.',
      author: 'Roberta C.',
      role: 'Psicóloga, 35 · Belo Horizonte',
    },
    {
      quote: 'Em 2 semanas meu time parou de me perguntar "que dia é a reunião?".',
      author: 'Marcela F.',
      role: 'CEO de agência, 41 · Curitiba',
    },
    {
      quote: 'Achava que era preguiça. Era falta de método. Hoje produzo 3x mais descansada.',
      author: 'Juliana D.',
      role: 'Designer, 33 · Porto Alegre',
    },
    {
      quote: 'Recuperei 1h30 por dia. Em 1 mês são 45h. É quase um emprego兼职.',
      author: 'Patrícia A.',
      role: 'Consultora, 39 · Recife',
    },
    {
      quote: 'O bônus do planner sozinhos vale mais que o curso inteiro.',
      author: 'Lorena S.',
      role: 'Médica, 36 · Salvador',
    },
  ],
  footer: '+5.000 alunas. +5.000 histórias. A próxima pode ser a sua.',
} as const;

// ============================================================
// OFERTA
// ============================================================

export const offerData = {
  eyebrow: 'Oferta especial — vagas limitadas',
  headline: 'Recupere seu tempo. Por menos do que você gasta por mês em delivery.',
  subheadline: 'O investimento se paga no primeiro mês — em energia, tempo e resultado.',
  anchor: 'De R$ 1.497 por',
  price: {
    main: '12x R$ 58,08',
    secondary: 'ou R$ 697 à vista',
  },
  includes: [
    '6 módulos completos (8h de conteúdo)',
    '2 bônus exclusivos (valor R$ 694)',
    'Acesso por 12 meses',
    'Comunidade de alunas',
    'Garantia incondicional de 7 dias',
  ],
  cta: {
    text: 'Quero começar agora',
    href: siteConfig.checkoutUrl,
  },
  microcopy: 'Acesso imediato após o pagamento · 7 dias de garantia',
  countdown: {
    label: 'Oferta encerra em',
    durationHours: 24, // reseta a cada 24h via cookie
  },
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
// FAQ
// ============================================================

export const faqData = {
  eyebrow: 'Tira-dúvidas',
  headline: 'Perguntas que toda pessoa prudente faz antes de comprar.',
  questions: [
    {
      q: 'Funciona pra quem tem TDAH ou se distrai fácil?',
      a: 'Sim. O método foi desenhado pra funcionar com rotinas caóticas, não apesar delas. Você vai aprender a montar uma estrutura que respeita seus ciclos de foco e usa seus picos de energia a favor — não contra.',
    },
    {
      q: 'Quanto tempo por dia preciso dedicar?',
      a: '30 minutos por dia são suficientes pra aplicar o método nos primeiros 30 dias. As aulas são curtas (5–15 min) e podem ser assistidas no celular. O passo a passo vai sendo implementado aos poucos, sem virar sua vida do avesso.',
    },
    {
      q: 'Posso fazer pelo celular?',
      a: 'Sim. A plataforma é responsiva e funciona em qualquer dispositivo com internet — smartphone, tablet, notebook, smart TV. Recomendamos começar pelo computador pra ter mais concentração, mas o celular é totalmente viável.',
    },
    {
      q: 'Por quanto tempo tenho acesso?',
      a: '12 meses a partir da data da compra. Dentro desse período, você pode rever todas as aulas quantas vezes quiser e baixar todos os materiais.',
    },
    {
      q: 'Como funciona a garantia?',
      a: 'Você tem 7 dias pra testar. Se decidir que não é pra você, basta enviar um email pro nosso suporte. Devolvemos 100% do valor em até 5 dias úteis, sem perguntas, sem burocracia.',
    },
    {
      q: 'Por que esse valor e não mais barato?',
      a: 'Porque o método foi testado por +5.000 pessoas, é baseado em +12 anos de experiência e entrega ferramentas práticas que custariam muito mais se fossem compradas separadas. O valor reflete o investimento necessário pra resultados reais — não é uma promoção relâmpago, é um curso sério com resultado sério.',
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
export type Testimonial = (typeof testimonialsData.grid)[number];
export type Pillar = (typeof methodPillarsData.pillars)[number];
export type Bonus = (typeof bonusesData.bonuses)[number];
export type Persona = (typeof whoIsForData.cards)[number];
export type FAQ = (typeof faqData.questions)[number];