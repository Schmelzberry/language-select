//Business Logic

function programTest (col,num,ag,mov,mus) {
const inputSum = mus + mov + ag + num + col;

if(inputSum.length >= 0 && inputSum.length <= 20) {
  document.getElementById("ruby").removeAttribute("class");
} else if (inputSum.length > 20 && inputSum.length < 40) {
document.getElementById("csharp").removeAttribute("class");
} else {
  document.getElementById("rust").removeAttribute("class");
  
  }
}
// UI logic
window.addEventListener("load", submission); 
function submission() {
let form = document.getElementById("program");
form.addEventListener("submit", handleCalculation);
}
function handleCalculation(event) {
  event.preventDefault();

const colorInput = document.getElementById("color").value;
const numberInput = document.getElementById("number").value;
const ageInput = document.getElementById("age").value;
const movieInput = document.getElementById("movie").value;
const musicInput = document.getElementById("music").value;

const userInputResults = programTest(colorInput,numberInput,ageInput,movieInput, musicInput);



}



// function formSubmission() {
//   let form = document.querySelector("form");
//   form.onsubmit = function(event) {
//     event.preventDefault();
//     userInput();
//   }




//   window.onload = function () {
//   formSubmission();
//     }
  
//   }
