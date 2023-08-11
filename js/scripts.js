//Business Logic

function userInput () {
const colorInput = document.getElementById("color").value;
const numberInput = document.getElementById("color").value;
const ageInput = document.getElementById("color").value;
const movieInput = document.getElementById("color").value;
const musicInput = document.getElementById("color").value;

const userInputResults = colorInput + '' + numberInput + '' + ageInput + '' + movieInput + '' + musicInput;

if(userInputResults.length >= 10 && userInputResults.length <= 20) {
  document.getElementById("results").innerText = "Ruby is the language for you!";
  document.getElementById("result-info").innerText = "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.";
}

}

// UI logic

function formSubmission() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  }
}

window.onload = function () {
  formSubmission();
}