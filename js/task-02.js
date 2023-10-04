const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ulIngredient = document.getElementById("ingredients");

let ing = ingredients.forEach((element) => {
  let li = document.createElement("li");
  li.innerHTML = element;
  li.classList.add("item");
  ulIngredient.append(li);
});
