# ImperFruta

> A casca tem defeito. A polpa, não.

Site que aproxima quem planta de quem processa fruta. O produtor anuncia a fruta que o mercado recusa pela aparência, e a indústria de suco, polpa, sorvete e doce compra direto dele.

Projeto de TCC do Proa com a Serasa, na trilha de Front-end.

## O problema

Muita fruta boa fica no pé ou vai para o lixo porque tem mancha, tamanho fora do padrão ou casca feia. Por dentro ela está perfeita. Para a indústria, que vai descascar e bater a fruta, a aparência não importa.

## Como funciona

**Quem planta** (sítio, fazenda ou cooperativa)

1. Fotografa o lote do jeito que ele está, com mancha e tudo.
2. Anuncia quantos quilos tem, o preço e até quando dá para retirar.
3. Recebe o pagamento, que já está garantido quando o caminhão chega.

**Quem processa** (suco, polpa, sorvete, doce ou geleia)

1. Filtra por fruta, região, quantidade e defeito.
2. Compra pelo Pix. O produtor confirma em até 24 horas.
3. Retira no sítio, no dia e no horário combinados.

O preço é do produtor. A indústria paga 6% de taxa em cada compra.

## Páginas

| Página | Arquivo | Situação |
|---|---|---|
| Página inicial | `index.html` | HTML pronto, CSS em andamento |
| Anunciar lote | `pages/anunciarlot.html` | Em andamento |
| Pedidos recebidos | `pages/pedidosrecebidos.html` | Começada |
| Entrar e criar conta | `pages/login.html` | A fazer |
| Lotes na feira | `pages/lotsnafeira.html` | A fazer |
| Meus produtos | `pages/meusprodutos.html` | A fazer |
| Meus pedidos | `pages/meuspedidos.html` | A fazer |
| Detalhe do pedido | `pages/detalhedopedido.html` | A fazer |
| Acompanhar pedido | `pages/acompanharpedido.html` | A fazer |

## Tecnologias

- HTML
- CSS
- JavaScript, usado só na conversa com o Manguinha
- Letras do Google Fonts: Bricolage Grotesque, Schibsted Grotesk e Permanent Marker

O projeto não usa framework nem biblioteca.

## Como abrir o projeto

1. Baixe o projeto:

```bash
git clone https://github.com/nsmlarissa/ImperFruta.git
```

2. Abra a pasta no VS Code.
3. Clique com o botão direito no `index.html` e escolha **Open with Live Server**.

Sem o Live Server também funciona: é só abrir o `index.html` no navegador.

## Pastas

```
ImperFruta/
├── index.html          página inicial
├── pages/              as outras páginas
└── assets/
    ├── css/            um arquivo de CSS para cada página
    ├── images/         fotos e ícones
    └── js/             chat.js, a conversa com o Manguinha
```

O `style.css` é o CSS da página inicial. Cada página de `pages/` tem o CSS com o mesmo nome dela.

## Manguinha

O Manguinha é a manga torta da marca. Ele fica no botão redondo do canto da tela e responde dúvidas sobre taxa, pagamento, retirada e cadastro.

Ele não usa inteligência artificial. As respostas foram escritas pela equipe e ficam no `assets/js/chat.js`. O chat procura as palavras da pergunta e mostra a resposta que combina melhor.

## Equipe

- Arthur Santos Cavalcante 
- Bruna Alves Souza dos Santos
- Evellyn Aparecida Queiroz Gomes dos Santos
- Larissa Vitória Ramos Nascimento
- Luan Carlos da Silva Arengue 
- Paulo Henrique Dorea Simões
- Rafael Moisés da Silva Santos

## Aviso

Este site é um protótipo de estudo. Os lotes, os preços, os nomes e os pedidos que aparecem nas telas são exemplos.
