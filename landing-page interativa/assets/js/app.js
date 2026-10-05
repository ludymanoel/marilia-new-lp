
    const CONFIG = {
      cores: {
        navy: '#000154',
        azulMedio: '#0678EA',
        ciano: '#3DDAE7',
        amarelo: '#FCC103',
        magenta: '#D3096E',
        offWhite: '#E8E6E7'
      },
      textos: {
        abertura: 'ei, que bom te ver por aqui! bora ver como está a sua situação?',
        botaoComecar: 'começar',
        voltar: 'voltar',
        erroSelecao: 'escolha uma resposta para continuar.',
        checklistPrefixo: 'passo',
        respostasRegistradas: 'respostas registradas',
        autoridade: 'Criado por Marília Cordeiro, especialista em organização e produtividade desde 2018.',
        mostrarRespostasRegistradas: false
      },
      metodo: {
        titulo: 'direção antes de cobrança. prioridade antes de correria.',
        intro: 'Produtividade Sincera organiza a rotina em uma ordem simples: primeiro você entende para onde quer ir, depois escolhe o que importa, desenha tempo possível e cria constância para semanas reais.',
        passos: [
          { titulo: 'direção', texto: 'clareza sobre o que precisa guiar suas escolhas agora.' },
          { titulo: 'prioridade', texto: 'menos ruído para escolher a próxima ação certa.' },
          { titulo: 'tempo', texto: 'uma semana possível, desenhada com realidade.' },
          { titulo: 'constância', texto: 'rituais simples para sustentar sem cobrança infinita.' }
        ]
      },
      perguntas: [
        {
          id: 'dia',
          titulo: 'como está o seu dia hoje?',
          opcoes: [
            { valor: 'incendio', texto: 'Apagando incêndio atrás de incêndio' },
            { valor: 'controle', texto: 'Corrido, mas sob controle' },
            { valor: 'cheio', texto: 'Cheio — e não sei se do que importa' },
            { valor: 'parado', texto: 'Parado. E isso me incomoda.' }
          ]
        },
        {
          id: 'trava',
          titulo: 'quando você tenta se organizar, onde você trava primeiro?',
          opcoes: [
            { valor: 'direcao', texto: 'Não sei direito o que eu quero pra mim', perfil: 'direcao' },
            { valor: 'prioridade', texto: 'Sei onde quero chegar, mas não sei por onde começar', perfil: 'prioridade' },
            { valor: 'tempo', texto: 'Sei o que fazer, mas não cabe no meu dia', perfil: 'tempo' },
            { valor: 'constancia', texto: 'Consigo começar, mas não sustento', perfil: 'constancia' }
          ]
        },
        {
          id: 'tempoTentando',
          titulo: 'há quanto tempo você tenta resolver isso sozinha?',
          opcoes: [
            { valor: 'agora', texto: 'Estou começando agora' },
            { valor: 'meses', texto: 'Alguns meses tentando' },
            { valor: 'ano', texto: 'Mais de um ano tentando sozinha' },
            { valor: 'normal', texto: 'Tanto tempo que virou normal' }
          ]
        },
        {
          id: 'custo',
          titulo: 'o que isso já te custou?',
          opcoes: [
            { valor: 'tempo_amor', texto: 'Tempo com quem eu amo' },
            { valor: 'saude_sono', texto: 'Saúde e sono' },
            { valor: 'dinheiro_oportunidades', texto: 'Dinheiro e oportunidades' },
            { valor: 'confianca', texto: 'Confiança em mim mesma' },
            { valor: 'todas', texto: 'Todas as anteriores' }
          ]
        }
      ],
      textoDinamicoVideo: {
        direcao: 'você respondeu que ainda não sabe direito o que quer pra si. deixa eu te falar sobre isso.',
        prioridade: 'você respondeu que sabe onde quer chegar, mas não sabe por onde começar. deixa eu te falar sobre isso.',
        tempo: 'você respondeu que sabe o que fazer, mas não cabe no seu dia. deixa eu te falar sobre isso.',
        constancia: 'você respondeu que consegue começar, mas não sustenta. deixa eu te falar sobre isso.'
      },
      teseFinal: {
        texto: 'não é falta de esforço, é ordem. antes de cobrar mais disciplina, você precisa organizar a sequência certa para decidir com mais clareza e sustentar o que importa.',
        metodo: 'método: direção → prioridade → tempo → constância',
        custo: 'o investimento é menor do que continuar pagando com cansaço, tentativas soltas e o mesmo ciclo se repetindo.'
      },
      diagnosticos: {
        direcao: 'o ponto de partida é dar nome ao que você quer construir agora. sem direção, qualquer tarefa parece urgente e a rotina vira reação.',
        prioridade: 'existe clareza sobre onde chegar, mas falta transformar isso em próxima ação. a prioridade certa reduz ruído e devolve movimento.',
        tempo: 'o problema não é só agenda cheia. é desenhar um dia possível para o que realmente precisa caber, sem depender de um cenário perfeito.',
        constancia: 'você já provou que consegue começar. o próximo passo é criar um sistema simples o bastante para atravessar semanas reais, não só dias ideais.'
      },
      recomendacaoTextual: {
        padrao: {
          etiqueta: 'seu diagnóstico em poucas palavras',
          titulo: 'não é falta de esforço, é ordem',
          texto: 'o próximo passo é organizar a sequência direção, prioridade, tempo e constância para sair do ciclo de tentativa solta e começar por um ajuste possível.'
        },
        direcao: {
          etiqueta: 'seu diagnóstico em poucas palavras',
          titulo: 'antes de fazer mais, você precisa decidir o que guia suas escolhas',
          texto: 'não é falta de esforço, é ordem. quando a direção está nebulosa, qualquer demanda parece urgente. comece dando nome ao que importa agora.'
        },
        prioridade: {
          etiqueta: 'seu diagnóstico em poucas palavras',
          titulo: 'você não precisa fazer tudo: precisa escolher a próxima coisa certa',
          texto: 'não é falta de esforço, é ordem. prioridade transforma clareza em movimento e reduz a sensação de estar sempre atrasada.'
        },
        tempo: {
          etiqueta: 'seu diagnóstico em poucas palavras',
          titulo: 'o seu dia precisa ser desenhado com realidade, não com culpa',
          texto: 'não é falta de esforço, é ordem. quando o tempo não comporta o essencial, a solução começa por uma semana possível.'
        },
        constancia: {
          etiqueta: 'seu diagnóstico em poucas palavras',
          titulo: 'constância nasce de sistema possível, não de cobrança infinita',
          texto: 'não é falta de esforço, é ordem. você já consegue começar; agora precisa de um jeito simples de sustentar em semanas reais.'
        }
      },
      roteirosVideo: {
        direcao: 'roteiro ~60s: 1) nomear a resposta: “você marcou que não sabe direito o que quer pra si”; 2) reenquadrar: isso não é confusão pessoal, é falta de direção organizada; 3) credencial curta: cite sua experiência ajudando mulheres a tirarem planos do campo mental; 4) apresentar o curso como sequência para transformar desejo em direção, prioridade, tempo e constância; 5) CTA: convidar para começar agora pelo botão.',
        prioridade: 'roteiro ~60s: 1) nomear a resposta: “você sabe onde quer chegar, mas não sabe por onde começar”; 2) reenquadrar: não falta vontade, falta hierarquia; 3) credencial curta; 4) apresentar o curso como método para escolher a próxima coisa certa; 5) CTA para entrar no Produtividade Sincera.',
        tempo: 'roteiro ~60s: 1) nomear a resposta: “você sabe o que fazer, mas não cabe no dia”; 2) reenquadrar: o dia precisa ser desenhado com realidade, não culpa; 3) credencial curta; 4) apresentar o curso como organização de direção, prioridade, tempo e constância; 5) CTA para começar.',
        constancia: 'roteiro ~60s: 1) nomear a resposta: “você começa, mas não sustenta”; 2) reenquadrar: constância nasce de sistema possível, não de cobrança infinita; 3) credencial curta; 4) apresentar o curso como sequência para manter o essencial vivo; 5) CTA para ir para o checkout.'
      },
      videos: {
        direcao:    { url: '', titulo: 'sobre direção' },
        prioridade: { url: '', titulo: 'sobre prioridade' },
        tempo:      { url: '', titulo: 'sobre tempo' },
        constancia: { url: '', titulo: 'sobre constância' }
      },
      oferta: {
        eyebrow: 'Resumo do que você vai receber',
        nomeCurso: 'O CURSO PRODUTIVIDADE SINCERA É COMPROVADO, SEGURO E APENAS COM O QUE REALMENTE IMPORTA.',
        preco: 'R$ 697',
        precoAnterior: 'De R$ 1.497',
        ancoragem: 'ou 12x R$ 70,07',
        segundaLinha: 'Acesso imediato após o pagamento · 7 dias de garantia',
        ponteDiagnostico: 'Se esse diagnóstico fez sentido, o próximo passo é aprender a organizar sua rotina nessa ordem — direção, prioridade, tempo e constância — sem depender de motivação, culpa ou agenda perfeita.',
        botao: 'COMPRAR AGORA',
        microcopy: 'Compra segura · checkout Kiwify · acesso imediato',
        link: 'https://pay.kiwify.com.br/vLg5OEC',
        pagamentoImagem: 'assets/images/image-2.webp',
        pagamentoAlt: 'Formas de pagamento aceitas',
        selos: ['Compra segura', '7 dias de garantia', 'Acesso imediato'],
        incluiTitulo: 'Você recebe:',
        inclui: [
          'Metodologia Organização Sincera testada e aprovada por mais de 5 mil pessoas;',
          'Estratégias com a fórmula da Sonhatividade, que vão desde o desenho dos seus sonhos e planejamento de longo prazo até uma nova rotina aplicada à sua realidade de hoje;',
          'Passo a passo de como percorrer o caminho da gestão do tempo com as atividades necessárias, na ordem exata para você fluir no seu processo;',
          'Estratégias para criação de novos Hábitos, de como vencer a Procrastinação e corrigir seu comportamento para atingir seus objetivos;',
          'Dois super Bônus inclusos para turbinar o seu progresso',
          '7 dias para testar ou seu dinheiro de volta.'
        ]
      },
      blocos: {
        oQueTemDentro: {
          ativo: true,
          titulo: 'O que está incluso',
          intro: '8 horas de conteúdo, no seu ritmo, no seu celular ou notebook.',
          apoio: 'Aulas curtas, ferramentas práticas, aplicação imediata.',
          total: 'Total: 8 horas de conteúdo prático',
          mockup: 'assets/images/mockups/curso-1.webp',
          mockupAlt: 'Mockup do curso Produtividade Sincera',
          ctaTexto: 'Quero acesso aos 10 módulos',
          grupos: [
            {
              titulo: 'Autoconhecimento',
              modulos: [
                {
                  numero: '01',
                  titulo: 'Sonhatividade',
                  descricao: 'Do sonho ao plano: a fórmula exclusiva do método.',
                  aulas: [
                    'A diferença entre sonho e objetivo',
                    'A fórmula SONHATIVIDADE',
                    'Construindo seu mapa de 12 meses',
                    'Como dividir grandes sonhos em ações diárias'
                  ]
                },
                {
                  numero: '02',
                  titulo: 'Autoconhecimento',
                  descricao: 'Diagnóstico honesto da sua rotina atual — sem julgamento, com clareza.',
                  aulas: [
                    'Por que você não consegue manter uma rotina (e o que fazer)',
                    'Auditoria completa das suas 24 horas',
                    'Identificando seus vazamentos de tempo e energia',
                    'Definindo o que realmente importa pra você'
                  ]
                }
              ]
            },
            {
              titulo: 'Planejamento',
              modulos: [
                {
                  numero: '03',
                  titulo: 'Planejamento a Longo Prazo',
                  descricao: 'Transforme seus grandes sonhos em um mapa de 12 meses — com direção, sem pressa.',
                  aulas: [
                    'Desenhando seu mapa de 12 meses',
                    'Dividindo grandes sonhos em ações diárias',
                    'Definindo marcos trimestrais realistas',
                    'Conectando o longo prazo à sua rotina atual'
                  ]
                },
                {
                  numero: '04',
                  titulo: 'Planejamento de rotina',
                  descricao: 'Montando sua rotina sob medida — com espaço pra imprevistos.',
                  aulas: [
                    'O sistema de blocos da Organização Sincera',
                    'Sua rotina ideal em 90 minutos',
                    'Criando seus rituais de início e fim',
                    'Margem para imprevistos (sem culpa)'
                  ]
                },
                {
                  numero: '05',
                  titulo: 'Gestão do Tempo',
                  descricao: 'Técnicas pra vencer a procrastinação e o perfeccionismo.',
                  aulas: [
                    'Por que procrastinamos (não é preguiça)',
                    'A regra dos 2 minutos',
                    'Foco profundo em tempos curtos',
                    'Como dizer não com elegância'
                  ]
                },
                {
                  numero: '06',
                  titulo: 'Funil do Planejamento',
                  descricao: 'Filtre compromissos e atividades para manter só o que gera resultado.',
                  aulas: [
                    'O que é o funil do planejamento',
                    'Cortando o que não é essencial',
                    'Ordenando atividades pelo impacto real',
                    'Sobrando espaço para o que importa'
                  ]
                },
                {
                  numero: '07',
                  titulo: 'Peneira da priorização',
                  descricao: 'Defina o que realmente importa pra você — e proteja seu tempo com elegância.',
                  aulas: [
                    'Definindo o que realmente importa pra você',
                    'Como dizer não com elegância',
                    'Priorizando sem culpa',
                    'Protegendo seu tempo do que não agrega'
                  ]
                }
              ]
            },
            {
              titulo: 'Comportamento',
              modulos: [
                {
                  numero: '08',
                  titulo: 'Comportamento',
                  descricao: 'Como criar novos hábitos — e manter mesmo quando a motivação acaba.',
                  aulas: [
                    'A ciência do comportamento que ninguém te explicou',
                    'Empilhamento de hábitos na prática',
                    'O que fazer quando você "quebra" o hábito',
                    'Recuperação rápida sem efeito cascata'
                  ]
                },
                {
                  numero: '09',
                  titulo: 'Ação!',
                  descricao: 'Da teoria à prática: comece agora e mantenha o ritmo, mesmo com pouco tempo.',
                  aulas: [
                    'A regra dos 2 minutos',
                    'Foco profundo em tempos curtos',
                    'Começando pequeno, agindo hoje',
                    'Mantendo o ritmo quando a motivação oscila'
                  ]
                },
                {
                  numero: '10',
                  titulo: 'Agora é com você',
                  descricao: 'Ajustes contínuos sem culpa — pra vida seguir mudando sem você perder o controle.',
                  aulas: [
                    'Revisões semanais em 15 minutos',
                    'O que mudar quando a vida muda',
                    'Quando (e como) pausar sem recomeçar do zero',
                    'A cultura da melhoria contínua'
                  ]
                }
              ]
            }
          ]
        },
        depoimentos: {
          ativo: true,
          eyebrow: 'Quem fez, conta',
          titulo: 'Não sou só eu. Veja como meus alunos estão hoje.',
          texto: 'O método coleciona milhares de prints de pessoas que tinham os mesmos problemas de organização e procrastinação que você. Te garanto que, dessa vez, você nunca mais vai precisar tentar outro caminho de novo.',
          subdivisao: 'E por WhatsApp também',
          prints: [
            { src: 'assets/images/depoimentos/01.webp', alt: 'Print de depoimento de aluno' },
            { src: 'assets/images/depoimentos/03.webp', alt: 'Print de depoimento de aluno' },
            { src: 'assets/images/depoimentos/04.webp', alt: 'Print de depoimento de aluno' },
            { src: 'assets/images/depoimentos/05.webp', alt: 'Print de depoimento de aluno' },
            { src: 'assets/images/depoimentos/06.webp', alt: 'Print de depoimento de aluno' },
            { src: 'assets/images/depoimentos/07.webp', alt: 'Print de depoimento de aluno' },
            { src: 'assets/images/depoimentos/08.webp', alt: 'Print de depoimento de aluno' },
            { src: 'assets/images/depoimentos/09.webp', alt: 'Print de depoimento de aluno' },
            { src: 'assets/images/depoimentos/10.webp', alt: 'Print de depoimento de aluno' }
          ]
        },
        bonus: {
          ativo: true,
          eyebrow: 'Achou que tinha acabado?',
          titulo: 'Além do curso Produtividade Sincera, você também vai receber 2 bônus exclusivos.',
          subtexto: 'Conteúdo extra pra aprofundar o método.',
          itens: [
            {
              badge: 'Bônus 1',
              titulo: 'Aulas com parceiros',
              imagem: 'assets/images/mockups/bonus1.webp',
              descricao: 'Aprenda a calcular sua hora de trabalho emocional com a orientação de Lucas Veríssimo, mentor especializado em profissionais autônomos e negócios criativos. Receba dicas valiosas sobre organização de home office em uma aula exclusiva com Paula Furlan, uma personal organizer especialista no setor de luxo. Além disso, explore estratégias mentais para realizar o que precisa com o método Ammar de Tássia Garcia, psicóloga e expert em mentalidade.',
              bullets: ['Aula 1: Hora de trabalho emocional — Lucas Veríssimo', 'Aula 2: Organização de home office — Paula Furlan', 'Aula 3: Estratégias mentais — Tássia Garcia (método Ammar)']
            },
            {
              badge: 'Bônus 2',
              titulo: 'Ebook do Planner Organização Sincera',
              imagem: 'assets/images/mockups/bonus2.webp',
              descricao: 'Aprenda como utilizar o Ebook do Planner Organização Sincera: físico ou digital. Veja como essa ferramenta pode facilitar a execução do seu processo, seguindo o passo a passo que você aprenderá no curso.',
              bullets: ['Versão digital (PDF)', 'Versão para imprimir', 'Templates de revisão semanal e mensal', 'Acesso vitalício aos arquivos']
            }
          ]
        },
        garantia: {
          ativo: true,
          selo: 'assets/images/original-garantia-7-dias.gif',
          seloAlt: 'Selo de garantia de 7 dias',
          eyebrow: 'Garantia 7 dias',
          titulo: 'Risco zero pra você.',
          textos: [
            'Você tem 7 dias inteiros pra mergulhar no método. Assistir às aulas, testar as ferramentas, aplicar na sua rotina.',
            'Se em qualquer momento dentro desses 7 dias você sentir que o Produtividade Sincera não é pra você, basta pedir o reembolso. Devolvemos 100% do valor, sem perguntas, sem burocracia.'
          ],
          cta: 'Começar sem risco →',
          href: '#oferta'
        },
        faq: {
          ativo: true,
          eyebrow: 'FAQ',
          titulo: 'Perguntas frequentes',
          perguntas: [
            { q: 'QUANTO CUSTA O CURSO PRODUTIVIDADE SINCERA?', a: 'O valor do método (módulos completos + bônus) é de apenas R$ 697, ou 12 vezes R$ 70,07.' },
            { q: 'QUAIS SÃO AS FORMAS DE PAGAMENTO?', a: 'Eu disponibilizo TODAS as formas de pagamento possíveis, ou seja, pagamento no cartão em até 12x, pagamento no boleto, PayPal e até PIX, se você ficar mais confortável.' },
            { q: 'COMO VOU ACESSAR O MÉTODO? É TUDO ONLINE?', a: 'Após a confirmação da compra você receberá no seu e-mail acesso à nossa plataforma online com todos os módulos e videoaulas disponíveis. Você precisará apenas de um dispositivo com acesso à internet para assistir e colocar a nossa metodologia em prática quando e onde desejar.' },
            { q: 'O CURSO É PARA INICIANTES OU PESSOAS MUITO DESORGANIZADAS?', a: 'O Produtividade Sincera é o MELHOR lugar para você começar a se organizar! Ele inclui toda a minha metodologia, desde o desenho de uma nova rotina até o acompanhamento do processo, incluindo também o desenvolvimento de melhores hábitos e como executar melhor suas atividades, com dicas e ferramentas necessárias para te acompanhar em todo o processo. Você vai percorrer o caminho da gestão do tempo de forma mais fluida e aprendendo todo o passo a passo, sem ficar perdendo tempo com erros bobos no caminho. O melhor: eu acelero o seu aprendizado trazendo o que funciona, de forma simples e enxuta. Você não precisa conhecer tudo sobre organização e produtividade. Eu já estudo muito e trabalho com isso por você. Aqui, eu selecionei o que você precisa saber. As aulas são curtas e o curso tem o total de 8h exatamente para que você possa realizá-lo e ficar satisfeito com o seu investimento, inclusive de tempo! 😉' },
            { q: 'EU JÁ ESTUDEI MUITO SOBRE PRODUTIVIDADE E JÁ FIZ ALGUNS CURSOS SOBRE O TEMA. O QUE ESSE TEM DE DIFERENTE?', a: 'Eu! Acredite, eu também já estudei muito, já li e fiz vários cursos sobre o tema. Claro, sempre tem algo que eu possa aprender e por isso não paro de estudar. Mas a verdade é que, até hoje, onde eu mais aprendi foi na prática: minha e com meus clientes. Entendendo as principais dúvidas e percebendo como eu costumo resolver na minha vida, a partir de insights próprios e de estudos múltiplos. A prática, os estudos e a melhoria constante me ajudaram a construir o Produtividade Sincera, que tem hoje a minha metodologia exclusiva. Os primeiros módulos possuem aulas e conceitos que você não encontrará em nenhum outro lugar, são exclusivos. Os últimos módulos são um compilado dos melhores conceitos que eu encontrei nos meus estudos e que acredito que vocês deveriam conhecer. Sem excessos, apenas o essencial para que você atinja a sua produtividade de forma mais realista, sincera e eficiente.' },
            { q: 'POSSO FAZER PELO CELULAR?', a: 'Sim, o curso pode ser acessado por qualquer dispositivo que possui acesso à internet. Isso inclui tablet, celular, desktop, notebook e Smart TV. Mas eu recomendo fortemente que você assista às aulas a partir de um desktop ou notebook porque gera mais concentração e menos interrupção. Assim como tarefas de trabalho devem ser direcionadas para o seu computador. É uma boa forma de você começar a praticar.' },
            { q: 'POR QUANTO TEMPO TEREI ACESSO?', a: 'Você terá acesso ao programa por 1 ano (12 meses), a partir da data de aprovação da sua compra. Dentro desse período, você poderá rever todos os conteúdos quantas vezes quiser.' }
          ]
        },
        ultimaChamada: {
          ativo: true,
          eyebrow: 'Última chamada',
          titulo: 'Está dentro de você. Só falta o método.',
          texto: 'Você pode continuar improvisando — ou pode começar hoje, com o passo a passo que +5.000 pessoas já aplicaram.',
          cta: 'Quero começar agora'
        },
        rodape: {
          descricao: 'Engenheira, especialista em organização e gestão do tempo. Há mais de 12 anos ajudando pessoas e empresas a recuperarem o controle da própria rotina.',
          institucional: [
            { texto: 'Quem é Marília', href: '#metodo' },
            { texto: 'O Método', href: '#metodo' },
            { texto: 'Depoimentos', href: '#depoimentos' },
            { texto: 'Instagram', href: 'https://instagram.com/mariliacordeiro' }
          ],
          legal: [
            { texto: 'Termos de Uso', href: '/termos' },
            { texto: 'Política de Privacidade', href: '/privacidade' },
            { texto: 'Política de Cookies', href: '/cookies' },
            { texto: 'Contato', href: 'mailto:contato@mariliacordeiro.com' }
          ],
          redes: [
            { texto: 'Instagram', href: 'https://instagram.com/mariliacordeiro' },
            { texto: 'YouTube', href: 'https://youtube.com/@mariliacordeiro' },
            { texto: 'LinkedIn', href: 'https://linkedin.com/in/mariliacordeiro' }
          ],
          copyright: '© 2026 Marília Cordeiro · CNPJ 51.459.704/0001-68',
          direitos: 'Todos os direitos reservados.'
        }
      }
    };

    const STORAGE_KEY = 'mariliaQuizResult';
    const UTM_STORAGE_KEY = 'mariliaQuizUtms';
    const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const state = { current: 0, respostas: {}, perfil: null };
    const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const transitionDelay = motionAllowed ? 420 : 0;

    function escapeHTML(value) {
      return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function loadSavedUtms() {
      try { return JSON.parse(localStorage.getItem(UTM_STORAGE_KEY) || '{}'); }
      catch (error) { return {}; }
    }

    function saveUtms(params) {
      const payload = {};
      UTM_KEYS.forEach(function(key) {
        const value = params.get(key);
        if (value) payload[key] = value;
      });
      if (Object.keys(payload).length) localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(payload));
      return payload;
    }

    function getUtmQuery() {
      const source = new URLSearchParams(window.location.search);
      const target = new URLSearchParams();
      const saved = loadSavedUtms();
      UTM_KEYS.forEach(function(key) {
        const value = source.get(key) || saved[key];
        if (value) target.set(key, value);
      });
      saveUtms(target);
      return target.toString();
    }

    function withCurrentUtms(path) {
      const utms = getUtmQuery();
      return path + (utms ? (path.includes('?') ? '&' : '?') + utms : '');
    }

    function getOfferLink() {
      return withCurrentUtms(CONFIG.oferta.link);
    }

    function saveQuizResult() {
      const payload = { perfil: state.perfil || 'tempo', respostas: state.respostas, savedAt: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      return payload;
    }

    function loadQuizResult() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
      catch (error) { return {}; }
    }

    function setupIndexLinks() {
      document.querySelectorAll('[data-quiz-link]').forEach(function(link) {
        link.href = withCurrentUtms('quiz.html');
      });
    }

    function initQuizPage() {
      const screens = { quiz: document.getElementById('quiz-screen') };
      const modal = document.getElementById('quiz-modal');
      const modalStart = document.querySelector('[data-modal-start]');
      const liveRegion = document.getElementById('live-region');
      const questionTitle = document.getElementById('question-title');
      const optionsEl = document.getElementById('options');
      const messageEl = document.getElementById('message');
      const progressText = document.getElementById('progress-text');
      const progressPercent = document.getElementById('progress-percent');
      const progressBar = document.getElementById('progress-bar');
      const checklist = document.getElementById('checklist');
      const backButton = document.querySelector('[data-back]');
      if (!screens.quiz || !questionTitle || !optionsEl) return;

      function focusQuestionTitle() {
        window.requestAnimationFrame(function() { questionTitle.focus({ preventScroll: true }); });
      }
      function setQuestionLoading(isLoading) {
        const panel = document.querySelector('.question-panel');
        if (!panel) return;
        panel.classList.toggle('is-loading', Boolean(isLoading && motionAllowed));
        optionsEl.querySelectorAll('button').forEach(function(button) { button.disabled = Boolean(isLoading); });
      }
      function renderChecklist() {
        checklist.innerHTML = '';
        CONFIG.perguntas.forEach(function(pergunta, index) {
          const item = document.createElement('li');
          item.textContent = CONFIG.textos.checklistPrefixo + ' ' + (index + 1);
          if (state.respostas[pergunta.id]) item.classList.add('done');
          if (index === state.current) item.classList.add('is-current');
          checklist.appendChild(item);
        });
      }
      function renderProgress() {
        const total = CONFIG.perguntas.length;
        const answered = Object.keys(state.respostas).length;
        const percent = Math.round((answered / total) * 100);
        progressText.textContent = 'pergunta ' + (state.current + 1) + ' de ' + total;
        progressPercent.textContent = percent + '%';
        progressBar.style.width = percent + '%';
        renderChecklist();
      }
      function renderQuestion() {
        const pergunta = CONFIG.perguntas[state.current];
        setQuestionLoading(false);
        messageEl.textContent = '';
        questionTitle.textContent = pergunta.titulo;
        optionsEl.innerHTML = '';
        pergunta.opcoes.forEach(function(opcao) {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'option';
          button.textContent = opcao.texto;
          button.setAttribute('aria-pressed', state.respostas[pergunta.id]?.valor === opcao.valor ? 'true' : 'false');
          button.addEventListener('click', function() { selectOption(pergunta, opcao); });
          optionsEl.appendChild(button);
        });
        if (backButton) backButton.hidden = state.current === 0;
        renderProgress();
      }
      function finishQuiz() {
        const payload = saveQuizResult();
        const params = new URLSearchParams(getUtmQuery());
        params.set('perfil', payload.perfil);
        window.location.href = 'resultado.html?' + params.toString();
      }
      function selectOption(pergunta, opcao) {
        state.respostas[pergunta.id] = { pergunta: pergunta.titulo, valor: opcao.valor, texto: opcao.texto };
        if (opcao.perfil) state.perfil = opcao.perfil;
        optionsEl.querySelectorAll('.option').forEach(function(button) {
          button.setAttribute('aria-pressed', button.textContent === opcao.texto ? 'true' : 'false');
        });
        renderProgress();
        setQuestionLoading(true);
        if (liveRegion) liveRegion.textContent = 'resposta registrada. ' + (state.current < CONFIG.perguntas.length - 1 ? 'carregando próxima pergunta.' : 'abrindo seu resultado.');
        setTimeout(function() {
          setQuestionLoading(false);
          if (state.current < CONFIG.perguntas.length - 1) {
            state.current += 1;
            renderQuestion();
            focusQuestionTitle();
            screens.quiz.classList.remove('is-entering');
            void screens.quiz.offsetWidth;
            screens.quiz.classList.add('is-entering');
          } else {
            finishQuiz();
          }
        }, transitionDelay);
      }
      function goBack() {
        if (state.current === 0) return;
        state.current -= 1;
        renderQuestion();
        focusQuestionTitle();
      }
      function closeModalAndStart() {
        if (modal) modal.hidden = true;
        renderQuestion();
        focusQuestionTitle();
      }
      modalStart?.addEventListener('click', closeModalAndStart);
      backButton?.addEventListener('click', goBack);
      optionsEl.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.target.classList.contains('option')) {
          messageEl.textContent = CONFIG.textos.erroSelecao;
        }
      });
      renderQuestion();
      if (liveRegion) liveRegion.textContent = 'quiz pronto para começar';
    }




    function getEmbedUrl(url) {
      if (!url) return '';
      try {
        const parsed = new URL(url);
        if (parsed.hostname.includes('youtu.be')) return 'https://www.youtube.com/embed/' + parsed.pathname.slice(1);
        if (parsed.hostname.includes('youtube.com')) {
          const id = parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).pop();
          return id ? 'https://www.youtube.com/embed/' + id : '';
        }
        if (parsed.hostname.includes('vimeo.com')) {
          const id = parsed.pathname.split('/').filter(Boolean).pop();
          return id ? 'https://player.vimeo.com/video/' + id : '';
        }
      } catch (error) {
        return '';
      }
      return '';
    }

    function renderVideo(video, perfil) {
      const container = document.getElementById('video-container');
      const recommendationContainer = document.getElementById('recommendation-container');
      const videoData = video || {};
      const embedUrl = getEmbedUrl(videoData.url || '');
      const fallback = CONFIG.recomendacaoTextual[perfil] || CONFIG.recomendacaoTextual.padrao;
      container.innerHTML = '';
      recommendationContainer.innerHTML = '<div class="diagnostic-recommendation"><h3>' + fallback.titulo + '</h3><p class="recommendation-thesis">' + fallback.texto + '</p><p>' + (CONFIG.diagnosticos[perfil] || CONFIG.diagnosticos.tempo || CONFIG.recomendacaoTextual.padrao.texto) + '</p></div>';
      if (embedUrl) {
        container.hidden = false;
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.title = videoData.titulo || 'vídeo de diagnóstico';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
        return;
      }
      container.hidden = false;
      container.innerHTML = '<div class="video-placeholder" role="note" aria-label="Vídeo do diagnóstico indisponível"><span>Vídeo do diagnóstico</span><h3>' + escapeHTML(videoData.titulo || 'diagnóstico da sua rotina') + '</h3><p>Seu resultado personalizado já está pronto. Assim que o vídeo oficial deste diagnóstico estiver disponível, ele aparecerá aqui.</p><p class="video-placeholder__hint">Enquanto isso, use a recomendação acima para entender seu próximo passo.</p></div>';
    }

    function renderCourseIncluded(config) {
      const grupos = Array.isArray(config.grupos) ? config.grupos : [];
      const groupsHTML = grupos.map(function(grupo) {
        const modulos = Array.isArray(grupo.modulos) ? grupo.modulos : [];
        const modulesHTML = modulos.map(function(modulo) {
          const aulas = Array.isArray(modulo.aulas) ? modulo.aulas : [];
          return '<article class="course-module">'
            + '<div class="module-head">'
            + '<span class="module-number">' + escapeHTML(modulo.numero) + '</span>'
            + '<strong class="module-title">' + escapeHTML(modulo.titulo) + '</strong>'
            + '<p class="module-desc">' + escapeHTML(modulo.descricao) + '</p>'
            + '</div>'
            + '<ul class="module-lessons">' + aulas.map(function(aula) { return '<li>' + escapeHTML(aula) + '</li>'; }).join('') + '</ul>'
            + '</article>';
        }).join('');
        return '<details class="course-group">'
          + '<summary>' + escapeHTML(grupo.titulo) + ' <span>' + modulos.length + ' módulos</span></summary>'
          + '<div class="course-modules">' + modulesHTML + '</div>'
          + '</details>';
      }).join('');

      const ctaHTML = config.ctaTexto
        ? '<a class="btn btn--ghost course-secondary-cta" href="' + escapeHTML(getOfferLink()) + '" target="_blank" rel="noopener">' + escapeHTML(config.ctaTexto) + '</a>'
        : '';
      const visualHTML = config.mockup
        ? '<div class="course-visual"><img src="' + escapeHTML(config.mockup) + '" alt="' + escapeHTML(config.mockupAlt || 'Mockup do curso') + '" loading="lazy"><div><strong>' + escapeHTML(config.total) + '</strong><p class="course-note">' + escapeHTML(config.apoio) + '</p></div></div>'
        : '';

      return '<div class="course-included">'
        + visualHTML
        + '<div class="course-intro">'
        + '<p class="course-lead">' + escapeHTML(config.intro) + '</p>'
        + '<p class="course-note">' + escapeHTML(config.apoio) + '</p>'
        + '</div>'
        + '<div class="course-groups">' + groupsHTML + '</div>'
        + '<p class="course-total">' + escapeHTML(config.total) + '</p>'
        + ctaHTML
        + '</div>';
    }

    function listHTML(items, className) {
      return '<ul class="' + className + '">' + (items || []).map(function(item) { return '<li>' + escapeHTML(item) + '</li>'; }).join('') + '</ul>';
    }

    function renderOfferDetails() {
      document.getElementById('offer-old-price').textContent = CONFIG.oferta.precoAnterior || '';
      document.getElementById('offer-includes').innerHTML = (CONFIG.oferta.inclui || []).map(function(item) {
        return '<li>' + escapeHTML(item) + '</li>';
      }).join('');
      document.getElementById('payment-methods').innerHTML = CONFIG.oferta.pagamentoImagem
        ? '<strong>Formas de pagamento</strong><img src="' + escapeHTML(CONFIG.oferta.pagamentoImagem) + '" alt="' + escapeHTML(CONFIG.oferta.pagamentoAlt || 'Formas de pagamento') + '" loading="lazy">'
        : '';
    }

    function renderBonus(config) {
      const itens = (config.itens || []).map(function(item) {
        return '<article class="bonus-card">'
          + (item.imagem ? '<img src="' + escapeHTML(item.imagem) + '" alt="Mockup do bônus ' + escapeHTML(item.titulo) + '" loading="lazy">' : '')
          + '<div><span class="bonus-badge">' + escapeHTML(item.badge) + '</span><h3>' + escapeHTML(item.titulo) + '</h3><p>' + escapeHTML(item.descricao) + '</p>'
          + listHTML(item.bullets, 'clean-list') + '</div></article>';
      }).join('');
      return '<section class="lp-block" aria-labelledby="bonus-title"><div class="block-head"><p class="eyebrow">' + escapeHTML(config.eyebrow) + '</p><h2 id="bonus-title">' + escapeHTML(config.titulo) + '</h2><p class="lead">' + escapeHTML(config.subtexto) + '</p></div><div class="bonus-grid">' + itens + '</div></section>';
    }

    function renderTestimonials(config) {
      const prints = (config.prints || []).map(function(print) {
        return '<figure class="testimonial-print"><img src="' + escapeHTML(print.src) + '" alt="' + escapeHTML(print.alt || 'Print de depoimento') + '" loading="lazy"></figure>';
      }).join('');
      return '<section id="depoimentos" class="lp-block" aria-labelledby="testimonials-title"><div class="block-head"><p class="eyebrow">' + escapeHTML(config.eyebrow) + '</p><h2 id="testimonials-title">' + escapeHTML(config.titulo) + '</h2><p class="lead">' + escapeHTML(config.texto) + '</p></div><h3>' + escapeHTML(config.subdivisao) + '</h3><div class="testimonial-grid">' + prints + '</div></section>';
    }

    function renderGuarantee(config) {
      const paragraphs = (config.textos || []).map(function(texto) { return '<p>' + escapeHTML(texto) + '</p>'; }).join('');
      return '<section class="lp-block lp-block--dark" aria-labelledby="guarantee-title"><div class="guarantee-layout">'
        + '<img class="guarantee-seal" src="' + escapeHTML(config.selo) + '" alt="' + escapeHTML(config.seloAlt || 'Selo de garantia') + '" loading="lazy">'
        + '<div><h2 id="guarantee-title">' + escapeHTML(config.titulo) + '</h2>' + paragraphs
        + '<div class="actions"><a class="btn" href="' + escapeHTML(config.href || '#oferta') + '">' + escapeHTML(config.cta) + '</a></div></div></div></section>';
    }

    function renderFAQ(config) {
      const items = (config.perguntas || []).map(function(item, index) {
        return '<details class="faq-item"><summary><span>' + String(index + 1).padStart(2, '0') + ' ' + escapeHTML(item.q) + '</span></summary><p>' + escapeHTML(item.a) + '</p></details>';
      }).join('');
      return '<section id="faq" class="lp-block" aria-labelledby="faq-title"><div class="block-head"><h2 id="faq-title">' + escapeHTML(config.titulo) + '</h2></div><div class="faq-list">' + items + '</div></section>';
    }

    function renderFinalCTA(config) {
      return '<section class="lp-block final-cta" aria-labelledby="final-cta-title"><p class="eyebrow">' + escapeHTML(config.eyebrow) + '</p><h2 id="final-cta-title">' + escapeHTML(config.titulo) + '</h2><p class="lead" style="margin-inline:auto;">' + escapeHTML(config.texto) + '</p><div class="actions"><a class="btn" href="' + escapeHTML(getOfferLink()) + '" target="_blank" rel="noopener">' + escapeHTML(config.cta) + '</a></div></section>';
    }

    function renderBlocks() {
      const blocks = document.getElementById('extra-blocks');
      blocks.innerHTML = '';
      if (CONFIG.blocos.oQueTemDentro.ativo) {
        const block = document.createElement('section');
        block.className = 'info-block';
        block.innerHTML = '<h3>' + escapeHTML(CONFIG.blocos.oQueTemDentro.titulo) + '</h3>' + renderCourseIncluded(CONFIG.blocos.oQueTemDentro);
        blocks.appendChild(block);
      }
      if (CONFIG.blocos.depoimentos.ativo) {
        // Depoimentos oficiais renderizados em largura total após a oferta.
      }
      if (CONFIG.blocos.garantia.ativo) {
        // Garantia detalhada renderizada em largura total após a oferta.
      }
    }

    function renderPostOfferSections() {
      const target = document.getElementById('post-offer-sections');
      const html = [];
      if (CONFIG.blocos.bonus?.ativo) html.push(renderBonus(CONFIG.blocos.bonus));
      if (CONFIG.blocos.depoimentos?.ativo) html.push(renderTestimonials(CONFIG.blocos.depoimentos));
      if (CONFIG.blocos.garantia?.ativo) html.push(renderGuarantee(CONFIG.blocos.garantia));
      if (CONFIG.blocos.faq?.ativo) html.push(renderFAQ(CONFIG.blocos.faq));
      if (CONFIG.blocos.ultimaChamada?.ativo) html.push(renderFinalCTA(CONFIG.blocos.ultimaChamada));
      target.innerHTML = html.join('');
    }

    function renderFooter() {
      const data = CONFIG.blocos.rodape;
      if (!data) return;
      const descEl = document.getElementById('footer-description');
      if (!descEl) return;
      descEl.textContent = data.descricao;
      function links(items) {
        return (items || []).map(function(item) {
          const external = /^https?:/.test(item.href);
          return '<li><a href="' + escapeHTML(item.href) + '"' + (external ? ' target="_blank" rel="noopener"' : '') + '>' + escapeHTML(item.texto) + '</a></li>';
        }).join('');
      }
      document.getElementById('footer-institutional').innerHTML = links(data.institucional);
      document.getElementById('footer-legal').innerHTML = links(data.legal);
      document.getElementById('footer-social').innerHTML = links(data.redes);
      document.getElementById('footer-copyright').textContent = data.copyright;
      document.getElementById('footer-rights').textContent = data.direitos;
    }

    function renderFinal() {
      const perfil = state.perfil || 'tempo';
      const video = CONFIG.videos[perfil] || CONFIG.videos.tempo || { url: '', titulo: 'diagnóstico da sua rotina' };
      document.getElementById('video-title').textContent = video.titulo || 'diagnóstico da sua rotina';
      document.getElementById('dynamic-copy').textContent = [CONFIG.textoDinamicoVideo[perfil] || CONFIG.textoDinamicoVideo.tempo || '', CONFIG.teseFinal.texto].filter(Boolean).join(' ');
      renderVideo(video, perfil);
      document.getElementById('offer-bridge').textContent = CONFIG.oferta.ponteDiagnostico;
      document.getElementById('offer-title').textContent = CONFIG.oferta.nomeCurso;
      document.getElementById('offer-price').textContent = CONFIG.oferta.preco;
      document.getElementById('offer-anchor').textContent = CONFIG.oferta.ancoragem;
      document.getElementById('offer-sub-anchor').textContent = CONFIG.oferta.segundaLinha;
      renderOfferDetails();
      document.getElementById('method-line').textContent = CONFIG.teseFinal.metodo;
      document.getElementById('cost-line').textContent = CONFIG.teseFinal.custo;
      document.getElementById('offer-link').textContent = CONFIG.oferta.botao;
      document.getElementById('offer-link').href = getOfferLink();
      renderBlocks();
      renderPostOfferSections();
      document.getElementById('answers-output').textContent = JSON.stringify({ perfil: perfil, respostas: state.respostas }, null, 2);
      document.getElementById('answers-debug').hidden = !CONFIG.textos.mostrarRespostasRegistradas;
      // TODO: enviar respostas para [ferramenta]
    }



    function initResultPage() {
      const saved = loadQuizResult();
      const params = new URLSearchParams(window.location.search);
      state.perfil = params.get('perfil') || saved.perfil || 'tempo';
      state.respostas = saved.respostas || {};
      renderFinal();
      renderFooter();
    }

    function initPage() {
      const page = document.body.dataset.page;
      if (page === 'index') setupIndexLinks();
      if (page === 'quiz') initQuizPage();
      if (page === 'resultado') initResultPage();
    }

    initPage();
