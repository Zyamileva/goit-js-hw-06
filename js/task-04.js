const dec = document.querySelector("[data-action='decrement']");
const inc = document.querySelector("[data-action='increment']");
const val = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  val.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  val.textContent = counterValue;
};

dec.addEventListener("click", decrement);
inc.addEventListener("click", increment);