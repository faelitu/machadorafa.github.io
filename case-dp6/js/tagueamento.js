// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// INÍCIO
let inicio = document.getElementById('menu-inicio');
inicio.addEventListener('click', function() {
    console.log('click-inicio');
}, false);

// ANÁLISE
let analise = document.getElementById('menu-analise');
analise.addEventListener('click', function() {
    console.log('click-analise');
}, false);

// ANÁLISE - TRISTIQUE
let an_tristique = document.getElementById('submenu-tristique');
an_tristique.addEventListener('click', function() {
    console.log('click-an-tristique');
}, false);

// ANÁLISE - CONCLUSÕES
let conclusoes = document.getElementById('submenu-conclusoes');
conclusoes.addEventListener('click', function() {
    console.log('click-an-conclusoes');
}, false);

// SOBRE
let sobre = document.getElementById('menu-sobre');
sobre.addEventListener('click', function() {
    console.log('click-sobre');
}, false);

// SOBRE - CONTATO
let sb_contato = document.getElementById('submenu-contato');
sb_contato.addEventListener('click', function() {
    console.log('click-sb-contato');
}, false);

// SOBRE - HISTÓRIA
let sb_historia = document.getElementById('submenu-historia');
sb_historia.addEventListener('click', function() {
    console.log('click-sb-historia');
}, false);

// SOBRE - VALORES
let sb_valores = document.getElementById('submenu-valores');
sb_valores.addEventListener('click', function() {
    console.log('click-sb-valores');
}, false);

// CONTATO
let contato = document.getElementById('menu-contato');
contato.addEventListener('click', function() {
    console.log('click-contato');
}, false);

// DOWNLOAD PDF
let download = document.getElementById('menu-download-pdf');
download.addEventListener('click', function() {
    console.log('click-download-pdf');
}, false);