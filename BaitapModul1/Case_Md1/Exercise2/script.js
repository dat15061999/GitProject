const adressbtn = document.querySelector('#adress-form');
adressbtn.addEventListener('click', function () {
    document.querySelector('.adress-form').style.display = 'flex';
})
const adressctn = document.querySelector('#closeAdress');
adressctn.addEventListener('click', function () {
    document.querySelector('.adress-form').style.display = 'none';
})
