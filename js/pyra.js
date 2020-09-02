addEventListener('load', function(e) {
    let test = document.querySelector('#test')
    /*Pyramide Classique*/
    for (i=0;i<=10; i++){
        for (j=0;j<i;j++){
            test.innerHTML += "&lt;brick&gt;";
        }
        test.innerHTML += '<br />';
    }
    /*Pyramide Inversée *
    for (i=10;i<=10; i--){
        for (j=10;j<i;j--){
            test.innerHTML -= '#';
        }
        test.innerHTML += '<br />';
    }
    /*Témoin de fonctionnement*/
    console.log("js en cours...");
});