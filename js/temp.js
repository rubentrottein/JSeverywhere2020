addEventListener('load', function(e) {
    document.querySelector('#title').innerHTML = 'tempEvo';
    var ps = document.getElementsByTagName("p");
    var rTempsMin = document.getElementsByTagName("i");
    var rTempsMax = document.getElementsByTagName("b");
    function convert(){
        for (let i=0;i<ps.length;i++){
            var temp = parseFloat(ps[i].textContent);
            rTempsMin[i].innerHTML = "<h3>Température Minimum</h3>" 
            rTempsMin[i].innerHTML +=temp + 0.4;
            rTempsMax[i].innerHTML = "<h3>Température Maximum</h3>"
            rTempsMax[i].innerHTML +=temp + 0.9;
        }
    }
    convert();
});