addEventListener('load', function(e) {
document.querySelector('#title').innerHTML = 'Simple Timer';
    function g(id){
        return document.getElementById(id);
    }
    g("start").addEventListener("click",startTimer);
    for (i=0; i<=60;i++){
        g("getOptions").innerHTML += "<option value='"+i+"'>" + i + "</option>";
    }
    var sel = g("getOptions").value;
    var nbSeconds;
    var seconds;
    function startTimer(){
        sel = g("getOptions").value;
        nbSeconds = sel;
        seconds= sel;
        setInterval(timer,1000);
    }
    function timer(){
        if (seconds === 0){
            g("monitor").innerHTML = nbSeconds + ' secondes écoulées';
            clearInterval(timer);
        } else {
            g("test").innerHTML = seconds;
            --seconds;
        }
    }
});