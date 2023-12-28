var policeCar = document.getElementById("policecar");
var playerCar = document.getElementById("playercar");
var game = document.getElementById("game")
var result = document.getElementById("result")
var score = document.getElementById("score")
var counter = 0;
var jumpsound = document.getElementById("whoosh")
var gamesound = document.getElementById("gamesound")
var gameoversound = document.getElementById("gameoversound")
var carrunningsound = document.getElementById("carrunningsound")
var crash = document.getElementById("crash")

// Set animation of background 
var position = 0;
function moveBackground(){
    position += 5;
    game.style.backgroundPosition = "0px " + position + "px";
}
setInterval(moveBackground,10);

// Function to mute sounds
function muteSounds() {
    jumpsound.muted = true;
    gamesound.muted = true;
    gameoversound.muted = false;
    carrunningsound.muted = true;
    crash.muted = false;
}

// Function to unmute sounds 
function unmuteSounds() {
    jumpsound.muted = false;
    gamesound.muted = false;
    gameoversound.mmuted = false;
    carrunningsound.mmuted = false;
}

// policecar move
policeCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    policeCar.style.left = random + "px";
    counter++
    gamesound.play()
    carrunningsound.play()
})

//rececar move
window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){ var playerCarLeft = parseInt(window.getComputedStyle(playerCar).getPropertyValue("left"))
     if(playerCarLeft < 260){playerCar.style.left = (playerCarLeft + 130) + "px"}
     whoosh.play()
 };
 
     if(e.keyCode == "37"){
         var playerCarLeft = parseInt(window.getComputedStyle(playerCar).getPropertyValue("left"))
         if(playerCarLeft > 0){playerCar.style.left = (playerCarLeft - 130) + "px"
         whoosh.play()
     }
 
     }
    })

//Game over
setInterval(function Gameover (){
    var policeCarTop = parseInt(window.getComputedStyle(policeCar).getPropertyValue("top"))
    var policeCarLeft = parseInt(window.getComputedStyle(policeCar).getPropertyValue("left"));
    var playerCarLeft = parseInt(window.getComputedStyle(playerCar).getPropertyValue("left"));
        if((policeCarLeft === playerCarLeft) && (policeCarTop > 250) && (policeCarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `SCORE: ${counter} `;
            counter = 0;
        crash.play()
        gameoversound.play()
        muteSounds().play
        }
}, 10)
