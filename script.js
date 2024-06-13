
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual você prefere?",
        alternativas: [
            {
                texto: "718 Cayman",
                afirmacao: "Boa."
            },
            {
                texto: "718 Cayman GTS 4.0",
                afirmacao: "Aí sim."
            }
        ]
    },
    {
        enunciado: "Qual e melhor?",
        alternativas: [
            {
                texto: "911 Carrera GTS",
                afirmacao: "boa"
            },
            {
                texto: "911 Turbo Cabriolet",
                afirmacao: "Simmm "
            }
        ]
    },
    {
        enunciado: "Qual mais lindo?",
        alternativas: [
            {
                texto: " Taycan ?",
                afirmacao: "boa."
            },
            {
                texto: "Taycan Turbo S",
                afirmacao: "Muito."
            }
        ]
    },
    {
        enunciado: "Qual e melhor?",
        alternativas: [
            {
                texto: "Panamera 4 E-Hybrid",
                afirmacao: "bom."
            },
            {
                texto: "Panamera 4S E-Hybrid",
                afirmacao: "Claro né."
            }
        ]
    },
    {
        enunciado: "Mais lindo?",
        alternativas: [
            {
                texto: "Macan 4 Electric",
                afirmacao: "Bonito."
            },
            {
                texto: "Macan GTS",
                afirmacao: "Lindo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();