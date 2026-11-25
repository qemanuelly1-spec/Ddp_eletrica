/* Fotos — troque pelos arquivos reais (ex.: "img/subestacao-1.jpg") */
const CDN = "https://media.base44.com/images/public/6b06c8c6a26332da51c13348";
const IMG = {
  hero: CDN + "/67f359dcbfab6b7f9e886e025ba715c2_generated_5b5aebe1.png",
  equipe: CDN + "/e3179f2cfcc1107537f50a6fa627c262_generated_b454be6d.png",
  instalacoes: CDN + "/4a3d7dbede73864f20d0f1b6fa42475a_generated_bbbd5c0a.png",
  paineis: CDN + "/3121a96db079abe050e23914f5c927e1_generated_638f4cb9.png",
  aterramento: CDN + "/539eba6b5c6010f1aefa8c9f6f356f5e_generated_7c05c43e.png",
  manutencao: CDN + "/a2e6372bd376a67fbb8255c693b3d24f_generated_6bbfaa5d.png",
  projetos: CDN + "/7cf218c863045402305dc1f4b7fbe6bf_generated_32bd643a.png",
  subestacao: CDN + "/7c67185db42fc98eb99d9953ffc6e9c2_generated_83a58687.png",
  agroindustria: CDN + "/2ed9fea50b7ca2695835a98cc302619a_generated_a6d368ee.png",
  capacitores: CDN + "/cb26e8e93358039c9124aa383794ec7a_generated_38beadf1.png",
  iluminacao: CDN + "/84385c02c06e4e47ac4722a4f2f6792d_generated_53a186da.png",
  armazem: CDN + "/e21aebdadb040c46ec8a4006c97eee16_generated_e4e6ebe8.png",
  aterramentoObra: CDN + "/6a55906131532f22e648faef019675e3_generated_fc305519.png",
  ccm: CDN + "/59830cf04b21eba26f97e7eac4529dbd_generated_c3c67356.png"
};

/* Galeria de fotos — usada na página Projetos, nas galerias dos serviços
   e no carrossel de fundo dos banners das páginas internas.
   Para adicionar uma foto: coloque o arquivo na pasta img/ e acrescente uma linha aqui. */
const GALERIA = [
  { src:"img/galeria-1.jpg", legenda:"Montagem e conferência de painel de distribuição" },
  { src:"img/galeria-2.jpg", legenda:"Quadro de automação e comando industrial" },
  { src:"img/galeria-3.jpg", legenda:"Bornes e cabeamento identificado em painel" },
  { src:"img/galeria-4.jpg", legenda:"Painel de controle com controlador e bornes" },
  { src:"img/galeria-5.jpg", legenda:"Manutenção de quadro elétrico em galpão industrial" },
  { src:"img/galeria-6.jpg", legenda:"Medições elétricas em painel de contatores" },
  { src:"img/galeria-7.jpg", legenda:"Inspeção de quadro de distribuição com multímetro" }
];
const G = n => GALERIA[n - 1].src;
/* Monta 10 fotos para a galeria de um serviço, repetindo as da GALERIA a partir de uma posição */
const dez = inicio => Array.from({ length: 10 }, (_, i) => GALERIA[(inicio + i) % GALERIA.length].src);

const SERVICES = [
  { slug:"instalacoes-eletricas-industriais", title:"Instalações Elétricas Industriais", short:"Instalações Industriais", icon:"factory", image:IMG.instalacoes,
    gallery:dez(4),
    card:"Instalação completa para indústrias, armazéns e agroindústrias.",
    topics:["Eletrocalhas, leitos e eletrodutos","Cabeamento de força e comando","Iluminação industrial"],
    summary:"Execução completa de instalações elétricas para indústrias, armazéns e agroindústrias: eletrocalhas, leitos, eletrodutos, cabeamento de força e comando e iluminação industrial, sempre conforme as normas técnicas.",
    description:["A DDP Elétrica executa a instalação elétrica industrial do início ao fim: do lançamento de eletrocalhas, leitos e eletrodutos ao cabeamento de força e comando, montagem de quadros e iluminação industrial. Cada etapa é acompanhada por supervisão técnica própria e segue as normas técnicas brasileiras, com identificação de circuitos, ensaios e organização da documentação para a operação e a manutenção da planta.","Atuamos em indústrias, armazéns, agroindústrias e unidades de armazenagem de grãos, em obras novas e em ampliações de instalações em operação — sempre com planejamento de execução por etapas para não interromper a produção."],
    steps:["Visita técnica e levantamento das necessidades da planta","Planejamento de execução por etapas de obra","Infraestrutura: eletrocalhas, leitos, eletrodutos e caixas","Cabeamento de força e comando com identificação e ensaios","Iluminação industrial, quadros e comissionamento final"] },
  { slug:"subestacoes", title:"Subestações de Média e Baixa Tensão", short:"Subestações", icon:"zap", image:IMG.subestacao,
    gallery:dez(1),
    card:"Obras de grande porte para a indústria e o agronegócio.",
    topics:["Montagem eletromecânica","Padrões da concessionária","Acompanhamento da energização"],
    summary:"Montagem e instalação de subestações de média e baixa tensão, com obras de grande porte para o setor industrial e o agronegócio, seguindo os padrões da concessionária e as normas de segurança.",
    description:["Montagem e instalação de subestações de média e baixa tensão para indústrias e o agronegócio, incluindo obras de grande porte. A execução segue os padrões da concessionária local e as normas de segurança, com atenção à estrutura de apoio, ao aterramento, à proteção e aos ensaios de energização.","A equipe da DDP Elétrica atua na montagem eletromecânica, na interligação de transformadores e cubículos, na instalação de painéis de proteção e medição e no acompanhamento da energização junto à concessionária."],
    steps:["Análise da demanda e definição da configuração da subestação","Montagem eletromecânica de estruturas, cubículos e transformadores","Aterramento, proteção e interligações de média e baixa tensão","Ensaios, comissionamento e checklist de segurança","Acompanhamento da energização junto à concessionária"] },
  { slug:"paineis-eletricos", title:"Montagem de Painéis Elétricos", short:"Painéis Elétricos", icon:"circuit", image:IMG.paineis,
    gallery:dez(2),
    card:"Painéis sob medida, prontos para entrar em operação.",
    topics:["Distribuição, comando e controle","Identificação de circuitos","Testes antes da entrega"],
    summary:"Montagem de painéis de distribuição, comando e controle, com organização, identificação e testes antes da entrega.",
    description:["Montagem de painéis elétricos de distribuição, comando e controle sob medida para cada aplicação industrial. O trabalho inclui a organização interna dos componentes, a identificação de circuitos e a conferência elétrica, com testes realizados antes da entrega — o painel chega à obra pronto para entrar em operação.","Todos os painéis são montados com componentes definidos em projeto e acompanhados por registro fotográfico e documentação técnica da montagem."],
    steps:["Análise do diagrama e da lista de materiais aprovada pelo cliente","Montagem mecânica de componentes e barramentos","Cabeamento, identificação e organização interna","Testes de continuidade, isolamento e funcionamento","Entrega com documentação e registro fotográfico"] },
  { slug:"aterramento-spda", title:"Aterramento e SPDA", short:"Aterramento e SPDA", icon:"shield", image:IMG.aterramento,
    gallery:dez(6),
    card:"Proteção de pessoas, equipamentos e instalações.",
    topics:["Malha de aterramento","Para-raios: captores e descidas","Medição de resistência"],
    summary:"Sistemas de aterramento e de proteção contra descargas atmosféricas (para-raios), dimensionados para proteger pessoas, equipamentos e instalações.",
    description:["Sistemas de aterramento e de proteção contra descargas atmosféricas projetados e executados para proteger pessoas, equipamentos e instalações. A DDP Elétrica realiza a malha de aterramento, as descidas, os captores e a equipotencialização, com medições de resistência e documentação dos resultados.","O dimensionamento considera as características do solo, a estrutura da edificação e os equipamentos instalados, garantindo um sistema compatível com a operação e com as exigências normativas."],
    steps:["Avaliação do solo e definição do dimensionamento","Execução da malha de aterramento e hastes","Instalação de captores, descidas e equipotencialização","Medição de resistência de aterramento","Relatório técnico com resultados e ART quando aplicável"] },
  { slug:"manutencao-eletrica", title:"Manutenção Preventiva e Corretiva", short:"Manutenção", icon:"wrench", image:IMG.manutencao,
    gallery:dez(5),
    card:"Atendimento programado e emergencial em todo o Tocantins.",
    topics:["Preventiva e corretiva","Termografia e medições","Relatório com fotos e checklist"],
    summary:"Manutenção elétrica programada e emergencial em todo o estado e região, com relatório de execução, fotos, checklist e pendências identificadas ao final de cada serviço.",
    description:["Manutenção elétrica preventiva programada e corretiva emergencial para indústrias e agroindústrias em todo o Tocantins e região. O atendimento é feito por equipe própria, com equipamentos de medição e procedimentos de segurança, incluindo inspeção termográfica e análise de painéis.","Ao final de cada serviço o cliente recebe um relatório de execução com fotos, checklist e pendências identificadas. Os custos de deslocamento, hospedagem e alimentação da equipe entram no orçamento."],
    steps:["Agendamento e inspeção inicial da instalação","Execução da manutenção com bloqueio e procedimentos de segurança","Medições, termografia e testes funcionais","Relatório com fotos, checklist e pendências","Recomendações e plano de manutenção contínua"],
    note:"Deslocamento, hospedagem e alimentação da equipe incluídos no orçamento." },
  { slug:"projetos-eletricos", title:"Projetos de Engenharia Elétrica", short:"Projetos Elétricos", icon:"ruler", image:IMG.projetos,
    gallery:dez(3),
    card:"Projetos com engenheiro eletricista responsável.",
    topics:["Aterramento e subestações","Estudo de seletividade","Entrega com ART"],
    summary:"Em parceria com engenheiro eletricista: projetos de aterramento, infraestrutura, motores elétricos e subestações, além de estudo de seletividade da proteção.",
    description:["Projetos de engenharia elétrica desenvolvidos em parceria com engenheiro eletricista responsável: aterramento, infraestrutura, motores elétricos, subestações e estudo de seletividade da proteção.","O projeto é entregue com memoriais, diagramas e dimensionamento compatível com a operação real da planta, servindo de base para a execução, para a manutenção e para futuras ampliações."],
    steps:["Levantamento técnico e definição de premissas","Dimensionamento e memorial descritivo","Diagramas unifilares e de proteção","Estudo de seletividade e coordenação","Entrega técnica com ART do responsável"] }
];

const PROJECTS = [
  { title:"Subestação 1.500 kVA para indústria de grãos", service:"Subestações", slug:"subestacoes", location:"Porto Nacional – TO", image:IMG.subestacao, description:"Montagem eletromecânica completa da subestação, com cubículos de média tensão, transformador e interligações de baixa tensão." },
  { title:"Infraestrutura elétrica de armazém de grãos", service:"Instalações Industriais", slug:"instalacoes-eletricas-industriais", location:"Palmas – TO", image:IMG.armazem, description:"Eletrocalhas, leitos, cabeamento de força e comando e iluminação industrial para ampliação da capacidade de armazenagem." },
  { title:"Banco de capacitores 600 kVAr", service:"Painéis Elétricos", slug:"paineis-eletricos", location:"Gurupi – TO", image:IMG.capacitores, description:"Montagem de painel de correção de fator de potência com identificação de circuitos e testes antes da energização." },
  { title:"Iluminação industrial de galpão", service:"Instalações Industriais", slug:"instalacoes-eletricas-industriais", location:"Araguaína – TO", image:IMG.iluminacao, description:"Substituição por luminárias LED de alta eficiência, com novos circuitos, quadros de iluminação e comissionamento." },
  { title:"Aterramento e SPDA em agroindústria", service:"Aterramento e SPDA", slug:"aterramento-spda", location:"Paraíso do Tocantins – TO", image:IMG.aterramentoObra, description:"Malha de aterramento, captores e descidas com medição de resistência e relatório técnico de conformidade." },
  { title:"Modernização de centro de controle de motores", service:"Manutenção", slug:"manutencao-eletrica", location:"Colinas do Tocantins – TO", image:IMG.ccm, description:"Reforma de CCM com substituição de componentes, reorganização de cabos, ensaios e relatório de execução." }
];

/* Para colocar o PDF de cada certificado, preencha "pdf" com o caminho do arquivo (ex.: "docs/nr10.pdf") */
const CERTS = [
  { title:"NR10 – Segurança em Instalações e Serviços em Eletricidade", category:"Norma de segurança", description:"Treinamento e reciclagem periódica da equipe técnica conforme a norma regulamentadora de segurança em eletricidade.", pdf:"" },
  { title:"NR35 – Trabalho em Altura", category:"Norma de segurança", description:"Capacitação para execução de atividades em altura com análise de risco, acesso seguro e linha de vida.", pdf:"" },
  { title:"NR33 – Segurança e Saúde nos Trabalhos em Espaços Confinados", category:"Norma de segurança", description:"Formação para entrada e trabalho em espaços confinados, com monitoramento de atmosfera e plano de resgate.", pdf:"" }
];
