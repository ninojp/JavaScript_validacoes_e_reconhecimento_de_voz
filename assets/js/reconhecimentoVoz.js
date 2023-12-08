'use strict';

const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    console.log(e)
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `<div>Você disse:</div>
    <div class="box">${chute}</div>`;
}