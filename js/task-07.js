"use strict";
let inputForm = document.getElementById("font-size-control");
let textForm = document.getElementById("text");
inputForm.oninput = function() {
    textForm.style.fontSize = inputForm.value + "px";
};

