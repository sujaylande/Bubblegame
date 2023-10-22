function makeBubble(){
    var clutter = "";

    for(var i=0; i<70; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

//setInterval - runs the function every 1 seconds
//clearInterval - stops the interval
var timer = 60;
function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over!</h1>";
         }
    }, 1000);
}

var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function decreaseScore(){
    score  -= score > 0 ? 5 : 0;
    document.querySelector("#scoreval").textContent = score;
}
//parseInt - converts string to integer
//textContent - gets the text inside the element
//e.target - gets the element that was clicked
//event bubbling - when an event happens on an element, it will bubble up to its parent and so on until it reaches the document object
//sarv bubble vr event nhi lavla pn jr buble la click kel tr tyacha parent la event lavla 
document.querySelector("#pbtm").addEventListener("click", function(e){
    var clicknum = parseInt(e.target.textContent);
    if(clicknum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }else if(clicknum != hitrn){
        decreaseScore();
       makeBubble();
        getNewHit();
    }
});

makeBubble();
runTimer();
getNewHit();
// increaseScore();


