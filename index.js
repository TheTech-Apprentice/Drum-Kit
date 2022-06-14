// function handleClick(){
//     var buttonInnerHTML = this.textContent 
//     makeSound(buttonInnerHTML);
// }


// for(i=0; i<= document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }

// document.addEventListener("keydown",function(event){

//     makeSound(event.key);

// });

// function makeSound(key){

//     switch (key){
//         case "w":

                
//                 var audio1 = new Audio('/Users/LauraB/Desktop/Udemy/Web dev/Drum Kit Starting Files/sounds/tom-1.mp3');
//                 audio1.play();
//             break;
//         case "a":
//                 var audio2 = new Audio('sounds/tom-2.mp3');
//                 audio2.play();
//             break;
//         case "s":
//                 var audio3 = new Audio('sounds/tom-3.mp3');
//                 audio3.play();
//             break;
//         case "d":
//                 var audio4 = new Audio('sounds/tom-4.mp3');
//                 audio4.play();
//             break;
//         case "j":
//                 var audio5 = new Audio('sounds/snare.mp3');
//                 audio5.play();
//             break;
//         case "k":
//             var audio6 = new Audio('sounds/crash.mp3');
//             audio6.play();
//             break;
//         case 'l':
//             var audio7 = new Audio('sounds/kick-bass.mp3');
//                 audio7.play();
//                 break;
//         default:
//             console.log(buttonInnerHTML);

//     }


// }


/******new code*******/
// mouse click
var pressClick = document.querySelectorAll(".drum");
 
for(var i = 0; i< pressClick.length;i++)
{
    pressClick[i].addEventListener("click", drums);
    
}
 
// keybord press
document.addEventListener("keydown", drums);
 
 
// function
function drums(event) {

    //buttonAnimation(this.innerHTML);
    //buttonAnimation(event.key);

    switch (event = event.key || this.innerHTML) {
       case "w":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           buttonAnimation(event);
           
           
           break;
            
       case "a":
           var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
           buttonAnimation(event);
           
           break;
            
       case "s":
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           buttonAnimation(event);
           break;
            
       case "d":
           var tom4 = new Audio("sounds/tom-4.mp3");
           tom4.play();
           buttonAnimation(event);
           break;
            
       case "j":
           var snare = new Audio("sounds/snare.mp3");
           snare.play();
           buttonAnimation(event);
           break;
            
       case "k":
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           buttonAnimation(event);
           break;  
            
       case "l":
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           buttonAnimation(event);
           break;
            
       default:
           console.log("wrong letter: " + event);
           break;
    }
}

//w is the parameter input 
function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);


}
