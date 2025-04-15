var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");

function maiorPalavra(frase) {
    return frase.split(" ").reduce((indice, palavraAtual) => {
        if(palavraAtual.length > indice.length){
            return palavraAtual;
        }else{
            return indice;
        }
    }, "");
}

let resultado = maiorPalavra(frase);
console.log("A maior palavra é:", resultado);

