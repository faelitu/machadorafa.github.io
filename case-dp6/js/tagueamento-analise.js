// CARDS
let cards = document.getElementsByClassName('card-montadoras');
for (let c of cards) {
    c.addEventListener('click', function () {
        console.log('click-'+c.getAttribute('data-name'));
        ga('send', 'event', 'analise', 'ver_mais', String(c.getAttribute('data-name')));
    });
}