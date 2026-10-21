/* ===================================================================
   DERS · site próprio
   Conceito: "peças que se encaixam". As duas peças da marca (S violeta,
   D verde) se encaixam na intro, o site do cliente se monta peça a peça
   no "Qual site é o seu?" e cada etapa do trabalho acende em sequência.
   Conteúdo que muda fica nos arrays abaixo.
   =================================================================== */
(function () {
  'use strict';

  var CFG = window.DERS_SITE || {};

  /* ---------- Conteúdo ---------- */
  var PORTFOLIO = [
    { nome: 'Sonhar e Brincar', ramo: 'Aluguel de brinquedos para festas', url: 'https://sonhar-e-brincar.vercel.app/', id: 'sonhar' },
    { nome: 'Detalhe Perfeito', ramo: 'Estúdio automotivo', url: 'https://detalhe-perfeito.vercel.app/', id: 'detalhe' },
    { nome: 'PhoneStore', ramo: 'Acessórios para celular', url: 'https://phonestore-nu.vercel.app/', id: 'phonestore' },
    { nome: 'GHC Sport Media', ramo: 'Fotografia esportiva', url: 'https://ghcsportsmedia.com.br/', id: 'ghc' },
    { nome: 'Alpha Fechos e Acessórios', ramo: 'Fábrica de fechos e reguladores', url: 'https://alphafehos.com.br/', id: 'alpha' },
    { nome: 'Sistema DERS', ramo: 'Painel de pedidos e agenda (demonstração)', url: CFG.sistemaDemoUrl, id: 'sistema', demo: true }
  ];

  var PALAVRAS = ['vende por você', 'tem a sua cara', 'trabalha 24 horas', 'leva o cliente até você'];

  var PASSOS = [
    { t: 'Você responde o formulário', d: 'Nome, empresa, logo e o que o site precisa fazer. Tem ajuda em cada pergunta.', tag: 'Uns 5 minutos' },
    { t: 'Escolhe o horário da conversa', d: 'Você marca o melhor dia e hora para a gente te ligar. Os horários começam 2 horas depois do envio, para dar tempo de criar o seu site.', tag: 'Seg a sex 8h–22h · sáb e dom 10h–17h' },
    { t: 'Recebe o protótipo e um vídeo', d: 'O seu site com a sua logo e as suas cores, mais um vídeo mostrando como ele funciona. Chega no seu WhatsApp.', tag: 'Antes da conversa' },
    { t: 'A gente conversa', d: 'Você diz o que gostou e o que mudaria. Aí você recebe o orçamento do que o seu projeto realmente precisa.', tag: 'Sem compromisso' },
    { t: 'Você manda os materiais e o site vai ao ar', d: 'Fotos, textos e contatos num formulário simples. O protótipo vira o site final, sem começar do zero.', tag: 'Publicado e seguro' }
  ];

  var TIPOS = {
    mini: { nome: 'Mini Site', preco: 'A partir de R$ 150', d: 'Seu negócio em um único link, perfeito para a bio do Instagram.', inclui: ['Botões grandes de contato', 'Destaques que deslizam', 'Horário e formas de pagamento'],
      blocos: [['Sua logo', 'topo-bloco', 1.2], ['WhatsApp', 'verde pilula'], ['Instagram', 'claro pilula'], ['Como chegar', 'claro pilula'], ['Destaques', 'claro', 1.3], ['Horário', 'claro', .7]] },
    divulgacao: { nome: 'Página de Divulgação', preco: 'A partir de R$ 500', d: 'Uma página para vender um produto, serviço ou campanha.', inclui: ['Abertura com o benefício principal', 'Como funciona em 3 passos', 'Perguntas frequentes'],
      blocos: [['A sua oferta', 'topo-bloco', 1.4], ['Benefícios', 'claro'], ['Como funciona', 'claro'], ['Oferta', 'violeta'], ['Perguntas', 'claro', .8], ['Chamar no WhatsApp', 'verde pilula']] },
    empresa: { nome: 'Site para Empresa', preco: 'A partir de R$ 800', d: 'Uma presença profissional para apresentar a empresa, os serviços e o contato.', inclui: ['Topo com vídeo ou foto viva', 'Serviços, galeria e sobre', 'Contato com mapa'],
      blocos: [['Topo com vídeo', 'topo-bloco', 1.4], ['Sobre', 'claro', .8], ['Serviços', 'violeta'], ['Galeria', 'claro'], ['Contato e mapa', 'claro', .8], ['WhatsApp', 'verde pilula']] },
    catalogo: { nome: 'Site com Catálogo', preco: 'A partir de R$ 1.300', d: 'Seus produtos organizados, com carrinho que monta o pedido e manda no seu WhatsApp.', inclui: ['Catálogo com busca e filtros', 'Carrinho com total', 'Pedido direto no WhatsApp'],
      blocos: [['Topo', 'topo-bloco', 1.1], ['Departamentos', 'claro pilula'], ['Produtos', 'claro', 2], ['Carrinho', 'violeta', .8], ['Pedido no WhatsApp', 'verde pilula']] },
    sistema: { nome: 'Site + Sistema sob medida', preco: 'A partir de R$ 2.000', d: 'O site com agenda, login ou pagamento e um painel só seu para aprovar e responder.', inclui: ['Agenda ou pedidos online', 'Painel com login e senha', 'Aviso para o cliente no WhatsApp'],
      blocos: [['Topo', 'topo-bloco', 1], ['Serviços', 'claro', .8], ['Agenda online', 'violeta', 1.2], ['Login seguro', 'claro', .7], ['Seu painel', 'verde', 1], ['Aviso no WhatsApp', 'claro pilula']] }
  };

  var PERGUNTAS = [
    { p: 'O que o site precisa fazer primeiro?', o: [
      ['Ser o link da bio, com os meus contatos', 'mini'], ['Divulgar um produto, serviço ou promoção', 'divulgacao'],
      ['Apresentar a empresa e os serviços', 'empresa'], ['Mostrar os produtos para o cliente pedir', 'catalogo']] },
    { p: 'O cliente precisa agendar, entrar com login ou pagar no site?', o: [
      ['Não, o WhatsApp resolve', ''], ['Sim, agendar horários', 'sistema'], ['Sim, login ou pagamento', 'sistema']] },
    { p: 'Como os clientes te encontram hoje?', o: [
      ['Pelo Instagram', 'insta'], ['Pelo Google', 'google'], ['Por indicação', 'indicacao'], ['Ainda não me encontram', 'novo']] }
  ];
  var EXTRAS = {
    insta: 'Dica: o WhatsApp Business organizado (a partir de R$ 150) ajuda a responder quem chega pelo Instagram.',
    google: 'Dica: o Perfil da Empresa no Google (a partir de R$ 150) e o SEO (a partir de R$ 200) ajudam a aparecer melhor.',
    indicacao: 'Dica: um link bonito para mandar no WhatsApp faz a indicação virar cliente mais rápido.',
    novo: 'Dica: comece com o Perfil da Empresa no Google (a partir de R$ 150) para ser encontrado na sua região.'
  };

  var GRUPOS = [
    { id: 'sites', nome: 'Sites', itens: [
      { n: 'Mini Site', p: 'A partir de R$ 150', r: 'Seu negócio em um único link, ideal para colocar na bio.', i: ['Uma tela', 'Botões de contato', 'Destaques', 'Link para a bio'] },
      { n: 'Página de Divulgação', p: 'A partir de R$ 500', r: 'Uma página para apresentar sua empresa, serviço, produto ou campanha.', i: ['Página longa', 'Benefícios', 'Perguntas frequentes', 'Chamada para o WhatsApp'] },
      { n: 'Site para Empresa', p: 'A partir de R$ 800', r: 'Uma presença profissional para apresentar sua empresa, serviços e informações.', i: ['Serviços', 'Galeria', 'Sobre', 'Contato com mapa'] },
      { n: 'Site com Catálogo', p: 'A partir de R$ 1.300', r: 'Apresente seus produtos de forma organizada e facilite o contato com seus clientes.', i: ['Catálogo', 'Busca e filtros', 'Carrinho', 'Pedido no WhatsApp'] },
      { n: 'Projeto Sob Medida', p: 'A partir de R$ 2.000', r: 'Uma solução desenvolvida para as necessidades específicas do seu negócio.', i: ['Login', 'Agenda', 'Pagamento', 'Painel'] }
    ] },
    { id: 'sistemas', nome: 'Sistemas', itens: [
      { n: 'Agenda online com painel', p: 'Sob medida', r: 'O cliente agenda no site e você aprova, recusa ou remarca num painel com login.', i: ['Horários livres', 'Aprovar ou recusar', 'Aviso no WhatsApp'] },
      { n: 'Pedidos e orçamentos', p: 'Sob medida', r: 'Pedidos chegam organizados num painel, com status e histórico de cada cliente.', i: ['Status do pedido', 'Histórico', 'Busca'] },
      { n: 'Área de membros e login', p: 'Sob medida', r: 'Cadastro, login (inclusive com Google) e conteúdo só para quem tem acesso.', i: ['Cadastro', 'Login com Google', 'Áreas restritas'] }
    ], nota: 'Sistemas fazem parte do Projeto Sob Medida (a partir de R$ 2.000). O valor depende do que o sistema precisa fazer.' },
    { id: 'google', nome: 'Google', itens: [
      { n: 'Perfil da Empresa no Google', p: 'A partir de R$ 150', r: 'Configuração e organização do perfil para facilitar que clientes encontrem sua empresa.', i: ['Mapa', 'Horário', 'Fotos'] },
      { n: 'SEO', p: 'A partir de R$ 200', r: 'Otimizações para melhorar a estrutura e a presença orgânica do site.', i: ['Estrutura', 'Textos', 'Velocidade'] },
      { n: 'Search Console', p: 'Incluso conforme o projeto', r: 'Acompanhamento da presença e do desempenho do site na Pesquisa Google.', i: [] },
      { n: 'Google Analytics', p: 'A partir de R$ 100', r: 'Configuração para acompanhar acessos, comportamento e eventos importantes.', i: [] },
      { n: 'Google Ads', p: 'A partir de R$ 150', r: 'Criação e gerenciamento de campanhas de anúncios. O valor investido nos anúncios é separado.', i: [] }
    ], nota: 'Nenhuma solução promete primeira posição, quantidade de clientes ou resultados garantidos.' },
    { id: 'whatsapp', nome: 'WhatsApp', itens: [
      { n: 'WhatsApp Business', p: 'A partir de R$ 150', r: 'Configuração e organização do WhatsApp Business para melhorar o atendimento.', i: ['Catálogo', 'Respostas rápidas', 'Etiquetas'] },
      { n: 'Automação e Chatbot', p: 'A partir de R$ 250', r: 'Automatize partes do atendimento e facilite processos repetitivos.', i: ['Mensagens automáticas', 'Fluxos'] }
    ], nota: 'O valor depende da quantidade de automações e da complexidade do fluxo.' },
    { id: 'cuidado', nome: 'Alterações', itens: [
      { n: 'Pequena alteração', p: 'A partir de R$ 20', r: 'Trocar texto, imagem, telefone, informação ou fazer pequenos ajustes.', i: [] },
      { n: 'Alteração média', p: 'A partir de R$ 50', r: 'Adicionar produtos, alterar uma seção, atualizar conteúdos ou pequenas mudanças de layout.', i: [] },
      { n: 'Alteração estrutural', p: 'Orçamento personalizado', r: 'Nova página, funcionalidade, sistema, integração ou mudanças maiores no design.', i: [] }
    ], nota: 'O valor é informado antes da realização da alteração.' },
    { id: 'publicacao', nome: 'Domínio e publicação', itens: [
      { n: 'Domínio, hospedagem e publicação', p: 'Conforme o projeto', r: 'Cuidamos do necessário para colocar o projeto no ar: domínio, hospedagem, configuração e publicação.', i: ['Domínio', 'Hospedagem', 'HTTPS'] }
    ], nota: 'Esses custos variam conforme o projeto e são apresentados no orçamento.' }
  ];

  var SISTEMAS = ['Agenda com os seus horários de atendimento', 'Aprovar, recusar ou propor outro horário', 'Mensagem pronta para o cliente no WhatsApp', 'Login e senha só para você', 'Funciona no celular como aplicativo'];

  var PILARES = [
    { t: 'Segurança', d: 'Endereço com cadeado (HTTPS) e proteções que reduzem riscos e mantêm o site seguro.', ic: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>' },
    { t: 'Estrutura técnica', d: 'A configuração necessária para o projeto funcionar bem hoje e crescer depois.', ic: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>' },
    { t: 'Feito para celular', d: 'Pensado primeiro para o celular, e funciona também no tablet e no computador.', ic: '<rect x="7" y="2" width="10" height="20" rx="3"/><path d="M11 18h2"/>' },
    { t: 'Desempenho', d: 'Imagens leves e código enxuto para o site abrir rápido, mesmo no 4G.', ic: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>' },
    { t: 'Privacidade e cookies', d: 'Aviso de cookies com a cara da sua marca e ferramentas que só rodam com o aceite.', ic: '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="15" cy="8.5" r="1"/>' },
    { t: 'Termos e informações legais', d: 'Política de Privacidade e Termos de Uso, como pede a LGPD quando há coleta de dados.', ic: '<path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5M9 13h7M9 17h5"/>' }
  ];
  var COMPLETO = ['Banco de dados', 'Login e cadastro', 'Backend', 'Áreas restritas', 'Pagamentos', 'Privacidade (LGPD)'];
  var CADEIA = ['Design', 'Código', 'Segurança', 'Publicação', 'Site no ar'];

  var PLANOS = [
    { n: 'Cuidado do Site', v: 'R$ 100', l: ['Pequenas alterações de textos', 'Troca de imagens', 'Atualização de informações', 'Correções e manutenção básica', 'Acompanhamento do funcionamento'], nota: 'Alterações grandes, novas páginas ou funcionalidades são avaliadas à parte.' },
    { n: 'Cuidado + Google', v: 'R$ 200', destaque: true, l: ['Tudo do Cuidado do Site', 'Acompanhamento do Perfil da Empresa', 'Search Console e Analytics básicos', 'Pequenas otimizações', 'Orientação sobre presença online'], nota: 'Não inclui investimento em anúncios nem SEO completo.' }
  ];

  var FAQ = [
    ['O protótipo é pago?', 'Não. Você responde o formulário, recebe o protótipo e o vídeo e só decide depois da nossa conversa. Se não quiser seguir, tudo bem.'],
    ['Quanto custa o meu site?', 'Os valores "a partir de" servem de referência. O valor final sai depois de entendermos o seu negócio, o objetivo e a complexidade do projeto, e você recebe o orçamento antes de começar.'],
    ['Quanto tempo leva para o site ficar pronto?', 'Depende do tipo de site e de quando os materiais chegam. O prazo é combinado no orçamento, antes de começar.'],
    ['Preciso ter domínio?', 'Para o protótipo, não. Para o site final, a gente te ajuda a escolher e registrar o endereço (ex.: suaempresa.com.br).'],
    ['O site vai aparecer no Google?', 'O site sai com a estrutura certa para o Google. O Perfil da Empresa no Google e o SEO são serviços à parte. Nenhuma solução promete primeira posição ou resultado garantido.'],
    ['Posso mudar o site depois?', 'Pode. Com o plano Cuidado do Site as pequenas alterações estão incluídas. Sem plano, alterações avulsas a partir de R$ 20, com o valor informado antes.'],
    ['E se eu precisar de agenda, login ou pagamento?', 'Aí o projeto é Sob Medida, com banco de dados, login seguro e painel só seu. Pagamentos passam sempre por uma empresa de pagamento: o site nunca guarda dados de cartão.'],
    ['Como vocês cuidam dos dados?', 'Seguimos a LGPD: coletamos só o necessário, usamos para o seu projeto e você pode pedir a exclusão a qualquer momento. Veja a Política de Privacidade.']
  ];

  /* ---------- Utilidades ---------- */
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var toque = window.matchMedia('(hover: none)').matches;
  function guardar(chave, v) { try { sessionStorage.setItem(chave, v); } catch (e) { } }
  function ler(chave) { try { return sessionStorage.getItem(chave); } catch (e) { return null; } }

  $$('[data-forms]').forEach(function (a) { a.href = CFG.formsUrl || '#'; });
  $('#link-demo').href = CFG.sistemaDemoUrl || '#';
  $('#ano').textContent = new Date().getFullYear();

  /* ---------- Intro (até ~2,3 s, só na primeira visita da sessão) ---------- */
  (function intro() {
    var el = $('#intro');
    if (calmo || ler('ders-intro')) { el.classList.add('fim'); return; }
    guardar('ders-intro', '1');
    document.body.classList.add('com-intro');
    var acabou = false;
    function terminar() {
      if (acabou) return; acabou = true;
      var origem = $('#intro-logo'), destino = $('#logo-topo');
      var a = origem.getBoundingClientRect(), b = destino.getBoundingClientRect();
      var escala = b.height / a.height;
      el.classList.add('saindo');
      origem.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1), opacity .25s .45s';
      origem.style.transform = 'translate(' + (b.left - a.left) + 'px,' + (b.top - a.top) + 'px) scale(' + escala + ')';
      origem.style.opacity = '0';
      setTimeout(function () { document.body.classList.remove('com-intro'); }, 450);
      setTimeout(function () { el.classList.add('fim'); }, 700);
    }
    el.addEventListener('click', terminar);
    setTimeout(terminar, 1500);
    setTimeout(function () { if (!acabou) terminar(); }, 3000);
  })();

  /* ---------- Topo e menu ---------- */
  var topo = $('#topo'), flut = $('.flutuante');
  function aoRolar() {
    var y = window.scrollY;
    topo.classList.toggle('rolou', y > 20);
    flut.classList.toggle('mostrar', y > window.innerHeight * .7);
  }
  window.addEventListener('scroll', aoRolar, { passive: true }); aoRolar();

  var menu = $('#menu'), menuBtn = $('#menu-btn');
  function menuAbrir(abrir) {
    menuBtn.setAttribute('aria-expanded', abrir ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-aberto', abrir);
    if (abrir) { menu.hidden = false; requestAnimationFrame(function () { menu.classList.add('aberto'); }); $$('nav a', menu).forEach(function (a, i) { a.style.transitionDelay = (0.12 + i * 0.05) + 's'; }); }
    else { menu.classList.remove('aberto'); setTimeout(function () { if (!menu.classList.contains('aberto')) menu.hidden = true; }, 600); }
    document.body.style.overflow = abrir ? 'hidden' : '';
  }
  menuBtn.addEventListener('click', function () { menuAbrir(menuBtn.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) menuAbrir(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') menuAbrir(false); });

  /* ---------- 1. Primeira tela: palavra que troca ---------- */
  (function trocaPalavra() {
    var el = $('#troca'), i = 0;
    function mostra(txt) {
      el.innerHTML = txt.split('').map(function (c, j) { return '<span class="letra" style="animation-delay:' + (j * 22) + 'ms">' + (c === ' ' ? '&nbsp;' : esc(c)) + '</span>'; }).join('');
      el.setAttribute('aria-label', txt);
      // cada letra pinta o seu pedaço do degradê, para a palavra continuar com uma cor só correndo
      var largura = el.offsetWidth;
      $$('.letra', el).forEach(function (l) { l.style.backgroundSize = largura + 'px 100%'; l.style.backgroundPosition = -l.offsetLeft + 'px 0'; });
    }
    if (calmo) return;
    setInterval(function () { i = (i + 1) % PALAVRAS.length; mostra(PALAVRAS[i]); }, 3200);
  })();

  /* ---------- 1. Vitrine de celulares com sites reais rolando ---------- */
  (function vitrine() {
    var area = $('#vitrine'), sites = PORTFOLIO.filter(function (p) { return !p.demo; }), ordem = sites.map(function (_, i) { return i; });
    area.innerHTML = sites.map(function (s, i) {
      return '<figure class="cel" data-i="' + i + '"><span class="cel-tela"><img class="cel-rola" src="port-' + s.id + '-cel.webp" alt="Site ' + esc(s.nome) + ' no celular" ' + (i > 2 ? 'loading="lazy" ' : '') + 'width="390"></span><figcaption class="cel-nome">' + esc(s.nome) + '</figcaption></figure>';
    }).join('') + '<div class="vitrine-pontos" role="tablist" aria-label="Escolher site">' + sites.map(function (s, i) { return '<button type="button" role="tab" aria-label="' + esc(s.nome) + '" data-ir="' + i + '"></button>'; }).join('') + '</div>';
    var cels = $$('.cel', area);
    function posicionar() {
      // a frente é ordem[0]; à direita ordem[1]; à esquerda ordem[ultimo]
      cels.forEach(function (c) { c.dataset.pos = '3'; });
      cels[ordem[0]].dataset.pos = '0'; cels[ordem[1]].dataset.pos = '1'; cels[ordem[ordem.length - 1]].dataset.pos = '2';
      $$('.vitrine-pontos button', area).forEach(function (b, i) { b.classList.toggle('ativo', i === ordem[0]); });
    }
    function irPara(i) { while (ordem[0] !== i) ordem.push(ordem.shift()); posicionar(); reiniciar(); }
    $$('.cel-rola', area).forEach(function (img) {
      function medir() {
        var tela = img.parentNode.clientHeight, alt = img.clientHeight || 1;
        var fim = Math.min(0, -(1 - tela / alt) * 100);
        img.style.setProperty('--fim', fim.toFixed(1) + '%');
        img.style.setProperty('--dur', Math.max(14, Math.round(alt / 90)) + 's');
      }
      if (img.complete) medir(); else img.addEventListener('load', medir);
      window.addEventListener('resize', medir);
    });
    area.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ir]'); if (b) { irPara(+b.dataset.ir); return; }
      var c = e.target.closest('.cel'); if (!c) return;
      var i = +c.dataset.i;
      if (c.dataset.pos === '0') window.open(sites[i].url, '_blank', 'noopener'); else irPara(i);
    });
    var timer;
    function reiniciar() { clearInterval(timer); if (!calmo) timer = setInterval(function () { ordem.push(ordem.shift()); posicionar(); }, 6000); }
    posicionar(); reiniciar();
    // inclinação 3D com o mouse ou o dedo
    function inclinar(x, y) {
      var r = area.getBoundingClientRect();
      var dx = (x - r.left) / r.width - .5, dy = (y - r.top) / r.height - .5;
      area.style.setProperty('--ry', (dx * 18).toFixed(1) + 'deg'); area.style.setProperty('--rx', (-dy * 14).toFixed(1) + 'deg');
      cels.forEach(function (c) { if (c.dataset.pos === '0') { c.style.setProperty('--ry', (dx * 18).toFixed(1) + 'deg'); c.style.setProperty('--rx', (-dy * 14).toFixed(1) + 'deg'); } });
    }
    area.addEventListener('pointermove', function (e) { inclinar(e.clientX, e.clientY); });
    area.addEventListener('pointerleave', function () { cels.forEach(function (c) { c.style.setProperty('--ry', '0deg'); c.style.setProperty('--rx', '0deg'); }); });
    // deslizar com o dedo troca o site
    var x0 = null;
    area.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    area.addEventListener('touchend', function (e) {
      if (x0 == null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { if (dx < 0) ordem.push(ordem.shift()); else ordem.unshift(ordem.pop()); posicionar(); reiniciar(); }
    });
  })();

  /* ---------- 2. Como funciona: trilha que acende com a rolagem ---------- */
  var trilha = $('#trilha');
  trilha.innerHTML = PASSOS.map(function (p, i) {
    return '<li class="revelar" style="--atraso:' + (i * 0.06) + 's"><span class="marca-passo" aria-hidden="true"></span><span class="num">0' + (i + 1) + '</span><h3>' + esc(p.t) + '</h3><p>' + esc(p.d) + '</p><span class="tag">' + esc(p.tag) + '</span></li>';
  }).join('');
  function progressoTrilha() {
    var r = trilha.getBoundingClientRect(), meio = window.innerHeight * .6;
    var p = Math.max(0, Math.min(1, (meio - r.top) / r.height));
    trilha.style.setProperty('--progresso', (p * 100).toFixed(1) + '%');
    $$('li', trilha).forEach(function (li) { li.classList.toggle('feito', li.getBoundingClientRect().top < meio); });
  }
  window.addEventListener('scroll', progressoTrilha, { passive: true }); progressoTrilha();

  /* ---------- 3. Qual site é o seu? (interação assinatura) ---------- */
  (function quiz() {
    var area = $('#quiz'), tela = $('#tela-montagem'), respostas = [];
    function montar(tipo) {
      if (!tipo) {
        // antes da primeira resposta: peças fantasmas respirando, para a tela não ficar vazia
        tela.innerHTML = [3, 1, 2, 1, .5].map(function (h, i) { return '<div class="bloco-site fantasma" style="--d:' + (i * 0.18) + 's;--h:' + h + '"></div>'; }).join('') +
          '<p class="vazio-montagem">Suas respostas montam o site aqui, peça por peça.</p>';
        return;
      }
      tela.innerHTML = TIPOS[tipo].blocos.map(function (b, i) {
        var lado = i % 2 ? '40px' : '-40px', giro = i % 2 ? '10deg' : '-10deg';
        return '<div class="bloco-site ' + b[1] + '" style="--d:' + (i * 0.11) + 's;--x:' + lado + ';--r:' + giro + ';--h:' + (b[2] || 1) + '">' + esc(b[0]) + '</div>';
      }).join('');
    }
    function tipoAtual() { return respostas[1] === 'sistema' ? 'sistema' : respostas[0]; }
    function desenhar() {
      var n = respostas.length;
      if (n < PERGUNTAS.length) {
        var q = PERGUNTAS[n];
        area.innerHTML = '<p class="contagem">Pergunta ' + (n + 1) + ' de ' + PERGUNTAS.length + '</p><p class="pergunta">' + esc(q.p) + '</p><div class="opcoes">' +
          q.o.map(function (o, i) { return '<button type="button" class="opcao" style="animation-delay:' + (i * 0.06) + 's" data-v="' + o[1] + '"><span class="bolinha">' + String.fromCharCode(65 + i) + '</span><span>' + esc(o[0]) + '</span></button>'; }).join('') + '</div>' +
          (n ? '<button type="button" class="refazer" data-voltar>Voltar</button>' : '');
      } else {
        var t = TIPOS[tipoAtual()], extra = EXTRAS[respostas[2]];
        area.innerHTML = '<div class="resultado"><p class="contagem">O seu site é</p><p class="tipo">' + esc(t.nome) + '</p><span class="preco">' + esc(t.preco) + '</span><p>' + esc(t.d) + '</p><ul>' +
          t.inclui.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' + (extra ? '<p>' + esc(extra) + '</p>' : '') +
          '<div class="acoes"><a class="btn branco" href="' + esc(CFG.formsUrl || '#') + '">Quero o protótipo deste site <span class="seta" aria-hidden="true">→</span></a></div>' +
          '<button type="button" class="refazer" data-refazer>Responder de novo</button></div>';
      }
      montar(tipoAtual());
    }
    area.addEventListener('click', function (e) {
      var o = e.target.closest('.opcao');
      if (o) { respostas.push(o.dataset.v); desenhar(); return; }
      if (e.target.closest('[data-voltar]')) { respostas.pop(); desenhar(); return; }
      if (e.target.closest('[data-refazer]')) { respostas = []; desenhar(); }
    });
    desenhar();
  })();

  /* ---------- 4. Soluções ---------- */
  (function solucoes() {
    var abas = $('#grupos'), lista = $('#servicos'), atual = GRUPOS[0].id;
    abas.innerHTML = GRUPOS.map(function (g) { return '<button type="button" class="grupo" role="tab" data-g="' + g.id + '" aria-selected="' + (g.id === atual) + '">' + esc(g.nome) + '</button>'; }).join('');
    function desenhar() {
      var g = GRUPOS.filter(function (x) { return x.id === atual; })[0];
      lista.innerHTML = g.itens.map(function (s, i) {
        return '<li class="servico" style="--d:' + (i * 0.05) + 's"><button type="button" class="servico-cab" aria-expanded="false"><span class="servico-nome">' + esc(s.n) + '</span><span class="servico-preco">' + esc(s.p) + '</span><span class="servico-resumo">' + esc(s.r) + '</span></button>' +
          (s.i.length ? '<div class="servico-corpo"><div><div class="dentro"><ul>' + s.i.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul><a class="btn principal pequeno" href="' + esc(CFG.formsUrl || '#') + '">Quero este <span class="seta" aria-hidden="true">→</span></a></div></div></div>' : '') + '</li>';
      }).join('') + (g.nota ? '<li class="nota-grupo">' + esc(g.nota) + '</li>' : '');
    }
    abas.addEventListener('click', function (e) {
      var b = e.target.closest('.grupo'); if (!b) return;
      atual = b.dataset.g; $$('.grupo', abas).forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); }); desenhar();
    });
    lista.addEventListener('click', function (e) {
      var c = e.target.closest('.servico-cab'); if (!c) return;
      var li = c.parentNode; if (!$('.servico-corpo', li)) return;
      var abrir = !li.classList.contains('aberto');
      $$('.servico', lista).forEach(function (x) { x.classList.remove('aberto'); $('.servico-cab', x).setAttribute('aria-expanded', 'false'); });
      li.classList.toggle('aberto', abrir); c.setAttribute('aria-expanded', abrir ? 'true' : 'false');
    });
    desenhar();
  })();

  /* ---------- 5. Sistemas ---------- */
  $('#lista-sistemas').innerHTML = SISTEMAS.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('');

  /* ---------- 6. Portfólio arrastável ---------- */
  (function portfolio() {
    var lista = $('#cartoes-port'), trilho = $('#trilho');
    lista.innerHTML = PORTFOLIO.map(function (p) {
      return '<li class="port revelar"><a href="' + esc(p.url) + '" target="_blank" rel="noopener" aria-label="Abrir ' + esc(p.nome) + '">' +
        '<div class="port-pc"><img src="port-' + p.id + '-pc.webp" alt="Site ' + esc(p.nome) + ' no computador" loading="lazy" width="960" height="600" draggable="false"></div>' +
        '<figure class="cel"><span class="cel-tela"><img src="port-' + p.id + '-topo.webp" alt="" loading="lazy" width="390" height="844" draggable="false"></span></figure>' +
        (p.demo ? '<span class="selo-demo">Demonstração</span>' : '') +
        '<div class="port-info"><div><h3>' + esc(p.nome) + '</h3><p>' + esc(p.ramo) + '</p></div><span class="port-abrir" aria-hidden="true">↗</span></div></a></li>';
    }).join('');
    // arrastar com inércia no computador (no celular o dedo já rola)
    var ini = null, ultimoX = 0, vel = 0, moveu = false, raf;
    trilho.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse') return;
      ini = { x: e.clientX, s: trilho.scrollLeft }; ultimoX = e.clientX; vel = 0; moveu = false; cancelAnimationFrame(raf);
    });
    window.addEventListener('pointermove', function (e) {
      if (!ini) return;
      var dx = e.clientX - ini.x; if (Math.abs(dx) > 5) { moveu = true; trilho.classList.add('arrastando'); }
      trilho.scrollLeft = ini.s - dx; vel = e.clientX - ultimoX; ultimoX = e.clientX;
    });
    window.addEventListener('pointerup', function () {
      if (!ini) return; ini = null;
      (function inercia() { vel *= .94; trilho.scrollLeft -= vel; if (Math.abs(vel) > .5) raf = requestAnimationFrame(inercia); else trilho.classList.remove('arrastando'); })();
    });
    trilho.addEventListener('click', function (e) { if (moveu) { e.preventDefault(); moveu = false; } }, true);
    trilho.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') trilho.scrollBy({ left: 400, behavior: 'smooth' });
      if (e.key === 'ArrowLeft') trilho.scrollBy({ left: -400, behavior: 'smooth' });
    });
  })();

  /* ---------- 7. Segurança ---------- */
  $('#cadeia').innerHTML = CADEIA.map(function (c, i) { return (i ? '<span class="elo-seta" aria-hidden="true">→</span>' : '') + '<span class="elo' + (i === CADEIA.length - 1 ? ' final-elo' : '') + '">' + esc(c) + '</span>'; }).join('');
  $('#pilares').innerHTML = PILARES.map(function (p, i) {
    return '<li class="pilar revelar" style="--atraso:' + (i % 2 * 0.08) + 's"><span class="ic"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p.ic + '</svg></span><div><h3>' + esc(p.t) + '</h3><p>' + esc(p.d) + '</p></div></li>';
  }).join('');
  $('#etiquetas-completo').innerHTML = COMPLETO.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('');

  /* ---------- 8. Planos ---------- */
  $('#planos').innerHTML = PLANOS.map(function (p) {
    return '<article class="plano revelar' + (p.destaque ? ' destaque' : '') + '"><span class="brilho" aria-hidden="true"></span><h3>' + esc(p.n) + '</h3><p class="valor">' + esc(p.v) + '<small>/mês</small></p><ul class="plano-lista">' +
      p.l.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul><p class="plano-nota">' + esc(p.nota) + '</p></article>';
  }).join('');
  $$('.plano').forEach(function (pl) {
    pl.addEventListener('pointermove', function (e) { var r = pl.getBoundingClientRect(); pl.style.setProperty('--mx', (e.clientX - r.left) + 'px'); pl.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
  });

  /* ---------- 9. Perguntas ---------- */
  $('#faq').innerHTML = FAQ.map(function (f, i) {
    return '<div class="pergunta-item revelar"><button type="button" aria-expanded="false" aria-controls="r' + i + '">' + esc(f[0]) + '<span class="mais" aria-hidden="true"></span></button><div class="resposta" id="r' + i + '" role="region"><div><p>' + esc(f[1]) + '</p></div></div></div>';
  }).join('');
  $('#faq').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var it = b.parentNode, abrir = !it.classList.contains('aberto');
    it.classList.toggle('aberto', abrir); b.setAttribute('aria-expanded', abrir ? 'true' : 'false');
  });

  /* ---------- Revelar ao rolar ---------- */
  $$('.secao-cab, .sistemas-texto, .sistemas-midia, .completo, .descubra-grade').forEach(function (el) { el.classList.add('revelar'); });
  var obs = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('visivel'); obs.unobserve(en.target);
      if (en.target.id === 'cadeia') $$('.elo', en.target).forEach(function (el, i) { setTimeout(function () { el.classList.add('aceso'); }, 250 + i * 320); });
    });
  }, { threshold: .15, rootMargin: '0px 0px -8% 0px' }) : null;
  $$('.revelar, #cadeia, .final-caixa').forEach(function (el) { if (obs) obs.observe(el); else el.classList.add('visivel', 'aceso'); });
  if (!obs) $$('.elo').forEach(function (el) { el.classList.add('aceso'); });

  /* ---------- Botões: ondinha no toque e efeito magnético ---------- */
  document.addEventListener('pointerdown', function (e) {
    var b = e.target.closest('.btn'); if (!b) return;
    var r = b.getBoundingClientRect(), tam = Math.max(r.width, r.height) * 2.2, o = document.createElement('span');
    o.className = 'onda'; o.style.width = o.style.height = tam + 'px'; o.style.left = (e.clientX - r.left - tam / 2) + 'px'; o.style.top = (e.clientY - r.top - tam / 2) + 'px';
    b.appendChild(o); setTimeout(function () { o.remove(); }, 700);
  });
  if (!toque && !calmo) {
    $$('.magnetico').forEach(function (b) {
      b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .18) + 'px,' + ((e.clientY - r.top - r.height / 2) * .3) + 'px)'; });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
  }
})();
