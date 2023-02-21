window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionOb1 = animacion.getBoundingClientRect().top;
    console.log(posicionOb1);
    let tamañodePantalla = window.innerHeight/3.2;

    if(posicionOb1 < tamañodePantalla){
        animacion.style.animation = ""
    }

})