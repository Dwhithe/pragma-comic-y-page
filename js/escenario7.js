document.addEventListener('DOMContentLoaded', function () {
    // Obtén referencias a los elementos que necesitas manipular
    var flecha = document.querySelector('.flecha7');
    var token = document.querySelector('.token7');
    var chiko = document.querySelector('.chiko7');
    var cuadroTexto1 = document.querySelector('.p-chiko7');
    var cuadroTexto2 = document.querySelector('.p-token7');
    var cuadroTexto3 = document.querySelector('.p-personaje7');

    // Oculta el profesor y el cuadro de texto al cargar la página
    token.setAttribute('style', 'display:none !important')
    chiko.setAttribute('style', 'display:none !important')
    cuadroTexto1.setAttribute('style', 'display:none !important')
    cuadroTexto2.setAttribute('style', 'display:none !important')
    cuadroTexto3.setAttribute('style', 'display:none !important')

    // Añade un evento de clic a la flecha para ocultarla y mostrar la puerta
    flecha.addEventListener('click', function () {
        flecha.setAttribute('style', 'display:none !important')
        chiko.setAttribute('style', 'display:block !important')
        cuadroTexto3.setAttribute('style', 'display:block !important')

        setTimeout(() => {
            cuadroTexto1.setAttribute('style', 'display:block !important')

        }, 2000);
        setTimeout(() => {
            cuadroTexto2.setAttribute('style', 'display:block !important')
            token.setAttribute('style', 'display:block !important')

        }, 4000);

    });

});
