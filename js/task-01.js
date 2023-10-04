"use strict";

const countCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${countCategories.length}`);

countCategories.forEach((categories) =>
  console.log(
    `Category: ${categories.children[0].textContent}` +
      "\n" +
      `Elements: ${categories.children[1].children.length}`
  )
);
