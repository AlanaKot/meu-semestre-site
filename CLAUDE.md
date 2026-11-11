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

- O site inteiro é `index.html`: um documento HTML completo, sem etapa de build. Precisa funcionar sem o Claude (hospedado ou aberto direto no navegador).
- Fora do claude.ai, os dados ficam no `localStorage` do navegador. Não depender de servidor nem de IA para nenhuma função.
- No claude.ai existe o artifact "Meu Semestre". Para publicar nele, envie só o conteúdo de dentro do `<head>` (do `<title>` em diante) e do `<body>`, sem as tags `<!doctype>`, `<html>`, `<head>` e `<body>`.
- Visual: texto em azul-marinho, destaques em bordô, fundo claro; fontes Bricolage Grotesque (títulos), Inter (texto) e JetBrains Mono (números).
- Dados em pt-BR: notas de 0 a 10, média mínima 6,0 e frequência mínima 75% (ajustáveis no site). Falta justificada não conta no limite.
