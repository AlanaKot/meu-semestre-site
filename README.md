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

## Sincronizar entre celular e computador (opcional)

Com o site hospedado, os dados podem ficar iguais em todos os aparelhos. Uma cópia fica numa pasta escondida do **seu** Google Drive, que só o site enxerga. Sem internet, o site continua funcionando e sincroniza depois. Se não quiser usar, nada muda: tudo continua no navegador e o **Backup** continua existindo.

### Preparar uma vez (no computador, uns 15 minutos)

Os nomes dos menus do Google podem mudar um pouco.

1. Entre em [console.cloud.google.com](https://console.cloud.google.com) com sua conta Google e crie um projeto chamado `Meu Semestre`.
2. Em **APIs e serviços → Biblioteca**, procure **Google Drive API** e clique em **Ativar**.
3. Em **Google Auth Platform** (ou **Tela de permissão OAuth**), preencha o nome do app e seu e-mail. Em **Público-alvo**, escolha **Externo** e adicione seu e-mail em **Usuários de teste**.
4. Em **Clientes → Criar cliente**, escolha **Aplicativo da Web**. Em **Origens JavaScript autorizadas**, coloque o endereço do seu site, só o começo (por exemplo `https://seu-usuario.github.io`).
5. Copie o **ID do cliente**. Ele termina em `.apps.googleusercontent.com`. Isso não é senha: só funciona no endereço que você autorizou.

### Ligar em cada aparelho

1. No site, toque em **Sincronizar**, no topo.
2. Cole o ID do cliente e toque em **Conectar com o Google**.
3. Escolha sua conta. O Google pode avisar que o app não foi verificado: como o app é seu, toque em **Continuar**.

Os dados dos aparelhos se juntam, nada é apagado. Depois de cerca de uma hora sem uso, o Google pede para entrar de novo: o topo mostra "Toque em Sincronizar". Para desligar: **Backup → Sincronização… → Desligar neste aparelho**.

## Usar como aplicativo

Com o site hospedado, dá para instalar o Meu Semestre na tela inicial. Ele ganha ícone próprio, abre sem a barra do navegador e funciona **sem internet**.

- **Android (Chrome):** toque em **Instalar**, no topo do site. Se o botão não aparecer, use o menu ⋮ → **Instalar app**.
- **iPhone (Safari):** toque em Compartilhar → **Adicionar à Tela de Início**.
- **Computador (Chrome ou Edge):** botão **Instalar** no topo do site, ou o ícone de instalar na barra de endereço.

Os dados continuam no aparelho, como no navegador. O app instalado no iPhone guarda os dados separados do Safari, então use o **Backup** para passar de um para o outro.

Para quem mexe no código: os arquivos `manifest.webmanifest`, `sw.js` e os ícones `.png` precisam ficar na mesma pasta do `index.html`. Ao mudar o `sw.js` ou os ícones, aumente a `VERSAO` dentro dele.
