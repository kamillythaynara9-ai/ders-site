// Aviso de cookies da DERS (LGPD): nada opcional carrega antes da escolha da pessoa.
// A escolha fica em localStorage 'ders-consentimento' e pode ser mudada em "Preferências de cookies".
(function () {
  var CHAVE = 'ders-consentimento';
  var VERSAO = 1;

  function ler() {
    try { var v = JSON.parse(localStorage.getItem(CHAVE)); return v && v.versao === VERSAO ? v : null; } catch (e) { return null; }
  }
  function salvar(estatistica) {
    var v = { versao: VERSAO, necessarios: true, estatistica: !!estatistica, data: new Date().toISOString() };
    try { localStorage.setItem(CHAVE, JSON.stringify(v)); } catch (e) {}
    return v;
  }

  // Google Analytics só entra com aceite e com gaId preenchido em config.js.
  var gaCarregado = false;
  function aplicar(v) {
    var gaId = (window.DERS_SITE || {}).gaId;
    if (!v || !v.estatistica || !gaId || gaCarregado) return;
    gaCarregado = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
    document.head.appendChild(s);
  }

  var caixa = null;
  function fechar() {
    if (!caixa) return;
    var c = caixa; caixa = null;
    c.style.transition = 'transform .35s ease-in, opacity .35s';
    c.style.transform = 'translateY(30px)';
    c.style.opacity = '0';
    setTimeout(function () { c.remove(); }, 360);
  }

  function abrir(personalizar) {
    if (caixa) caixa.remove();
    var atual = ler();
    caixa = document.createElement('section');
    caixa.className = 'cookies';
    caixa.setAttribute('role', 'dialog');
    caixa.setAttribute('aria-labelledby', 'cookies-titulo');
    caixa.innerHTML =
      '<div class="cookies-cab"><span class="cookies-simb" aria-hidden="true"><img src="marca-s.png" alt=""><img src="marca-d.png" alt=""></span>' +
      '<h2 id="cookies-titulo">Cookies, do jeito que você escolher</h2></div>' +
      '<p>Usamos cookies necessários para o site funcionar e, só se você deixar, cookies de estatística para entender o que melhorar. Veja a <a href="privacidade.html">Política de Privacidade</a>.</p>' +
      '<div class="opcoes-cookies" hidden>' +
        '<label class="chave"><span><b>Necessários</b><small>Lembram suas escolhas. Sempre ativos.</small></span><input type="checkbox" checked disabled aria-label="Cookies necessários, sempre ativos"></label>' +
        '<label class="chave"><span><b>Estatística</b><small>Contam visitas de forma anônima.</small></span><input type="checkbox" id="ck-estatistica" aria-label="Cookies de estatística"></label>' +
      '</div>' +
      '<div class="cookies-acoes">' +
        '<button type="button" class="btn principal cheio" data-ck="aceitar">Aceitar todos</button>' +
        '<button type="button" class="btn vidro" data-ck="recusar">Só necessários</button>' +
        '<button type="button" class="btn vidro" data-ck="personalizar">Personalizar</button>' +
      '</div>';
    document.body.appendChild(caixa);

    var opcoes = caixa.querySelector('.opcoes-cookies');
    var est = caixa.querySelector('#ck-estatistica');
    var botaoPers = caixa.querySelector('[data-ck="personalizar"]');
    est.checked = !!(atual && atual.estatistica);

    function mostrarOpcoes() {
      opcoes.hidden = false;
      botaoPers.textContent = 'Salvar escolha';
      botaoPers.dataset.ck = 'salvar';
    }
    if (personalizar) mostrarOpcoes();

    caixa.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ck]');
      if (!b) return;
      var acao = b.dataset.ck;
      if (acao === 'personalizar') { mostrarOpcoes(); est.focus(); return; }
      var v = salvar(acao === 'aceitar' ? true : acao === 'salvar' ? est.checked : false);
      aplicar(v);
      fechar();
    });
  }

  // Espera a intro acabar na primeira visita para o aviso não cobrir a abertura.
  // Lido agora, antes do script.js marcar a intro como vista.
  var temIntro = (function () {
    try { return !sessionStorage.getItem('ders-intro') && !!document.getElementById('intro'); } catch (e) { return false; }
  })();

  function iniciar() {
    var v = ler();
    if (v) aplicar(v);
    else setTimeout(function () { abrir(false); }, temIntro ? 2600 : 600);
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-abrir-cookies]')) { e.preventDefault(); abrir(true); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
