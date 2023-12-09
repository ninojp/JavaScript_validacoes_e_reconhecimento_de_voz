'use strict';

function verificaSeChuteValido(chute){
    const numero = +chute;
    if(chuteForInvalido(numero)){
        // console.log("Valor inválido!")
        elementoChute.innerHTML += "<div> Valor inválido!</div>";
        return;
    }
    if(numeroForMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `<div>O numero deve estar entre: ${menorValor} e ${maiorValor}</div>`;
        return;
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Você Acertou!</h2>
        <h3>O Numero Secreto Era: ${numeroSecreto}</h3>`;
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>Dica: O Número secreto é Menor <i class="fa-solid fa-circle-down"></i> </div>`;
    }else{
        elementoChute.innerHTML += `<div>Dica: O Número secreto é Maior <i class="fa-solid fa-circle-up"></i> </div>`;        
    }
};

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
};

function numeroForMaiorOuMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor
};