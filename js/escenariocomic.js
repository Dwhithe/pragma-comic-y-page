


/* assets */
let reproductorButton = document.querySelector('.reproductor');
let audioElement = document.querySelector('audio');

/* reproducir audio */
reproductorButton.addEventListener('click', function () {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}); 

/* escenario1 */

let mundoAgrandar = document.querySelector('.img1-2');
let meteorito1Image = document.querySelector('.meteorito1');
let flecha1 = document.querySelector('.flecha1')
let cuadrotexto1 = document.querySelector('.cuadrotexto1')


/* meteorito movimiendose */

/* planeta poniendose grande */

flecha1.addEventListener('click', escalaMundo )

function escalaMundo(){
    cuadrotexto1.classList.remove('oculto1')
    flecha1.classList.add('oculto')
    mundoAgrandar.classList.add('escala-mundo');
    meteorito1Image.classList.add('mover-meteorito');
}




/* escenario 2 */


let flecha2 = document.querySelector('.flecha2')
let meteorito2 = document.querySelector('.meteorito2')
let personaje2 = document.querySelector('.personaje2')
let cuadrotexto2 =document.querySelector('.cuadrotexto2')

personaje2.addEventListener('click', activar)

function activar (){
    cuadrotexto2.classList.remove('oculto')
    flecha2.style.display="none"
    personaje2.classList.add('mover-personaje2')
    meteorito2.style.animationPlayState='running'
    personaje2.style.animationPlayState='running'
} 

/*audio escenario 3 */


let flecha3 = document.querySelector('.flecha3')
let video3 = document.querySelector('.video3')
let cuadrotexto3 =document.querySelector('.cuadrotexto3')
video3.addEventListener('click', function () {
    if (video3.paused) {
        video3.play();
    } else {
        video3.pause();
    }
    flecha3.style.display="none"
}); 


/* 
video3.addEventListener('click', activar)

function activar (){
    flecha3.classList.add('oculto')
    cuadrotexto3.classList.remove('oculto')
    
} */

/* escenario4 */
document.addEventListener("DOMContentLoaded", function () {
    var flecha4 = document.querySelector(".flecha4");
    var gusanos = document.querySelectorAll(".gusanos");
    var mosquitosContainer = document.getElementById("mosquitos-container");
    var mundoAgrandar = document.querySelector('.escenario4');
    var mosquitosImg = document.getElementById("mosquitos-img");
    var cuadroTexto = document.getElementById("cuadroTexto");
    var backg=document.querySelector(".img4-1");
    var meteorito4=this.querySelector(".meteorito4")

    // Agrega un event listener al clic en la flecha
    flecha4.addEventListener("click", function () {
        gusanos.forEach(function (gusano) {
            gusano.style.visibility = "hidden";
        });
        flecha4.style.visibility = "hidden";
        cuadroTexto.style.display = "none";
        backg.style.animationPlayState="running";
        meteorito4.style.animationPlayState="running";
        setTimeout(function(){
            mosquitosImg.classList.remove('oculto')
            mosquitosImg.style.animationPlayState="running";
        },4500 )
    });
});





/*escenario9*/

document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos
    const flecha9 = document.querySelector('.flecha9');
    const texto9 = document.querySelector('.texto9');
    const profesor9 = document.querySelector('.profesor9');

    // Ocultar el cuadro de texto al principio
    texto9.style.opacity = '0';

    // Agregar evento de clic a la flecha para ocultarla
    flecha9.addEventListener('click', function () {
        flecha9.style.display = 'none';
        texto9.style.opacity = '1';
    });
});




