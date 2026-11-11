# Meu Semestre

Site pessoal para organizar o semestre: cronograma de estudos, provas e notas, faltas e matérias.

## Como usar

O site inteiro é o arquivo `index.html`. Ele funciona de três jeitos:

- **Hospedado** num serviço de sites estáticos, como um site comum.
- **Aberto direto no navegador**: baixe o `index.html` e dê dois cliques.
- **Publicado no claude.ai** como artifact.

Fora do claude.ai, os dados ficam salvos no navegador do aparelho em que você usa o site. Eles não vão para nenhum servidor.

## Backup

No topo do site, o botão **Backup** baixa um arquivo `.json` com todos os dados. O mesmo botão importa o arquivo de volta.

Use o backup para:

- levar os dados de um aparelho para outro (por exemplo, do celular para o computador);
- não perder nada se os dados do navegador forem limpos.

## Usar como aplicativo

Com o site hospedado, dá para instalar o Meu Semestre na tela inicial. Ele ganha ícone próprio, abre sem a barra do navegador e funciona **sem internet**.

- **Android (Chrome):** toque em **Instalar**, no topo do site. Se o botão não aparecer, use o menu ⋮ → **Instalar app**.
- **iPhone (Safari):** toque em Compartilhar → **Adicionar à Tela de Início**.
- **Computador (Chrome ou Edge):** botão **Instalar** no topo do site, ou o ícone de instalar na barra de endereço.

Os dados continuam no aparelho, como no navegador. O app instalado no iPhone guarda os dados separados do Safari, então use o **Backup** para passar de um para o outro.

Para quem mexe no código: os arquivos `manifest.webmanifest`, `sw.js` e os ícones `.png` precisam ficar na mesma pasta do `index.html`. Ao mudar o `sw.js` ou os ícones, aumente a `VERSAO` dentro dele.
