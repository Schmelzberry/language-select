//Business Logic

function programTest(col, num, bev, mov, mus) {
  const inputSum = mus + mov + bev + num + col;

  if (inputSum.length >= 0 && inputSum.length <= 15) {
    document.getElementById("ruby").removeAttribute("class");
  } else if (inputSum.length > 15 && inputSum.length < 35) {
    document.getElementById("csharp").removeAttribute("class");
  } else {
    document.getElementById("rust").removeAttribute("class");
  }
}


// UI logic
function submission() {
  let form = document.getElementById("program");
  form.addEventListener("submit", handleCalculation);
}
window.addEventListener("load", submission);

function handleCalculation(event) {
  event.preventDefault();
  const colorInput = document.getElementById("color").value;
  const numberInput = document.getElementById("number").value;
  const drinkInput = document.getElementById("drank").value;
  const movieInput = document.getElementById("movie").value;
  const musicInput = document.getElementById("music").value;

  let userInputResults = programTest(colorInput + numberInput + drinkInput + movieInput + musicInput);
  

  document.getElementById("output-rust").innerText = "The language suited to you is: " + userInputResults; + " !";

  };





