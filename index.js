var drumList = document.querySelectorAll(".drum")
var numberOfDrums = drumList.length;

for(var i=0; i<numberOfDrums; i++){
  drumList[i].addEventListener("click", handleClick);
}

function handleClick(){
  var buttonPressed = this.innerHTML;
  playSound(buttonPressed);
  buttonAnimation(buttonPressed);
}


document.addEventListener("keydown", handleKeyStroke);

function handleKeyStroke(event){
  playSound(event.key);
  buttonAnimation(event.key);
}

function playSound(buttonPressed){
  var audio;

  switch (buttonPressed) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log("wrong choice");
  }
  audio.play();
}


function buttonAnimation(buttonPressed){
  var htmlElement = document.querySelector("."+buttonPressed);
  htmlElement.classList.toggle("pressed");

  setTimeout(function(){
    htmlElement.classList.toggle("pressed");
  }, 102);
}
