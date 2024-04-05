document.addEventListener('DOMContentLoaded', function () {
    // Obtén referencias a los elementos que necesitas manipular
    var flecha = document.querySelector('.flecha6');
    var puerta = document.querySelector('.puerta6');
    var profesor = document.querySelector('.profesor6');
    var cuadroTexto = document.querySelector('.p-profesor6');

    // Oculta el profesor y el cuadro de texto al cargar la página
    profesor.setAttribute('style', 'display:none !important')
    cuadroTexto.setAttribute('style', 'display:none !important')

    // Añade un evento de clic a la flecha para ocultarla y mostrar la puerta
    flecha.addEventListener('click', function () {
        flecha.setAttribute('style', 'display:none !important')
        puerta.setAttribute('style', 'display:block !important')
        profesor.setAttribute('style', 'display:block !important')
        cuadroTexto.setAttribute('style', 'display:block !important')
    });


});