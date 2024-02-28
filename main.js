//crear funcion

function muestra_oculta(id){
//declarar
    let div=document.getElementById(id);
//saber si el div está oculto (display:none), block:mostrar
    if(div.style.display=="none"){
        div.style.display="block";
    } 
    else{
        div.style.display="none";
    }
}