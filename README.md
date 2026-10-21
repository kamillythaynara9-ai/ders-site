# Site DERS

Site da própria DERS (teste do fluxo completo). HTML, CSS e JS puros, sem build. Todos os arquivos na raiz.

## O que é real
- Serviços e preços "a partir de" (arrays `GRUPOS`, `TIPOS`, `PLANOS` em `script.js`).
- Portfólio: Sonhar e Brincar, Detalhe Perfeito, PhoneStore, GHC Sport Media, Alpha Fechos (capturas `port-*.webp`). Sistema aparece só como demonstração.
- Botões "Quero meu protótipo" levam ao formulário (`formsUrl` em `config.js`).
- WhatsApp (11) 94892-5277 com mensagem pronta.

## Para conferir ou trocar
- `config.js`: `sistemaDemoUrl` (link do sistema com `?demo`), `gaId` (Google Analytics, só carrega se a pessoa aceitar os cookies).
- `index.html`: `og:image` aponta para `https://ders-site.vercel.app/og.jpg`. Se o domínio for outro, troque.
- `privacidade.html` e `termos.html`: acrescentar CNPJ e e-mail da DERS quando houver.
- Instagram no rodapé: @ders.digital.

## Segurança
- `vercel.json`: CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy.
- `cookies.js`: aviso de cookies com a identidade da marca (Aceitar, Só necessários, Personalizar). Escolha em `localStorage` `ders-consentimento`. Reabre pelo link "Preferências de cookies" no rodapé.
