window.onkeydown = function (event) {
    
    var ball = document.getElementById("ball");
    var x = ball.offsetLeft;
    var y = ball.offsetTop;
    var speed=5;
    var asciicode = event.keyCode;
    //sol+
    if(asciicode==37 && 0<ball.offsetLeft-speed){
        ball.style.left=(x-speed)+"px";
    }
    //sag+
    else if(asciicode==39 && x<box.offsetWidth-ball.offsetWidth){
        ball.style.left=(x+speed)+"px";
    }
    //yuxari+
    else if(asciicode==38 && 0<ball.offsetTop-box.offsetTop){
        ball.style.top=(y-speed)+"px";
    }
    //asagi+
    else if(asciicode==40 && y<box.offsetHeight-ball.offsetHeight){
        ball.style.top=(y+speed)+"px";
    }
}
   

        