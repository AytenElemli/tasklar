window.onkeydown = function (event) {
    
    var ball = document.getElementById("ball");
    var x = ball.offsetLeft;
    var y = ball.offsetTop;
    var asscicode = event.keyCode;
    
    if(asscicode==37 && x>2){
        ball.style.left=(x-5)+"px";
    }
    if(asscicode==39 && x<367){
        ball.style.left=(x+5)+"px";
    }
    if(asscicode==38 && y>2){
        ball.style.top=(y-5)+"px";
    }
    if(asscicode==40 && y<367){
        ball.style.top=(y+5)+"px";
    }
    }

 const inpBox=document.getElementById("myBoxWidth");
 const inpBall=document.getElementById("myBallWidth");
 function myFunction(){
    inpBox.style.width=myBoxWidth.value;
 }


        