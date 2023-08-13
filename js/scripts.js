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
function submission() {
  
  let form = document.querySelector("form");
  form.addEventListener("submit", handleCalculation);
 

}
window.addEventListener("load", submission); {
}

window.addEventListener("click", clickFx);


function clickFx () {
let button = document.querySelector("button");
button.addEventListener("click", refreshForm);
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

function refreshForm() {
  
  document.getElementById("color").innerText = "";
  document.getElementById("number").innerText = "";
  document.getElementById("drank").innerText = "";
  document.getElementById("movie").innerText = "";
  document.getElementById("music").innerText = "";

  window.removeEventListener("click", submission);

}






