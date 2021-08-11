// INPUTS
let inputs = document.getElementsByTagName('input');
for (let i of inputs) {
    i.addEventListener('change', function () {
        ga('send', 'event', 'contato', String(i.id), 'preencheu');
    });
}

// ENVIADO
let submit = document.getElementsByClassName('contato')[0];
submit.addEventListener('submit', function() {
    ga('send', 'event', 'contato', 'enviado', 'enviado');
});