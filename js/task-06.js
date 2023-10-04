"use strict";

let inputForm = document.getElementById("validation-input");
let lengthInput = inputForm.getAttribute("data-length");
let lengthInputValue = parseInt(lengthInput, 10);

inputForm.onblur = function () {
  if (inputForm.value.length === lengthInputValue) {
    inputForm.classList.remove("invalid");
    inputForm.classList.add("valid");
  } else if (inputForm.value.length === 0) {
    inputForm.classList.remove("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("invalid");
  }
};
