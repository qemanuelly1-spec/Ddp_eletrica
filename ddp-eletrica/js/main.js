/* =========================================================
   TEMPLATES
   ========================================================= */
const anos = CONFIG.anosDeMercado;
const ic = (n, cls="ico") => `<svg class="${cls}"><use href="#i-${n}"/></svg>`;
const arrow = ic("arrow");
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* Card de serviço: foto, título, texto curto e 3 tópicos */
const svcCard = s => `
  <a class="scard reveal" href="#/servicos/${s.slug}">
    <div class="scard-img"><img src="${s.image}" alt="${esc(s.title)}" loading="lazy"></div>
    <div class="scard-body">
      <h3>${s.title}</h3>
      <p>${s.card}</p>
      <ul class="topics">${s.topics.map(t => `<li>${ic("check")}${t}</li>`).join("")}</ul>
      <span class="more"><span class="more-txt">Saiba mais</span><span class="more-cir">${arrow}</span></span>
    </div>
  </a>`;

const projCard = p => `
  <div class="proj reveal" data-lb="${p.image}" data-cap="${esc(p.title + ' — ' + p.location)}">
    <img src="${p.image}" alt="${esc(p.title)}" loading="lazy">
    <div class="cap"><small>${p.service}</small><h3>${p.title}</h3><span>${p.location}</span></div>
  </div>`;

const certCard = c => `
  <div class="cert reveal">
    <div class="fi">${ic("file")}</div>
    <small>${c.category}</small>
    <h3>${c.title}</h3>
    <p>${c.description}</p>
    ${c.pdf ? `<a class="pdf" href="${c.pdf}" target="_blank" rel="noopener">${ic("download","ico")} Ver certificado (PDF)</a>` : `<span class="pdf" style="color:var(--muted)">${ic("lock","ico")} Disponível sob solicitação</span>`}
  </div>`;

const statsBand = () => `
  <div class="stats grid-bg"><div class="wrap">
    <div class="stat"><b data-count="${anos}">0</b><span>Anos de mercado</span></div>
    <div class="stat"><b>Desde ${CONFIG.fundacao}</b><span>Desde a fundação</span></div>
    <div class="stat"><b>NR10 · NR35 · NR33</b><span>Normas de segurança atendidas</span></div>
    <div class="stat"><b>TO e região</b><span>Área de atuação</span></div>
  </div></div>`;

const aboutBlock = (withBtn=true) => `
  <section class="sec bg-light"><div class="wrap about">
    <div class="about-img reveal">
      <img src="${IMG.equipe}" alt="Equipe da DDP Elétrica trabalhando em painel elétrico industrial" loading="lazy">
      <div class="about-badge"><b>${anos}</b><span>ANOS DE MERCADO</span></div>
    </div>
    <div class="reveal">
      <span class="eyebrow">Sobre a DDP Elétrica</span>
      <h2 class="h-sec">Engenharia executada com método, do projeto à energização</h2>
      <p>Fundada em ${CONFIG.fundacao}, a DDP Elétrica construiu sua trajetória executando obras industriais de grande porte no Tocantins, incluindo subestações de média e baixa tensão. Atuamos somente com mão de obra especializada — sem venda de materiais —, o que mantém nossa atuação técnica, independente e focada na qualidade da execução.</p>
      <p>Nossa missão é entregar instalações seguras, documentadas e prontas para operar, com planejamento por etapas e comunicação direta com o cliente em cada fase da obra.</p>
      <ul class="checks">
        <li><span class="ck">${ic("check")}</span>Equipe própria e supervisão técnica em todas as obras</li>
        <li><span class="ck">${ic("check")}</span>Execução conforme NR10, NR35 e NR33</li>
        <li><span class="ck">${ic("check")}</span>Atendimento à indústria e ao agronegócio em todo o Tocantins</li>
        <li><span class="ck">${ic("check")}</span>Relatórios com fotos, checklist e pendências ao final de cada serviço</li>
      </ul>
      ${withBtn ? `<a href="#/sobre" class="btn btn-navy">Conhecer a empresa ${arrow}</a>` : ""}
    </div>
  </div></section>`;

const safetyBlock = () => `
  <section class="sec safety grid-bg"><div class="wrap">
    <span class="eyebrow">Segurança e normas</span>
    <h2 class="h-sec reveal">Segurança não é diferencial.<br>É pré-requisito de obra.</h2>
    <p class="lead">Cada colaborador da DDP Elétrica passa por treinamentos anuais. Os procedimentos de trabalho seguem as normas regulamentadoras em todas as frentes de serviço, do planejamento à liberação da instalação.</p>
    <div class="nr-grid">
      <div class="nr reveal"><div class="nr-top"><b>NR10</b><span class="tag-ok">ATENDIDA</span></div><h3>Segurança em eletricidade</h3><p>Procedimentos de segurança em instalações e serviços com eletricidade, com desenergização, bloqueio, sinalização e uso de EPI e EPC adequados.</p></div>
      <div class="nr reveal"><div class="nr-top"><b>NR35</b><span class="tag-ok">ATENDIDA</span></div><h3>Trabalho em altura</h3><p>Execução de atividades acima de dois metros com análise de risco, linha de vida, acesso seguro e equipe treinada e autorizada.</p></div>
      <div class="nr reveal"><div class="nr-top"><b>NR33</b><span class="tag-ok">ATENDIDA</span></div><h3>Espaços confinados</h3><p>Entrada e trabalho em espaços confinados com monitoramento de atmosfera, vigia permanente e plano de resgate.</p></div>
    </div>
    <div class="safety-strip reveal">
      <div>${ic("shield")}<span><b>Treinamentos anuais</b> para toda a equipe técnica</span></div>
      <div>${ic("hat")}<span><b>EPI e EPC adequados</b> em todas as frentes</span></div>
      <div>${ic("clip")}<span><b>Procedimentos documentados</b> em Tocantins e região</span></div>
    </div>
  </div></section>`;

const galeriaGrid = () => `
  <div class="photo-grid">
    ${GALERIA.map(g => `<figure class="photo reveal" data-lb="${g.src}" data-cap="${esc(g.legenda)}">
      <img src="${g.src}" alt="${esc(g.legenda)}" loading="lazy"><figcaption>${g.legenda}</figcaption>
    </figure>`).join("")}
  </div>`;

/* Banner das páginas internas: carrossel de fundo com as fotos da GALERIA */
const pageHero = (eyebrow, title, text, img, crumb) => `
  <section class="phero grid-bg">
    <div class="phero-slides" aria-hidden="true">
      ${GALERIA.map((g, i) => `<img src="${g.src}" alt="" class="${i === 0 ? "on" : ""}" ${i ? 'loading="lazy"' : ""}>`).join("")}
    </div>
    <div class="phero-dots" role="tablist" aria-label="Fotos do banner">
      ${GALERIA.map((g, i) => `<button type="button" class="${i === 0 ? "on" : ""}" data-slide="${i}" aria-label="Foto ${i + 1}"></button>`).join("")}
    </div>
    <div class="wrap">
      ${crumb ? `<div class="crumb">${crumb}</div>` : ""}
      <span class="eyebrow">${eyebrow}</span>
      <h1>${title}</h1>
      ${text ? `<p>${text}</p>` : ""}
    </div>
  </section>`;

/* =========================================================
   PÁGINAS
   ========================================================= */
const PAGES = {
  home: () => `
    <section class="hero">
      <img class="hero-bg" src="${IMG.hero}" alt="Subestação elétrica industrial com painéis e transformadores">
      <div class="grid-bg"></div>
      <div class="wrap">
        <div>
          <span class="eyebrow">Serviços elétricos industriais · Tocantins</span>
          <h1>Soluções elétricas industriais com <em>segurança e precisão</em></h1>
          <p>Há ${anos} anos executando subestações, painéis e infraestrutura elétrica para a indústria e o agronegócio no Tocantins.</p>
          <div class="ctas">
            <a href="#/orcamento" class="btn btn-amber">Solicitar orçamento ${arrow}</a>
            <a href="#/servicos" class="btn btn-ghost">Conheça nossos serviços</a>
          </div>
        </div>
        <div class="ficha">
          <h4>${ic("shield")} Ficha técnica</h4>
          <div><span>Fundação</span><b>${CONFIG.fundacao}</b></div>
          <div><span>Atuação</span><b>Tocantins e região</b></div>
          <div><span>Normas</span><b>NR10 · NR35 · NR33</b></div>
        </div>
      </div>
    </section>
    ${statsBand()}
    <section class="sec"><div class="wrap">
      <div class="sec-head">
        <div><span class="eyebrow">O que fazemos</span><h2 class="h-sec">Serviços elétricos para a<br>indústria e o agronegócio</h2></div>
        <a class="link-arrow" href="#/servicos">Ver todos os serviços ${arrow}</a>
      </div>
      <div class="cards">${SERVICES.map(svcCard).join("")}</div>
    </div></section>
    ${aboutBlock()}
    ${safetyBlock()}
    <section class="sec"><div class="wrap">
      <div class="sec-head">
        <div><span class="eyebrow">Documentação técnica</span><h2 class="h-sec">Certificações e conformidade</h2><p class="lead">Certificados de treinamento e documentação das normas atendidas, disponíveis para consulta de clientes e órgãos fiscalizadores.</p></div>
        <a class="link-arrow" href="#/certificacoes">Ver certificações ${arrow}</a>
      </div>
      <div class="cert-grid">${CERTS.map(certCard).join("")}</div>
    </div></section>
    <section class="sec bg-light"><div class="wrap">
      <div class="sec-head">
        <div><span class="eyebrow">Obras executadas</span><h2 class="h-sec">Projetos realizados</h2><p class="lead">Obras industriais e agroindustriais executadas no Tocantins, com registro fotográfico de cada etapa.</p></div>
        <a class="link-arrow" href="#/projetos">Ver galeria completa ${arrow}</a>
      </div>
      <div class="proj-grid">${PROJECTS.map(projCard).join("")}</div>
    </div></section>
    <section class="clients bg-light"><div class="wrap">
      <span class="eyebrow">Clientes e parceiros</span>
      <div class="cl-grid">
        <div class="cl"><b>FAZENDÃO</b><small>AGRONEGÓCIO</small></div>
        <div class="cl"><b>OURO SAFRA</b><small>AGRONEGÓCIO</small></div>
        <div class="cl dash">OUTRAS INDÚSTRIAS DO TOCANTINS</div>
      </div>
    </div></section>`,

  sobre: () => pageHero("Institucional", "Desde " + CONFIG.fundacao + " energizando a indústria do Tocantins", "Mão de obra especializada em instalações elétricas industriais, subestações e manutenção, com equipe própria e segurança como pré-requisito.", IMG.equipe, `<a href="#/">Início</a> / Sobre`)
    + statsBand() + aboutBlock(false) + `
    <section class="sec"><div class="wrap">
      <div class="sec-head"><div><span class="eyebrow">Nossos pilares</span><h2 class="h-sec">Missão, visão e valores</h2></div></div>
      <div class="cards">
        <div class="card reveal"><div class="ic">${ic("zap")}</div><h3>Missão</h3><p>Entregar instalações elétricas seguras, documentadas e prontas para operar, com planejamento por etapas e comunicação direta com o cliente.</p></div>
        <div class="card reveal"><div class="ic">${ic("factory")}</div><h3>Visão</h3><p>Ser referência em serviços elétricos industriais no Tocantins, competindo em qualidade e segurança com as grandes empresas do setor.</p></div>
        <div class="card reveal"><div class="ic">${ic("shield")}</div><h3>Valores</h3><p>Segurança em primeiro lugar, transparência técnica, cumprimento de prazos e respeito às normas e às pessoas em cada obra.</p></div>
      </div>
    </div></section>` + safetyBlock(),

  servicos: () => pageHero("Serviços", "Soluções completas em elétrica industrial", "Da infraestrutura à energização: conheça cada frente de atuação da DDP Elétrica.", IMG.instalacoes, `<a href="#/">Início</a> / Serviços`)
    + `<section class="sec"><div class="wrap"><div class="cards">${SERVICES.map(svcCard).join("")}</div></div></section>`,

  servico: (slug) => {
    const s = SERVICES.find(x => x.slug === slug);
    if (!s) return PAGES.servicos();
    return pageHero("Serviço", s.title, s.summary, s.image, `<a href="#/">Início</a> / <a href="#/servicos">Serviços</a> / ${s.short}`) + `
    <section class="sec"><div class="wrap svc">
      <div class="svc-body">
        ${s.description.map(p => `<p>${p}</p>`).join("")}
        ${s.note ? `<div class="note">${s.note}</div>` : ""}
        <h3 style="font-size:26px;margin-top:44px;text-transform:uppercase">Como executamos</h3>
        <ol class="steps">${s.steps.map(t => `<li>${t}</li>`).join("")}</ol>
        <h3 style="font-size:26px;margin-top:52px;text-transform:uppercase">Galeria</h3>
        <div class="gal">${s.gallery.map(g => `<img src="${g}" alt="${esc(s.title)}" loading="lazy" data-lb="${g}" data-cap="${esc(s.title)}">`).join("")}</div>
      </div>
      <aside class="side">
        <div class="side-box dark">
          <h4>Orçamento para ${s.short.toLowerCase()}</h4>
          <p>Envie os dados da sua obra e receba uma proposta técnica com escopo, etapas e prazo.</p>
          <a href="#/orcamento?servico=${s.slug}" class="btn btn-amber" style="width:100%;justify-content:center">Solicitar orçamento deste serviço</a>
        </div>
        <div class="side-box">
          <h4>Outros serviços</h4>
          <ul>${SERVICES.map(o => `<li><a href="#/servicos/${o.slug}" class="${o.slug===s.slug?'cur':''}">${o.short} ${ic("arrow","ico")}</a></li>`).join("")}</ul>
        </div>
      </aside>
    </div></section>`;
  },

  projetos: () => {
    const cats = ["Todos", ...new Set(PROJECTS.map(p => p.service))];
    return pageHero("Obras executadas", "Projetos realizados", "Obras industriais e agroindustriais executadas no Tocantins, com registro fotográfico de cada etapa.", IMG.subestacao, `<a href="#/">Início</a> / Projetos`) + `
    <section class="sec bg-light"><div class="wrap">
      <div class="filters" id="filters">${cats.map((c,i) => `<button class="${i?'':'on'}" data-f="${c}">${c}</button>`).join("")}</div>
      <div class="proj-grid" id="pgrid">${PROJECTS.map(projCard).join("")}</div>
    </div></section>
    <section class="sec"><div class="wrap">
      <div class="sec-head"><div><span class="eyebrow">Registro de campo</span><h2 class="h-sec">Galeria de fotos</h2><p class="lead">Painéis, quadros de comando e manutenções executadas pela nossa equipe. Clique em uma foto para ampliar.</p></div></div>
      ${galeriaGrid()}
    </div></section>`;
  },

  certificacoes: () => pageHero("Documentação técnica", "Certificações e conformidade", "Certificados de treinamento e documentação das normas atendidas, disponíveis para consulta de clientes e órgãos fiscalizadores.", null, `<a href="#/">Início</a> / Certificações`) + `
    <section class="sec"><div class="wrap"><div class="cert-grid">${CERTS.map(certCard).join("")}</div></div></section>` + safetyBlock(),

  contato: () => pageHero("Contato", "Fale com a DDP Elétrica", "Atendimento em Tocantins e região, de segunda a sexta, das 7h às 18h.", null, `<a href="#/">Início</a> / Contato`) + `
    <section class="sec"><div class="wrap">
      <div class="contact-grid">
        <div class="cbox reveal"><div class="ic">${ic("chat")}</div><h3>WhatsApp</h3><p>Resposta rápida para orçamentos e chamados de manutenção.</p><a class="v" data-wa target="_blank" rel="noopener" href="#">${CONFIG.telefone}</a></div>
        <div class="cbox reveal"><div class="ic">${ic("mail")}</div><h3>E-mail</h3><p>Envio de documentos, propostas e solicitações formais.</p><a class="v" href="mailto:${CONFIG.email}">${CONFIG.email}</a></div>
        <div class="cbox reveal"><div class="ic">${ic("pin")}</div><h3>Atuação</h3><p>Sede em Palmas, com atendimento em todo o Tocantins e região.</p><span class="v" style="display:block;margin-top:14px;font-weight:600;color:var(--navy)">Palmas – TO</span></div>
      </div>
      <div style="text-align:center;margin-top:56px"><a href="#/orcamento" class="btn btn-amber">Solicitar orçamento ${arrow}</a></div>
    </div></section>`,

  orcamento: () => pageHero("Orçamento", "Solicite uma proposta técnica", "Preencha os dados da sua demanda. Em seguida, a solicitação é enviada direto para o WhatsApp da nossa equipe.", null) + `
    <section class="sec bg-light" style="padding-top:72px"><div class="wrap form-wrap">
      <div class="fcard" id="fcard"></div>
      <aside class="aside">
        <div class="abox"><h5>${ic("clock")} Como funciona</h5>
          <dl><dt>1. Envio</dt><dd>Você preenche o formulário e a solicitação abre pronta no WhatsApp da DDP Elétrica.</dd>
          <dt>2. Análise</dt><dd>Avaliamos o escopo e, se necessário, agendamos visita técnica ao local.</dd>
          <dt>3. Proposta</dt><dd style="margin:0">Você recebe o orçamento com etapas, prazo e condições de execução.</dd></dl>
        </div>
        <div class="abox"><h5>${ic("shield")} Dados protegidos</h5><p>Seus dados são usados apenas para elaborar a proposta. Plantas, listas de equipamentos e cartão CNPJ são enviados direto na conversa com a equipe responsável.</p></div>
        <div class="abox dark"><h4>Prefere falar direto?</h4><p>Atendimento em Tocantins e região, segunda a sexta, das 7h às 18h.</p><a data-wa target="_blank" rel="noopener" href="#">${ic("chat")} ${CONFIG.telefone}</a></div>
      </aside>
    </div></section>`
};

/* =========================================================
   FORMULÁRIO DE ORÇAMENTO (WhatsApp)
   ========================================================= */
const F = { tipo:null, data:{} };

function formStep1(){
  return `
    <div class="fsteps"><div class="fs on"><i>1</i>Perfil</div><div class="fline"></div><div class="fs"><i>2</i>Dados da solicitação</div></div>
    <div class="fbody">
      <h3>Para começar, selecione o perfil</h3>
      <p class="sub">Os dados solicitados variam conforme o perfil da solicitação.</p>
      <div class="prof">
        <button data-tipo="PF"><div class="pi">${ic("user")}</div><h4>Pessoa Física</h4><p>Propriedades rurais, sítios e instalações de pessoa física.</p><span class="link-arrow">Continuar ${arrow}</span></button>
        <button data-tipo="PJ"><div class="pi">${ic("building")}</div><h4>Pessoa Jurídica</h4><p>Indústrias, agroindústrias e empresas.</p><span class="link-arrow">Continuar ${arrow}</span></button>
      </div>
      <div class="fnote">${ic("lock")} Seus dados são usados apenas para elaborar a proposta.</div>
    </div>`;
}

const fld = (id, label, attrs="", extra="", cls="") => `
  <div class="fld ${cls}"><label for="${id}">${label}</label><input id="${id}" name="${id}" ${attrs}>${extra}<div class="emsg">Preencha este campo corretamente.</div></div>`;

function formStep2(preSvc){
  const pj = F.tipo === "PJ";
  return `
    <div class="fsteps"><div class="fs done"><i>✓</i>Perfil</div><div class="fline"></div><div class="fs on"><i>2</i>Dados da solicitação</div></div>
    <form class="fbody" id="qform" novalidate>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:16px">
        <h3>${pj ? "Dados da empresa e da obra" : "Seus dados e do local"}</h3>
        <button type="button" class="alt" id="back">Alterar perfil</button>
      </div>
      <div class="row">
        ${fld("nome","Nome completo *",'required autocomplete="name"',"","full")}
        ${fld("telefone","Telefone / WhatsApp *",'required inputmode="tel" placeholder="(63) 99999-9999" autocomplete="tel"')}
        ${pj ? fld("razao","Razão social *","required") : fld("emailc","E-mail",'type="email" autocomplete="email"')}
        ${pj ? fld("cnpj","CNPJ *",'required inputmode="numeric" placeholder="00.000.000/0000-00"') : ""}
      </div>
      <div class="fgroup"><h6>Endereço da obra</h6>
        <div class="row">
          ${fld("cep","CEP *",'required inputmode="numeric" placeholder="00000-000"','<div class="small" id="cepmsg">Preenchimento automático do endereço pelo CEP.</div>')}
          ${fld("rua","Rua / Logradouro *","required")}
          ${fld("numero","Número *","required")}
          ${fld("bairro","Bairro *","required")}
          ${fld("cidade","Cidade *","required")}
          ${fld("uf","Estado (UF) *",'required maxlength="2" placeholder="TO"')}
        </div>
      </div>
      <div class="fgroup"><h6>Escopo do serviço</h6>
        <div class="row">
          <div class="fld full"><label for="servico">Tipo de serviço *</label>
            <select id="servico" required><option value="">Selecione o serviço</option>${SERVICES.map(s => `<option value="${s.title}" ${s.slug===preSvc?"selected":""}>${s.title}</option>`).join("")}<option value="Outro">Outro</option></select>
            <div class="emsg">Selecione o tipo de serviço.</div></div>
          <div class="fld full"><label for="descricao">Descrição da solicitação *</label>
            <textarea id="descricao" required placeholder="Descreva a instalação, a demanda, o prazo esperado e qualquer informação relevante sobre a obra."></textarea>
            <div class="emsg">Descreva sua solicitação.</div></div>
        </div>
      </div>
      ${pj ? `
      <div class="fgroup"><h6>Requisitos do projeto</h6>
        <p class="hint">Marque os documentos que você tem. Você poderá anexá-los na conversa do WhatsApp logo após o envio.</p>
        <div class="docs">
          <label class="chk"><input type="checkbox" name="doc" value="Cartão CNPJ"> Cartão CNPJ</label>
          <label class="chk"><input type="checkbox" name="doc" value="Planta baixa"> Planta baixa</label>
          <label class="chk"><input type="checkbox" name="doc" value="Relação de equipamentos"> Relação de equipamentos</label>
          <label class="chk"><input type="checkbox" name="doc" value="Outros (PDF, imagens ou DWG)"> Outros (PDF, imagens, DWG)</label>
        </div>
        <label class="chk" style="margin-top:12px"><input type="checkbox" id="campo"> Não tenho os documentos, preciso de levantamento em campo.</label>
      </div>` : ""}
      <div class="ffoot">
        <small>${ic("lock")} Ao enviar, o WhatsApp abre com a mensagem pronta. É só tocar em enviar.</small>
        <button type="submit" class="btn btn-amber">Enviar solicitação ${arrow}</button>
      </div>
    </form>`;
}

function formSuccess(link){
  return `<div class="success">
    <div class="ok">${ic("check")}</div>
    <h3 style="font-size:28px;text-transform:uppercase">Solicitação pronta!</h3>
    <p>Abrimos o WhatsApp com sua solicitação preenchida. Se ele não abriu, toque no botão abaixo.${F.tipo==="PJ" ? " Aproveite a conversa para anexar os documentos do projeto." : ""}</p>
    <a href="${link}" target="_blank" rel="noopener" class="btn btn-amber">Abrir WhatsApp ${arrow}</a>
    <div style="margin-top:18px"><button class="alt" id="novo">Nova solicitação</button></div>
  </div>`;
}

const maskPhone = v => { v=v.replace(/\D/g,"").slice(0,11); if(v.length>10) return v.replace(/(\d{2})(\d{5})(\d{0,4})/,"($1) $2-$3"); if(v.length>6) return v.replace(/(\d{2})(\d{4})(\d{0,4})/,"($1) $2-$3"); if(v.length>2) return v.replace(/(\d{2})(\d{0,5})/,"($1) $2"); return v; };
const maskCEP = v => v.replace(/\D/g,"").slice(0,8).replace(/(\d{5})(\d)/,"$1-$2");
const maskCNPJ = v => v.replace(/\D/g,"").slice(0,14).replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d)/,"$1-$2");

function mountForm(preSvc){
  const card = document.getElementById("fcard");
  const render = () => {
    card.innerHTML = F.tipo ? formStep2(preSvc) : formStep1();
    if (!F.tipo) {
      card.querySelectorAll("[data-tipo]").forEach(b => b.onclick = () => { F.tipo = b.dataset.tipo; render(); card.scrollIntoView({behavior:"smooth",block:"start"}); });
      return;
    }
    const $ = id => card.querySelector("#"+id);
    $("back").onclick = () => { F.tipo = null; render(); };
    $("telefone").oninput = e => e.target.value = maskPhone(e.target.value);
    if ($("cnpj")) $("cnpj").oninput = e => e.target.value = maskCNPJ(e.target.value);
    $("uf").oninput = e => e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g,"");
    $("cep").oninput = async e => {
      e.target.value = maskCEP(e.target.value);
      const d = e.target.value.replace(/\D/g,"");
      if (d.length !== 8) return;
      const msg = $("cepmsg"); msg.textContent = "Buscando endereço…";
      try {
        const r = await fetch("https://viacep.com.br/ws/" + d + "/json/");
        const j = await r.json();
        if (j.erro) { msg.textContent = "CEP não encontrado. Preencha o endereço manualmente."; return; }
        $("rua").value = j.logradouro || ""; $("bairro").value = j.bairro || ""; $("cidade").value = j.localidade || ""; $("uf").value = j.uf || "";
        msg.textContent = "Endereço preenchido. Confira e informe o número.";
        $("numero").focus();
      } catch { msg.textContent = "Não foi possível buscar o CEP. Preencha o endereço manualmente."; }
    };
    $("qform").onsubmit = e => {
      e.preventDefault();
      let ok = true, first = null;
      card.querySelectorAll("[required]").forEach(el => {
        let valid = el.value.trim() !== "";
        if (el.id === "telefone") valid = el.value.replace(/\D/g,"").length >= 10;
        if (el.id === "cnpj") valid = el.value.replace(/\D/g,"").length === 14;
        if (el.id === "cep") valid = el.value.replace(/\D/g,"").length === 8;
        el.closest(".fld").classList.toggle("err", !valid);
        if (!valid) { ok = false; first = first || el; }
      });
      if (!ok) { first.focus(); first.scrollIntoView({behavior:"smooth",block:"center"}); return; }
      const v = id => ($(id) ? $(id).value.trim() : "");
      const docs = [...card.querySelectorAll('input[name="doc"]:checked')].map(x => x.value);
      const campo = $("campo") && $("campo").checked;
      const L = [];
      L.push("*Nova solicitação de orçamento – Site DDP Elétrica*", "");
      L.push("*Tipo:* " + (F.tipo === "PJ" ? "Pessoa Jurídica" : "Pessoa Física"));
      L.push("*Nome:* " + v("nome"));
      if (F.tipo === "PJ") { L.push("*Empresa:* " + v("razao")); L.push("*CNPJ:* " + v("cnpj")); }
      L.push("*Telefone:* " + v("telefone"));
      if (v("emailc")) L.push("*E-mail:* " + v("emailc"));
      L.push("*Endereço:* " + v("rua") + ", " + v("numero") + " – " + v("bairro") + ", " + v("cidade") + "/" + v("uf") + " – CEP " + v("cep"));
      L.push("*Serviço:* " + v("servico"), "");
      L.push("*Solicitação:*", v("descricao"));
      if (F.tipo === "PJ") {
        L.push("");
        L.push("*Documentos disponíveis:* " + (docs.length ? docs.join(", ") + " (vou anexar nesta conversa)" : "nenhum informado"));
        L.push("*Precisa de levantamento em campo:* " + (campo ? "Sim" : "Não"));
      }
      L.push("", "_Enviado em " + new Date().toLocaleString("pt-BR") + "_");
      const link = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(L.join("\n"));
      window.open(link, "_blank");
      card.innerHTML = formSuccess(link);
      card.querySelector("#novo").onclick = () => { F.tipo = null; render(); };
    };
  };
  render();
}

/* =========================================================
   ROTEADOR, ANIMAÇÕES E UTILIDADES
   ========================================================= */
const app = document.getElementById("app");
function route(){
  const raw = location.hash.replace(/^#\/?/, "");
  const [path, query] = raw.split("?");
  const parts = path.split("/").filter(Boolean);
  const params = new URLSearchParams(query || "");
  let key = parts[0] || "home", html;
  if (key === "servicos" && parts[1]) html = PAGES.servico(parts[1]);
  else html = (PAGES[key] || PAGES.home)();
  app.innerHTML = html;
  document.querySelectorAll(".menu a, #mmenu a").forEach(a => {
    const h = a.getAttribute("href").replace("#/","");
    a.classList.toggle("active", (h || "home") === key || (h === "" && key === "home"));
  });
  document.getElementById("mmenu").classList.remove("open");
  document.querySelector("section.cta").style.display = key === "orcamento" ? "none" : "";
  if (key === "orcamento") { F.tipo = null; mountForm(params.get("servico")); }
  if (key === "projetos") bindFilters();
  startHeroCarousel();
  wire();
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
  const titles = {home:"DDP Elétrica | Subestações e Instalações Elétricas Industriais no Tocantins", sobre:"Sobre | DDP Elétrica", servicos:"Serviços | DDP Elétrica", projetos:"Projetos | DDP Elétrica", certificacoes:"Certificações | DDP Elétrica", contato:"Contato | DDP Elétrica", orcamento:"Solicitar Orçamento | DDP Elétrica"};
  const s = key === "servicos" && parts[1] && SERVICES.find(x => x.slug === parts[1]);
  document.title = s ? s.title + " | DDP Elétrica" : (titles[key] || titles.home);
}

function bindFilters(){
  document.querySelectorAll("#filters button").forEach(b => b.onclick = () => {
    document.querySelectorAll("#filters button").forEach(x => x.classList.toggle("on", x === b));
    const f = b.dataset.f;
    document.getElementById("pgrid").innerHTML = PROJECTS.filter(p => f === "Todos" || p.service === f).map(projCard).join("");
    wire();
  });
}

let io;
function wire(){
  const waLink = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent("Olá! Vim pelo site da DDP Elétrica e gostaria de falar sobre um serviço.");
  document.querySelectorAll("[data-wa]").forEach(a => a.href = waLink);
  document.querySelectorAll("[data-phone]").forEach(a => { a.textContent = CONFIG.telefone; a.href = waLink; a.target = "_blank"; });
  document.querySelectorAll("[data-phone-txt]").forEach(a => a.textContent = CONFIG.telefone);
  document.querySelectorAll("[data-email]").forEach(a => { a.textContent = CONFIG.email; a.href = "mailto:" + CONFIG.email; });
  document.querySelectorAll("[data-lb]").forEach(el => el.onclick = () => openLb(el));
  if (io) io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    if (e.target.dataset.count) countUp(e.target);
    io.unobserve(e.target);
  }), {threshold:.12});
  document.querySelectorAll(".reveal:not(.in), [data-count]").forEach(el => io.observe(el));
}

function countUp(el){
  const to = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now(), d = 1400;
  const step = t => { const p = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(to * e) + suf; if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/* Carrossel de fundo do banner (troca a cada 5 s, com pontos clicáveis) */
let heroTimer;
function startHeroCarousel(){
  clearInterval(heroTimer);
  const hero = document.querySelector(".phero");
  if (!hero) return;
  const slides = hero.querySelectorAll(".phero-slides img");
  const dots = hero.querySelectorAll(".phero-dots button");
  let cur = 0;
  const go = n => {
    cur = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("on", i === cur));
    dots.forEach((d, i) => d.classList.toggle("on", i === cur));
  };
  const play = () => {
    clearInterval(heroTimer);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) heroTimer = setInterval(() => go(cur + 1), 5000);
  };
  dots.forEach(d => d.onclick = () => { go(+d.dataset.slide); play(); });
  play();
}

/* Lightbox com navegação entre as fotos da mesma página */
const lb = document.getElementById("lb");
let lbItems = [], lbIdx = 0;
function showLb(i){
  lbIdx = (i + lbItems.length) % lbItems.length;
  const el = lbItems[lbIdx];
  document.getElementById("lb-img").src = el.dataset.lb;
  document.getElementById("lb-cap").textContent = (el.dataset.cap || "") + (lbItems.length > 1 ? `  ·  ${lbIdx + 1}/${lbItems.length}` : "");
}
function openLb(el){
  const group = el.closest(".photo-grid, .gal, .proj-grid") || document;
  lbItems = [...group.querySelectorAll("[data-lb]")];
  lb.classList.toggle("multi", lbItems.length > 1);
  showLb(lbItems.indexOf(el));
  lb.classList.add("open");
}
lb.onclick = e => {
  if (e.target.closest("#lb-prev")) return showLb(lbIdx - 1);
  if (e.target.closest("#lb-next")) return showLb(lbIdx + 1);
  if (e.target === lb || e.target.closest("#lb-x")) lb.classList.remove("open");
};
document.addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") lb.classList.remove("open");
  if (e.key === "ArrowLeft") showLb(lbIdx - 1);
  if (e.key === "ArrowRight") showLb(lbIdx + 1);
});

document.getElementById("burger").onclick = () => document.getElementById("mmenu").classList.toggle("open");
window.addEventListener("scroll", () => document.getElementById("nav").classList.toggle("scrolled", scrollY > 10), {passive:true});
document.getElementById("ft-svc").innerHTML = SERVICES.map(s => `<li><a href="#/servicos/${s.slug}">${s.short}</a></li>`).join("");
document.getElementById("yr").textContent = new Date().getFullYear();
document.getElementById("qr").src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&color=0B1F3A&data=" + encodeURIComponent(CONFIG.site);

window.addEventListener("hashchange", route);
route();