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
- No claude.ai existe o artifact "Meu Semestre". Para publicar nele, envie só o conteúdo de dentro do `<head>` (do `<title>` em diante) e do `<body>`, sem as tags `<!doctype>`, `<html>`, `<head>` e `<body>`.
- Visual: texto em azul-marinho, destaques em bordô, fundo claro; fontes Bricolage Grotesque (títulos), Inter (texto) e JetBrains Mono (números).
- Dados em pt-BR: notas de 0 a 10, média mínima 6,0 e frequência mínima 75% (ajustáveis no site). Falta justificada não conta no limite.
