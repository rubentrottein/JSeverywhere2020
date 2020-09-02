addEventListener('load', function(e) {
    document.querySelector('#test').innerHTML = 'Timer';
    document.getElementById("start").addEventListener("click",start);
    //var timeInit= 10;
    var nbTimer = 0;
    
    function start(){
    var timeInit= prompt("Durée du timer");
    var time = timeInit;
    setInterval(timer,1000);
    function timer(){
        document.getElementById("res").innerHTML = time;
        time--
            if (time <0){
                nbTimer ++;
                document.getElementById("res1").innerHTML = nbTimer + " timer écoulé";
                time=timeInit;
                clearInterval(timer,1000);
            }
        }
    }
});