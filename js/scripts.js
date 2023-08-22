//Business Logic
function programTest(col, num, bev, mov, mus) {
  const inputSum = col + num + bev + mov + mus;

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
window.addEventListener("click", clickHappened);

function submission() {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleCalculation);
  
}

function clickHappened() {
  let button = document.querySelector("button");
  button.addEventListener("click", refreshFormResults);
}

function handleCalculation(event) {
  event.preventDefault();

  const colorInput = document.getElementById("color").value;
  const numberInput = document.getElementById("number").value;
  const drinkInput = document.getElementById("drank").value;
  const movieInput = document.getElementById("movie").value;
  const musicInput = document.getElementById("music").value;

  let userInputResults = programTest(colorInput, numberInput, drinkInput, movieInput, musicInput);
  return userInputResults;


};

function refreshFormResults() {
  if (document.querySelectorAll("input").innerText != "") {
    document.querySelector("div#ruby").setAttribute("class", "hidden");
    document.querySelector("div#csharp").setAttribute("class", "hidden");
    document.querySelector("div#rust").setAttribute("class", "hidden");
    }
    
  }

