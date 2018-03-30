var player = "x"
var plays = 0
var playX = 0
var playO = 0
function play(id) {
    
    var src = document.getElementById(id).getAttribute("src")
    if (src == "white.png"){
        if (player == "x"){
            document.getElementById(id).src = player + ".png"
            if(win()){
                playX += 1
                document.getElementById("p1").innerHTML = "Player X: " + playX;
                end()
            }
            player = "ball"
        }
        else {
            document.getElementById(id).src = player + ".png"
            if(win()){
                playO += 1
                document.getElementById("p2").innerHTML = "Player O: " + playO;
                end()
            }
            player = "x"
        }
    }
    plays += 1
    if (plays == 9){
        end()
    }
}
function win() {
    if(cell("1")==cell("2") && cell("2")==cell("3") && cell("3") != "white.png"){
        return true
    }
    if(cell("4")==cell("5") && cell("5")==cell("6") && cell("6") != "white.png"){
        return true
    }
    if(cell("7")==cell("8") && cell("8")==cell("9") && cell("9") != "white.png"){
        return true
    }
    if(cell("1")==cell("5") && cell("5")==cell("9") && cell("9") != "white.png"){
        return true
    }
    if(cell("3")==cell("5") && cell("5")==cell("7") && cell("7") != "white.png"){
        return true
    }
    if(cell("1")==cell("4") && cell("4")==cell("7") && cell("7") != "white.png"){
        return true
    }
    if(cell("2")==cell("5") && cell("5")==cell("8") && cell("8") != "white.png"){
        return true
    }
    if(cell("3")==cell("6") && cell("6")==cell("9") && cell("9") != "white.png"){
        return true
    }
    else {
        return false
    }
}
function cell(id) {
    return document.getElementById(id).getAttribute("src")
}
function end() {
    for (i = 1; i < 10; ++i) {
        document.getElementById(i.toString()).src = "white.png"
    }
    plays = 0
}