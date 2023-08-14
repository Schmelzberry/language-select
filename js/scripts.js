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
window.addEventListener("load", submission);

window.addEventListener("click", clickFx);

function clickFx () {
let button = document.querySelector("button");
button.addEventListener("click", refreshFormInput);


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

function refreshFormInput() {
  

  if(document.querySelectorAll("input").innerText != "");
    document.querySelector("div#ruby").setAttribute("class", "hidden");
    console.log("set ruby class");
    document.querySelector("div#csharp").setAttribute("class","hidden");
    document.querySelector("div#rust").setAttribute("class", "hidden");
   



  // document.querySelector("input#color").value = "";
  // document.querySelector("input#number").value = "";
  // document.querySelector("input#drank").value = "";
  // document.querySelector("input#movie").value = "";
  // document.querySelector("input#music").value = "";

  console.log("hello");
  // window.removeEventListener("click", submission);





}
