# Regras do projeto

## Sobre quem usa

- A dona do projeto é iniciante em programação. Explique termos novos em uma frase.
- Respostas curtas e diretas, em português.

## Fluxo de mudanças

- Nunca enviar direto na `main`.
- Toda mudança: criar uma branch, fazer commit, abrir um PR e mandar o link.
- Só fazer merge quando ela pedir ("pode juntar").
- Se der conflito num merge, usar a skill `resolving-merge-conflicts`.

## O site

- Todo o código do site fica em `index.html`: um documento HTML completo, sem etapa de build. Precisa funcionar sem o Claude (hospedado ou aberto direto no navegador).
- Modo aplicativo (PWA): `manifest.webmanifest`, `sw.js` e os ícones `icon-192.png`, `icon-512.png` e `apple-touch-icon.png` ficam na mesma pasta do `index.html`. Só ligam no site hospedado (http/https); aberto do arquivo ou no claude.ai, são ignorados. O site precisa continuar funcionando sem eles.
- Ao mudar `sw.js` ou os ícones, aumentar a `VERSAO` dentro do `sw.js`. Se um arquivo novo precisar funcionar sem internet, colocar ele na lista `ARQUIVOS`.
- Fora do claude.ai, os dados ficam no `localStorage` do navegador. Não depender de servidor nem de IA para nenhuma função.
- Exceção opcional: a sincronização com o Google Drive (pasta escondida `appDataFolder`). Sem ela, tudo funciona igual. Nunca gravar Client ID, chave ou senha no código: a pessoa cola o Client ID no site e ele fica só no navegador.
- Todo item salvo localmente ganha `_t` (hora da mudança) e todo item apagado vai para `S.apagados`. A sincronização usa isso para juntar os aparelhos; não remova.
- No claude.ai existe o artifact "Meu Semestre". Para publicar nele, envie só o conteúdo de dentro do `<head>` (do `<title>` em diante) e do `<body>`, sem as tags `<!doctype>`, `<html>`, `<head>` e `<body>`.
- Visual: no padrão dos apps do iPhone. Título grande da aba, listas agrupadas em quadros brancos sobre fundo cinza claro (preto no modo escuro), barra de abas embaixo no celular e pílula no topo em telas largas. A cor do app é o azul claro do iPhone 14 (botões, aba ativa, widget principal). Fontes do próprio sistema, sem Google Fonts.
- Dados em pt-BR: notas de 0 a 10, média mínima 6,0 e frequência mínima 75% (ajustáveis no site). Falta justificada não conta no limite.
