"use strict";
const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();
document.getElementById('menor-valor').textContent = menorValor;
document.getElementById('maior-valor').textContent = maiorValor;
// const maior_valor = document.getElementById('maior-valor');

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor +1);
}
console.log('Numero secreto: ',numeroSecreto)