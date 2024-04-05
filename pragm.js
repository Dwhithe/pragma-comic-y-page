const parrafovideo = document.getElementById ("parrafovideo")
const video = document.getElementById ("video")


window.addEventListener("scroll", function (){

    let miScroll = window.scrollY /4;
    imagen.style.rotate = `${miScroll}deg`;
  
    console.log(window.scrollY)
  
    if (window.scrollY >= 394){
      parrafovideo.style.transitionDuration = ".5s"
      video.style.transitionDuration = ".5s"
      parrafovideo.classList.remove("opacity-0");
      video.classList.remove("opacity-0");
  
    }
    if(window.scrollY >=600 ){
      caja.style.transitionDuration = ".3s"
      caja.classList.remove("opacity-0");
      caja.classList.remove("mt-5");
    }
    else {
  
      caja.style.transitionDuration = ".3s"
      caja.classList.add("opacity-0");
      caja.classList.add("mt-5");
    }
  
  });