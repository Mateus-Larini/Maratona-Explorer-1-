const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#pergunta");
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Minha resposta é sim.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];

// clicar em fazer pergunta 
function fazerPergunta(){
    clearTimeout(lastTimeout);
    elementoResposta.innerHTML = "";
    elementoResposta.style.opacity = 1;

    // alert para não rodar o resto da função caja não há texto
    if (inputPergunta.value == "") {
       return alert ("Digite seu texto");
    }

    const pergunta = "<div>" + inputPergunta.value + "</div>";

    // gerando numeros alteatórios dentro do array 
    const  totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

    // sumir a resposta
    lastTimeout = setTimeout (function (){
        elementoResposta.style.opacity = 0;
    }, 3000);
    
}

let lastTimeout = null;
