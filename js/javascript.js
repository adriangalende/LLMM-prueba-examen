
function desplegableOn(){
    document.getElementsByClassName('desplegable')[0].childNodes[2].style.display = "block";
}

function desplegableOut(){
    document.getElementsByClassName('desplegable')[0].childNodes[2].style.display = "none";
}


function toggleHide(e){
    elemento = e[0];
    console.log(elemento);
    if(elemento.style.display === "none"){
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
};