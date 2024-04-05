document.addEventListener('DOMContentLoaded', function () {

    var flecha = document.querySelector('.flecha10');
    var Dialogo = document.querySelector('.texto10');
    var pueblerinorojo = document.querySelector('.pueblerinorojo');
    var pueblerinoazul = document.querySelector('.pueblerinoazul');
    var profesor = document.querySelector('.profesor10');
    var token = document.querySelector('.token10');

    Dialogo.setAttribute('style', 'display:none !important')

    flecha.addEventListener('click', function () {
        Dialogo.setAttribute('style', 'display:block !important')
        flecha.style.display="none"
        pueblerinoazul.classList.remove('oculto')
        pueblerinoazul.style.animationPlayState="running";
        pueblerinorojo.classList.remove('oculto')
        pueblerinorojo.style.animationPlayState="running";
        token.classList.remove('oculto')
        token.style.animationPlayState="running";
        profesor.classList.remove('oculto');
        profesor.style.animationPlayState="running";
    });


});
