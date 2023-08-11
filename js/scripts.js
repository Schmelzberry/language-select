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
window.addEventListener("load", submission);

function submission() {
  let form = document.getElementById("program");
  form.addEventListener("submit", handleCalculation);
}

function handleCalculation(event) {
  event.preventDefault();

  const colorInput = document.getElementById("color").value;
  const numberInput = document.getElementById("number").value;
  const drinkInput = document.getElementById("drank").value;
  const movieInput = document.getElementById("movie").value;
  const musicInput = document.getElementById("music").value;

  let userInputResults = parseInt(programTest(colorInput, numberInput, drinkInput, movieInput, musicInput));

  if (userInputResults >= 0 && userInputResults <= 15) {
    document.querySelector("h2#output-ruby").innerText = "The programming language best suited to you is Rust based on your response of: " + userInputResults; + " !";
  } else if (userInputResults > 15 && userInputResults < 35) {
    document.querySelector("h2#output-csharp").innerText = "Ayyyyyy, the language suited to you is Rust based on your response of: " + userInputResults; + " !";
  } else {
    document.getElementById("output-rust").innerText = "The language suited to you is Rust based on your response of: " + userInputResults; + " !";
  }
}
