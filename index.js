// REGISTERING THE BUTTON CLICKS --> ADDEVENTLISTENER
// THE EVENTTARGET METHOD addEventListener() sets up a function to be called
// whenever the specified event is delivered to the target

// NO PARENTHESES FOR THE FUCTION(lambda), OTHERWISE IT WILL GET AUTOMATICALLY CALLED
// --> passing in the name of the function as an input

// NOW WE HAVE TO ITERATE THROUGH ALL BUTTONS TO ADDEVENT LISTENER.

// forEach() is an interation method, and it is mainly used for serial exeuction of functionality
// against a list of elements.

// FOR IN JUST COPY THE KEYS (LIST = INDEX) - not suitable for copying elements
// it will copy the index to the length of the object (INDEX ORDER IMPORTANT)

// https://www.tabnine.com/academy/javascript/how-to-use-foreach-javascript/


// -----------------DETECTING BUTTON PRESS-----------------
for(var i = 0; i < document.getElementsByClassName("drum").length; i++){
  // SECOND INPUT OF EVENTLISTENER = function as input - higher order functions
  // CALLBACK FUNCTION IS A FUNCTION PASSED INTO ANOTHER
   // FUNCTION AS AN ARGUMENT with return value (invoked inside the outer function)
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    // WE CAN FIGURE OUT THE IDENTITY OF THE BUTTON THAT TRIGGERED THE EVENT BY TAPPING into
    // something called "this" - it return the html tag
    let key = this.innerHTML;
    makeSound(key);
    makeButtonAnimation(key);

    // CREATE JS OBJECT: var object (dict)= {name: "martin"} --> acess dict.name;
    // we can also add anonymous functions
    // WE CAN ALSO CREATE CONSTRUCTOR FUNCTION - CAPITALIZED (input --> when we create object)
    // EXAMPLE
    /*// CREATE CONSTRUCTOR function
      function Housekeeper(name, age){
          this.name = name;
          this.age = age;
          this.clean = function(){
              console.log("cleaning")
          }
      }

      // CREATING OBJCECTS WITH THE CONSTRUCTOR FUNCTION
      var housekeeper1 = new Housekeeper("Angela", "23");
      console.log(housekeeper1.name)
      housekeeper1.clean() */
  })
}
// WE CAN ALSO ACTIVATE THE "debugger" in devTools

// THE DOLLAR SIGN AND THE UNDERSCORE - are jS identifiers (like a name)
var $0 = "name";
console.log($0);

// -----------------DETECTING keyboard PRESS-----------------


// ADD EVENT LISTENER FOR keyvdown - SIMPLY ADDING FOR THE ENTIRE DOCUMENT (WEB PAGE IS LISTENING)
// we can pass parameter --> allows us to tap into the event that triggered the event listener

// addEventListener is a Higher Order Function - take function as input
// lambda = CALLBACK FUNCTION - we can use it before it is even declared only in JS
  // get called by the event not by us

/*
When the event happend --> an object with attributes gets called and the second parameter of the
  higher order function takes gets the object as input of the actually event - a call of function inside a function
    But it will only trigger when the event that the programm was looking to detect (first parameter) --> will trigger callback

  so if we give a higher order function a callback function with input(then it will call AUTOMATICALLY independent of the acutally event)
  so if no input --> call function if type === param 1 and give function object as input = callback function
 */
document.addEventListener("keydown", function(event){
  let key = event.key;
  makeSound(key);
  makeButtonAnimation(key);
})

function makeSound(key){
  switch(key){
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(event.key);
  }
}

function makeButtonAnimation(currentKey){
  // THIS IS THE BUTTON THAT WE'RE GOING TO CHANGE ITS STYLE with a predefines css class (add style)
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");

  /* AFTER X SECONDS THE CLASS SHOULD BE REMOVED AGAIN.
  THEREFORE: window setTimeout() method --> calls a function or evaulates an expressoion
  after a specified number of ms setTimeout(function, time)

  SO THE BUTTON GETS NORMAL AGAIN
  */
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
