addEventListener('load', function(e) {
    var tiles = document.getElementsByTagName("div");
    for(i=1; i<tiles.length; i++){
        tiles[i].addEventListener('click',function(){
            check(i);
            console.log("tile : " + i);
        });
    }
    function check(tile){
        var checkedTile= false;
        if (checkedTile===false){
            //tiles[tile].innerHTML= "X";
            document.getElementById('1').innerHTML = "X";
        } else {
            alert('Case pleine');
        }
    }  
});