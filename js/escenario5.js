/*escenario5*/
document.addEventListener('DOMContentLoaded', function () {

    var flecha5 = document.querySelector('.flecha5');
    var flecha5jarron = document.querySelector('.flecha5jarron');
    var Dialogo1 = document.querySelector('.Dialogo1');
    var Dialogo2 = document.querySelector('.Dialogo2');
    var Dialogo3 = document.querySelector('.Dialogo3');

    flecha5.addEventListener('click', function () {
        flecha5.style.display = 'none';
        Dialogo1.setAttribute('style', 'display:block !important')
        Dialogo2.setAttribute('style', 'display:block !important')
        flecha5jarron.setAttribute('style', 'display:block !important')
    });

    flecha5jarron.addEventListener('click', function () {
        flecha5jarron.style.display = 'none';
        Dialogo1.setAttribute('style', 'display:none !important')
        Dialogo2.setAttribute('style', 'display:none !important')
        Dialogo3.setAttribute('style', 'display:block !important')

    });
});
