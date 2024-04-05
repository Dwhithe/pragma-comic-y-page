document.addEventListener('DOMContentLoaded', function () {
    // Obtén referencias a los elementos que necesitas manipular
    var flecha = document.querySelector('.flecha8');
    var zikar = document.querySelector('.zikar8');
    var dengo = document.querySelector('.dengo8');
    var token = document.querySelector('.token8');
    var meteorito = document.querySelector('.meteorito8');
    var cuadroTexto1 = document.querySelector('.p-zikar8');
    var cuadroTexto2 = document.querySelector('.p-dengo8');
    var cuadroTexto3 = document.querySelector('.p-token8');

    // Oculta el profesor y el cuadro de texto al cargar la página
    zikar.setAttribute('style', 'display:none !important')
    dengo.setAttribute('style', 'display:none !important')
    token.setAttribute('style', 'display:none !important')
    cuadroTexto1.setAttribute('style', 'display:none !important')
    cuadroTexto2.setAttribute('style', 'display:none !important')
    cuadroTexto3.setAttribute('style', 'display:none !important')

    flecha.addEventListener('click', function () {
        flecha.setAttribute('style', 'display:none !important')
        meteorito.setAttribute('style', 'display:block !important')
        setTimeout(() => {
    
            cuadroTexto2.setAttribute('style', 'display:block !important')
            dengo.setAttribute('style', 'display:block !important') 
    
        }, 2500);
        setTimeout(() => {
            token.setAttribute('style', 'display:block !important')
            cuadroTexto3.setAttribute('style', 'display:block !important')
        }, 3600);
        setTimeout(() => {
            zikar.classList.add('movimiento8')
            zikar.setAttribute('style', 'display:block !important') 
            dengo.setAttribute('style', 'display:block !important') 
        }, 500);
        setTimeout(() => {
     
            cuadroTexto1.setAttribute('style', 'display:block !important')
        }, 2000);
    });

});