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
  let form = document.getElementById("program");
  form.addEventListener("submit", handleCalculation);
  
}
window.addEventListener("load", submission); {
 
}

function handleCalculation(event) {
  event.preventDefault();
  const colorInput = document.getElementById("color").value;
  const numberInput = document.getElementById("number").value;
  const drinkInput = document.getElementById("drank").value;
  const movieInput = document.getElementById("movie").value;
  const musicInput = document.getElementById("music").value;

  let userInputResults = programTest(colorInput,numberInput, drinkInput, movieInput, musicInput);
    return userInputResults;


};

function reset() {
  let form = document.getElementById("program");

  document.getElementById("color").value = null;
  document.getElementById("number").value = null;
  document.getElementById("drank").value = null;
  document.getElementById("movie").value = null;
  document.getElementById("music").value = null;
  document.getElementById("drank").setAttribute("class","hidden");
  document.getElementById("movie").setAttribute("class","hidden");
  document.getElementById("music").setAttribute("class","hidden");

  form.removeEventListener("submit", handleCalculation);

}



