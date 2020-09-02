let btn = document.getElementById("btn");
let monitor = document.getElementsByClassName("monitor")[0];
counter("article");

//Fonction de choix de la balise
function changeTag(){
  let tag= prompt("Quelle balise compter?");
  counter(tag);
}

//Compteur
function counter(tag){
    let articles = document.getElementsByTagName(tag);
    if (articles.lenght<0){
        monitor.innerHTML= "pas de balise " + tag + " pour l'instant.";
    } else {
        for(i=0;i<articles.length;i++){
            articles[i].innerHTML+= "<b class='counted'>(" + tag + " n°" + (i+1) + ")</b>";
            monitor.innerHTML= tag + "=" + (i+1);
        }
    }
}

btn.addEventListener("click",changeTag);