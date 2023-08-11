//Business Logic

function userInput () {
const colorInput = document.getElementById("color").value;
const numberInput = document.getElementById("color").value;
const ageInput = document.getElementById("color").value;
const movieInput = document.getElementById("color").value;
const musicInput = document.getElementById("color").value;

const userInputResults = colorInput + '' + numberInput + '' + ageInput + '' + movieInput + '' + musicInput;

if(userInputResults.length >= 0 && userInputResults.length <= 20) {
  document.getElementById("results").innerText = "Ruby is the language for you!";
  document.getElementById("result-info").innerText = "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.";
}
else if (userInputResults.length > 20 && userInputResults.length <= 40) {
document.getElementById("results").innerText = "C# is the language for you!";
document.getElementById("result-info").innerText = "C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.";

} else {
  document.getElementById("results").innerText = "Java"
  document.getElementById("results-info").innerText = "Java does some things"

}

// UI logic

function formSubmission() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  }
userInput();
}

window.onload = function () {
  formSubmission();
}}