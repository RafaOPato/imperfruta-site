

const ZAP = "(11) 9002-8922";

const SABER = [
    {
        chaves: ["taxa", "comissão", "comissao", "quanto custa", "custo", "cobra", "cobram", "porcentagem", "%"],
        diz: "Pra quem vende, nada: você recebe o preço cheio que anunciou. A Imperfruta cobra <b>de 5% a 8% do comprador</b> sobre o pedido fechado. Lote parado não paga nada: sem mensalidade e sem taxa de anúncio."
    },
    {
        chaves: ["como funciona", "como que funciona", "o que é", "o que e isso", "explica", "funciona"],
        diz: "Três passos: <b>1.</b> você anuncia o lote com foto, quilos e preço. <b>2.</b> a indústria acha o lote na feira e fecha o pedido, pagando na hora. <b>3.</b> o caminhão vai buscar no sítio e o Pix cai quando você confere o código de retirada.",
        sugere: ["E o código de retirada?", "Quem compra?", "Qual a taxa?"]
    },
    {
        chaves: ["código", "codigo", "retirada", "segurança", "seguranca", "garantia", "calote", "confio", "confiar"],
        diz: "É o pulo do gato. O comprador paga antes e o dinheiro fica guardado. O motorista chega no sítio com um <b>código de retirada</b>; você confere a carga, digita o código no app e o Pix é liberado na hora. Se ele não aparecer ou você recusar, o valor volta pro comprador e a fruta continua sua."
    },
    {
        chaves: ["quando recebo", "recebo", "prazo", "pagamento", "pix", "receber", "dinheiro", "pago"],
        diz: "Na hora da retirada. Você digita o código que o motorista mostra e o Pix cai na sua conta no mesmo minuto, sem boleto de 30 dias, sem desconto depois."
    },
    {
        chaves: ["fruta feia", "fora do padrão", "fora do padrao", "defeito", "mancha", "torta", "posso anunciar", "serve", "aceita"],
        diz: "Serve tudo que é fruta boa por dentro: mancha de sol, calibre misto, formato torto, amassadinho, maduro demais, sobra de classificação. O que não serve é fruta podre, mofada ou com praga viva: a indústria devolve e queima a sua reputação.",
        sugere: ["Quem compra isso?", "Como anuncio?"]
    },
    {
        chaves: ["quem compra", "comprador", "indústria", "industria", "pra quem"],
        diz: "Indústria que transforma: polpa, suco, desidratado, geleia, doce, sorvete e ração. Nenhuma delas liga pra aparência: elas querem sabor, açúcar, volume e preço.",
        sugere: ["Qual a taxa?", "Como anuncio um lote?"]
    },
    {
        chaves: ["frete", "caminhão", "caminhao", "transporte", "quem busca", "entrega", "levar"],
        diz: "Quem busca é o comprador: o caminhão dele entra no pomar no dia e hora combinados. Você não paga frete nem precisa levar nada pra lugar nenhum."
    },
    {
        chaves: ["anunciar", "anuncio", "cadastrar lote", "colocar lote", "publicar"],
        diz: "Leva dois minutos: foto do lote, fruta, quantos quilos, preço por quilo e até quando dá pra retirar. Se não quiser preencher, manda foto e áudio no WhatsApp <b>" + ZAP + "</b> que a equipe anuncia por você.",
        botao: { texto: "Abrir a tela de anunciar", href: "pages/anunciarlot.html" }
    },
    {
        chaves: ["cadastro", "conta", "criar conta", "documento", "cnpj", "cpf", "começar", "comecar"],
        diz: "Pra produtor: nome, CPF ou CNPJ, onde fica o sítio e a chave Pix. Só isso. Pra indústria pedimos CNPJ e os dados de faturamento, porque a nota sai no fechamento do pedido.",
        botao: { texto: "Criar conta", href: "pages/cadastro.html" }
    },
    {
        chaves: ["nota fiscal", "nota", "imposto", "fiscal"],
        diz: "A nota sai no fechamento do pedido. Se você é produtor rural com inscrição estadual, sai no seu talão; se não tem, a operação sai pela cooperativa parceira da região e a gente resolve o documento junto."
    },
    {
        chaves: ["preço", "preco", "quanto cobrar", "quanto vale", "valor"],
        diz: "Na tela de anunciar a gente mostra o preço do dia na Ceagesp e a faixa em que lotes parecidos estão saindo. Hoje, laranja com mancha está entre <b>R$ 0,70 e R$ 0,85/kg</b>. O preço é seu; a dica é só pra ninguém vender barato demais."
    },
    {
        chaves: ["mínimo", "minimo", "quantidade", "quantos quilos", "pouco"],
        diz: "Não tem mínimo fixo. Lote acima de uma tonelada costuma achar comprador no mesmo dia; abaixo disso vale juntar com a colheita da semana seguinte pra fechar um frete só."
    },
    {
        chaves: ["região", "regiao", "onde", "atende", "cidade", "estado"],
        diz: "A operação está começando pela região de Bebedouro e Monte Alto, em São Paulo, onde já tem indústria de polpa por perto. Se o seu sítio é de outra região, deixa seu contato no WhatsApp que a gente avisa quando abrir aí."
    },
    {
        chaves: ["falar", "atendente", "humano", "pessoa", "whatsapp", "telefone", "contato", "ajuda"],
        diz: "Claro. A equipe atende no WhatsApp <b>" + ZAP + "</b>, de segunda a sábado, das 7h às 19h. Pode mandar áudio, é mais rápido que digitar."
    },
    {
        chaves: ["oi", "ola", "olá", "bom dia", "boa tarde", "boa noite", "e aí", "eai"],
        diz: "Oi! Sou o Manguinha. Pergunta o que quiser sobre vender ou comprar fruta fora do padrão.",
        sugere: ["Como funciona?", "Qual a taxa?", "E o código de retirada?"]
    },
    {
        chaves: ["obrigado", "obrigada", "valeu", "vlw", "brigado"],
        diz: "Precisando é só chamar. E anuncia esse lote antes que a fruta passe do ponto."
    },
    {
        chaves: ["quem é você", "quem e voce", "você é um robô", "voce e um robo", "robô", "robo", "ia", "inteligência"],
        diz: "Sou o Manguinha, a manga torta da marca. Neste protótipo minhas respostas são escritas à mão pela equipe. Não tem IA por trás, é conversa de gente mesmo."
    }
];

// Perguntas que viram botão quando a resposta não sugere nenhuma
const SUGESTOES_PADRAO = ["Como funciona?", "Qual a taxa?", "Quando eu recebo?", "Que fruta serve?"];

// Resposta para quando nenhuma chave aparece na pergunta
const NAO_SEI = "Essa eu não sei de cabeça, e prefiro não inventar. Manda no WhatsApp <b>" + ZAP + "</b> que a equipe te responde hoje mesmo.";


/* --------------------------------------------------------------
   2. ACHAR A RESPOSTA
   -------------------------------------------------------------- */

// Deixa o texto em letra minúscula e sem acento.
// Assim "Comissão", "comissao" e "COMISSÃO" viram a mesma coisa.
function semAcento(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Olha todas as chaves e fica com a maior que aparece na pergunta.
// A maior ganha porque é a mais específica: "quanto custa" vale mais que "custo".
function responde(pergunta) {
    const texto = semAcento(pergunta);
    let melhor = null;
    let tamanho = 0;

    for (const item of SABER) {
        for (const chave of item.chaves) {
            const palavra = semAcento(chave);
            if (texto.includes(palavra) && palavra.length > tamanho) {
                melhor = item;
                tamanho = palavra.length;
            }
        }
    }

    if (melhor === null) {
        return { diz: NAO_SEI };
    }
    return melhor;
}


/* --------------------------------------------------------------
   3. COLOCAR O BOTÃO E A JANELA NA PÁGINA
   O HTML do chat é escrito aqui, uma vez só, e entra no fim do <body>.
   Assim ele não precisa ser repetido em todas as páginas.
   -------------------------------------------------------------- */

// Endereço da pasta do site, descoberto pelo endereço deste arquivo.
// Com ele o chat acha as figuras e os links a partir de qualquer página,
// esteja ela na pasta principal (index.html) ou dentro de "pages".
const SITE = document.currentScript.src.replace("assets/js/chat.js", "");

document.body.insertAdjacentHTML("beforeend", `
    <button class="mg-botao" aria-label="Falar com o Manguinha"><img alt=""><em></em></button>

    <div class="mg-convite">fala comigo<b></b><button aria-label="Fechar">&times;</button></div>

    <div class="mg-janela" role="dialog" aria-label="Conversa com o Manguinha">
        <div class="mg-topo">
            <img alt="">
            <div><b>Manguinha</b><small><i></i>responde na hora</small></div>
            <button type="button" aria-label="Fechar a conversa">&times;</button>
        </div>
        <div class="mg-conversa" aria-live="polite"></div>
        <div class="mg-sugestoes"></div>
        <form class="mg-baixo">
            <input type="text" placeholder="Escreve sua pergunta" aria-label="Sua pergunta" autocomplete="off">
            <button type="submit" aria-label="Enviar">&#10148;</button>
        </form>
        <p class="mg-rodape">Protótipo: as respostas do Manguinha são escritas pela equipe.</p>
    </div>
`);

// Guarda cada parte numa variável, para usar nas funções abaixo
const botao = document.querySelector(".mg-botao");
const convite = document.querySelector(".mg-convite");
const fecharConvite = document.querySelector(".mg-convite button");
const janela = document.querySelector(".mg-janela");
const fecharJanela = document.querySelector(".mg-topo button");
const conversa = document.querySelector(".mg-conversa");
const sugestoes = document.querySelector(".mg-sugestoes");
const formulario = document.querySelector(".mg-baixo");
const campo = document.querySelector(".mg-baixo input");

// As duas figuras do chat ficam na pasta assets/images
document.querySelector(".mg-botao img").src = SITE + "assets/images/manga-selo.svg";
document.querySelector(".mg-topo img").src = SITE + "assets/images/manga.svg";


/* --------------------------------------------------------------
   4. MOSTRAR AS FALAS
   -------------------------------------------------------------- */

// Coloca uma fala na conversa.
// quem  = "eu" (a pessoa) ou "ele" (o Manguinha)
// link  = o botao da resposta, quando ela tem um
function fala(texto, quem, link) {
    const balao = document.createElement("div");

    if (quem === "eu") {
        balao.className = "mg-fala eu";
        balao.textContent = texto;      // o que a pessoa digitou entra como texto puro
    } else {
        balao.className = "mg-fala";
        balao.innerHTML = texto;        // as respostas usam <b> para o negrito
    }

    if (link) {
        balao.innerHTML += '<a class="mg-ir" href="' + SITE + link.href + '">' + link.texto + '</a>';
    }

    conversa.appendChild(balao);
    conversa.scrollTop = conversa.scrollHeight;     // desce até a última fala
}

// Troca os botões de sugestão que ficam embaixo da conversa
function mostraSugestoes(lista) {
    sugestoes.innerHTML = "";

    for (const texto of lista) {
        const sugestao = document.createElement("button");
        sugestao.type = "button";
        sugestao.textContent = texto;
        sugestao.addEventListener("click", function () {
            manda(texto);
        });
        sugestoes.appendChild(sugestao);
    }
}


/* --------------------------------------------------------------
   5. MANDAR A PERGUNTA E ESPERAR A RESPOSTA
   -------------------------------------------------------------- */

function manda(pergunta) {
    pergunta = pergunta.trim();     // tira os espaços das pontas
    if (pergunta === "") {
        return;
    }

    fala(pergunta, "eu");
    sugestoes.innerHTML = "";
    campo.value = "";

    // Os três pontinhos de "pensando"
    const pensando = document.createElement("div");
    pensando.className = "mg-pensando";
    pensando.innerHTML = "<span></span><span></span><span></span>";
    conversa.appendChild(pensando);
    conversa.scrollTop = conversa.scrollHeight;

    // A resposta aparece depois de uma pequena espera, de meio segundo a quase um
    const resposta = responde(pergunta);
    const espera = 520 + Math.random() * 380;

    setTimeout(function () {
        pensando.remove();
        fala(resposta.diz, "ele", resposta.botao);
        mostraSugestoes(resposta.sugere || SUGESTOES_PADRAO);
        conversa.scrollTop = conversa.scrollHeight;     // desce de novo, porque as sugestões ocupam espaço
    }, espera);
}


/* --------------------------------------------------------------
   6. ABRIR E FECHAR A JANELA
   A janela aparece quando ganha a classe "aberta" (veja no style.css).
   -------------------------------------------------------------- */

function abre() {
    janela.classList.add("aberta");
    convite.remove();

    // Na primeira vez que abre, o Manguinha se apresenta
    if (conversa.childElementCount === 0) {
        fala("Oi! Sou o <b>Manguinha</b>. Pergunta o que quiser sobre vender fruta fora do padrão, ou sobre comprar, se você for da indústria.", "ele");
        mostraSugestoes(SUGESTOES_PADRAO);
    }

    campo.focus();
}

function fecha() {
    janela.classList.remove("aberta");
    botao.focus();
}

// O botão redondo abre a janela, e fecha se ela já estiver aberta
botao.addEventListener("click", function () {
    if (janela.classList.contains("aberta")) {
        fecha();
    } else {
        abre();
    }
});

// O X do topo fecha a janela
fecharJanela.addEventListener("click", fecha);

// A tecla Esc também fecha
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && janela.classList.contains("aberta")) {
        fecha();
    }
});

// Enviar o formulário manda a pergunta
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();        // não deixa a página recarregar
    manda(campo.value);
});

// O convite "fala comigo" some no X ou sozinho, depois de 9 segundos
fecharConvite.addEventListener("click", function () {
    convite.remove();
});

setTimeout(function () {
    convite.remove();
}, 9000);
