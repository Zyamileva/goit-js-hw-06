"use strict";
let inputForm = document.getElementById("font-size-control");
let textForm = document.getElementById("text");

window.addEventListener("load", loadStartValue);
inputForm.addEventListener("input", inputValue);

function loadStartValue(evt) {
  textForm.style.fontSize = inputForm.value + "px";
}

function inputValue(evt) {
  textForm.style.fontSize = evt.currentTarget.value + "px";
}
