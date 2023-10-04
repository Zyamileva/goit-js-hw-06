function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

let boxes = document.getElementById("boxes");

create.addEventListener('click', getCount);
destroy.addEventListener("click", destroyBoxes);

function getCount() {
  const counter = +document.querySelector("#controls input").value;
  createBoxes(counter);
}

function createBoxes(counter) {
  const sizeBasic = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < counter; i++) {
    let size = sizeBasic + i * 10;
    let div = document.createElement("div");

    console.log(getRandomHexColor());
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    console.dir(div);
    fragment.append(div);
  }
  boxes.append(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

