'use strict';

function verificaSeChuteValido(chute){
    const numero = +chute;
    if(chuteForInvalido(numero)){
        if(chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `<h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>`
            document.body.style.backgroundColor = "black";
        }else{
            elementoChute.innerHTML += "<div> Valor inválido!</div>";
        }
    }
    if(numeroForMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `<div>O numero deve estar entre: ${menorValor} e ${maiorValor}</div>`;
        return;
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Você Acertou!</h2>
        <h3>O Numero Secreto Era: ${numeroSecreto}</h3>
        <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>`;
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

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});