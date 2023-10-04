function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColour = document.querySelector(".change-color");
const body = document.body;
const spanColour = document.querySelector(".color");

buttonColour.addEventListener("click", clickButton);

function clickButton(evt) {
  let colourRandom = getRandomHexColor();
  body.style.backgroundColor = colourRandom;
  spanColour.textContent = colourRandom;
}
