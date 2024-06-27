let listaDeNumSorteado = [];
let numeroMax = 10;
let NumeroSecreto = gerarNumRandom();
let tentativas = 1;

// Exibindo os Textos no site;
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMsgInicial() {
    exibirTextoNaTela ("h1", "Jogo foda do rufino");
    exibirTextoNaTela ("p", "Escolha um número entre 1 a 10");
}
    exibirMsgInicial();

// Botão Chute;
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == NumeroSecreto) {
        exibirTextoNaTela ("p", "Você acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela ("p", mensagemTentativas); 
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > NumeroSecreto) {
            exibirTextoNaTela ("p", "O número é menor, tente novamente.");
        } else {
            exibirTextoNaTela("p", "O número é maior, tente novamente."); 
        }
    } tentativas++;
        LimparCampo();
}

// Define o valor do NumeroSecreto;
function gerarNumRandom () {
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidadeDeElementosNaLista = listaDeNumSorteado.length;

    if (quantidadeDeElementosNaLista == numeroMax) {
        listaDeNumSorteado = [];
    }
    if (listaDeNumSorteado.includes(numeroEscolhido)) {
    return gerarNumRandom();
} else {
    listaDeNumSorteado.push(numeroEscolhido);
    console.log (listaDeNumSorteado);
    return numeroEscolhido;
}
}

// Define o valor da função LimparCampo;
function LimparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

// Define o valor da função reiniciarJogo;
function reiniciarJogo() {
    NumeroSecreto = gerarNumRandom();
    LimparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}