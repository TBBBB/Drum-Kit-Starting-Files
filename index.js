

var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrums;i++){


document.querySelectorAll(".drum")[i].addEventListener("click", drumClicked);

function drumClicked(){
    var drumName = this.innerHTML;
    switch (drumName){
        case "w" :
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            console.log("yes iam w");
            break; 
        case "a" :
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            console.log("yes iam w");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            console.log("yes iam w");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            console.log("yes iam w");
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            console.log("yes iam w");
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            console.log("yes iam w");
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            console.log("yes iam w");
            break;
        default:
            alert("sorry i didn't find it");
    }
}
}



