# Guia de design (padrão dos apps do iPhone)

Use este visual em todo o projeto. Sem bibliotecas de interface e sem Google Fonts.

## Princípios
- Cara de app nativo do iPhone: título grande da tela, listas agrupadas em quadros brancos sobre fundo cinza claro (preto no modo escuro).
- Sem bordas e quase sem sombras: o que separa as coisas é a cor do fundo e o espaço.
- Uma única cor de destaque (botões, aba ativa, links). Verde, amarelo e vermelho só para situação (ok, atenção, problema).
- Modo claro e escuro, seguindo o sistema, com opção de forçar por `data-theme="light"` ou `"dark"` no `<html>`.

## Cores (variáveis CSS no `:root`)
Claro:
--bg:#f2f2f7; --surface:#ffffff; --surface-2:#e9e9ee; --line:rgba(60,60,67,.2);
--fg:#000000; --muted:#6c6c70; --ink:#8e8e93;
--fill:rgba(118,118,128,.12); --fill-2:rgba(118,118,128,.24);
--barra:rgba(249,249,249,.82); --folha:#f2f2f7; --campo:#ffffff;
--ok:#1a7f3c; --warn:#946200; --bad:#c9281e;
--ok-bg:rgba(52,199,89,.16); --warn-bg:rgba(255,159,10,.18); --bad-bg:rgba(255,59,48,.13);

Escuro:
--bg:#000000; --surface:#1c1c1e; --surface-2:#2c2c2e; --line:rgba(84,84,88,.6);
--fg:#ffffff; --muted:#98989f; --ink:#8e8e93;
--fill:rgba(118,118,128,.24); --fill-2:rgba(118,118,128,.36);
--barra:rgba(22,22,24,.8); --folha:#1c1c1e; --campo:#2c2c2e;
--ok:#30d158; --warn:#ffb340; --bad:#ff6961;
--ok-bg:rgba(48,209,88,.18); --warn-bg:rgba(255,159,10,.2); --bad-bg:rgba(255,69,58,.2);

Cor de destaque (azul, padrão):
- texto no claro #2d5f8b, com fundo suave rgba(86,134,178,.16)
- texto no escuro #a9c7e2, com fundo suave rgba(160,190,218,.22)
- fundo de botão principal #3a6c9a, com texto branco
- degradê do quadro de destaque: de #c9d9e8 para #9db6cd (160deg), texto #10263c

Alternativa bordô: claro #8f2440, escuro #e8607f, botão #a12a4a, degradê #a42d4d → #6f1a31 com texto branco.
Cada cor é um bloco `:root[data-cor="nome"]`; a escolha fica no `localStorage`.

## Fontes (do próprio sistema)
- Texto: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, "Segoe UI", Roboto, sans-serif
- Títulos: a mesma lista, com "SF Pro Display"
- Números grandes: ui-rounded, "SF Pro Rounded" (arredondada), sempre com `font-variant-numeric:tabular-nums`
- Corpo 16px, altura de linha 1.4, letter-spacing -.01em
- Título da tela (h1): 2.125rem, peso 700, letter-spacing -.022em
- h2: 1.375rem / h3: 1.25rem, peso 700
- Título de linha de lista: 1.0625rem; texto secundário: .84rem em `--muted`
- Rótulos pequenos: .8rem, maiúsculas, `--muted`

## Formas e medidas
- Raio dos quadros: 14px. Widgets: 22px. Campos: 10px. Botões e etiquetas: 999px (pílula).
- Largura máxima do conteúdo: 1080px, com 16px de margem lateral.
- Todo alvo de toque com pelo menos 44px de altura.
- Linhas divisórias de .5px em `--line`, só entre itens (nunca no primeiro), começando depois do ícone.
- Respeitar `env(safe-area-inset-*)` (a área do entalhe e da barra do iPhone).

## Componentes
- Quadro/grupo: fundo `--surface`, raio 14px, padding 14px 16px. O título da seção fica fora, acima do quadro.
- Linha de lista: flex, gap 12px, padding 11px 0, mínimo 44px; à esquerda bolinha de cor (10px) ou ícone em quadradinho colorido (30px, raio 8px); à direita uma setinha ">" cinza quando abre algo.
- Botão comum: fundo `--fill`, texto na cor de destaque, peso 600, pílula. Principal: fundo da cor de destaque, texto branco. Fantasma: transparente. Perigo: texto `--bad`. Ao apertar: opacidade .6.
- Botões redondos do topo: 38px, fundo `--fill`, ícone de 20px na cor de destaque.
- Etiqueta (chip): .78rem, peso 600, pílula, fundo suave e texto da mesma família (ok / warn / bad / destaque).
- Controle segmentado: fundo `--fill`, raio 9px; opção ativa branca com sombra leve (#636366 no escuro).
- Widgets: grade de 2 colunas, gap 12px, altura mínima 112px; rótulo pequeno na cor de destaque em cima e número ou título grande embaixo. Um deles pode usar o degradê.
- Campos: sem borda, fundo `--campo` (ou `--fill` dentro de quadros), altura 42px (46px e fonte 17px no celular, para o iPhone não dar zoom).
- Janela de formulário (`<dialog>`): fundo `--folha`, raio 14px, largura até 480px, fundo atrás rgba(0,0,0,.4). No celular sobe de baixo como folha, largura total, com um "puxador" de 36×5px no topo.
- Aviso rápido (toast): pílula flutuante embaixo, fundo translúcido com desfoque.
- Ícones: SVG de linha, traço 2, pontas arredondadas, sem preenchimento, cor `currentColor`.

## Navegação
- Telas largas: pílula flutuante no topo, grudada ao rolar, fundo `--barra` com `backdrop-filter:saturate(180%) blur(20px)`; aba ativa com fundo da cor de destaque e texto branco.
- Celular (até 700px): barra fixa embaixo, ícone de 26px em cima e nome de .69rem embaixo; aba ativa só muda para a cor de destaque. Deixar uns 84px de espaço no fim da página para o conteúdo não ficar atrás dela.

## Movimento
- Curva "mola": cubic-bezier(.16,1,.3,1).
- Janela abre em .4s (cresce de 96% no computador, desliza de baixo no celular); botões mudam de cor em .15s.
- Tudo dentro de `@media (prefers-reduced-motion:no-preference)`.

## Acessibilidade
- Foco visível: contorno de 2px na cor de destaque, afastado 2px.
- Nunca passar informação só pela cor: sempre junto com texto ou ícone.
