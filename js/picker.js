addEventListener('load', function(e) {
    document.querySelector('h1').innerHTML = 'Picker';
    document.getElementById("choice").addEventListener("click",start);

    var picks =['Bar','Bar à jeux','Karaoké','Resto','Arcade','Musique','Quai de seine'];
    var started = false;

    function start(){
        function picker(){
            return Math.floor(Math.random() * Math.floor(picks.length));
        }
        var myTimer=setInterval(multipick,100);
        function multipick(){
            if (started===false){
                for (pick of picks){
                    document.getElementById("result").innerHTML = picks[picker()];
                }
            }else{
                clearInterval(myTimer);
                document.getElementById("result").innerHTML = picks[picker()];
                document.getElementById("final").innerHTML = document.getElementById("result").textContent;
            }
        }
        function stop(){
            if (started===false){started= true;}
        }
        document.getElementById("choice").addEventListener('click', stop);
        document.getElementById("choice").innerHTML = "Stop";
    }
});