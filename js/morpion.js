addEventListener('load', function(e) {
    var tiles = document.getElementsByTagName("div");
    /*Jonction fonction et tile*/
    var checkedTile= [];
    for (let i; i<tiles.length;i++){
        checkedTile.push("unchecked");
    }
    console.log(checkedTile);
    let tilesArr = Array.from(tiles);
    console.log(tiles);
    console.log(tiles.length);
    //Declarer i avec let permet de changer de compte à chaque boucle
    for(let i=0; i<tiles.length; i++){
        tiles[i].addEventListener('click',function(){
            check(i);
        });
    }
    function check(tile){
        if (checkedTile[tile]==="checked"){
            console.log(tile);
            tiles[tile].innerHTML= "X";
            checkedTile[tile] = "checked";
        } else {
            alert('Case pleine');
        }
    }  
});