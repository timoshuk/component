"use strict";

window.onload = function () {
  var label = document.querySelector("#range-form__input-first");
  var data = document.querySelector(".range-form__label span");
  var marker = document.querySelector(".range-form__marker");

  label.addEventListener("change", function () {
    var val = this.value;
    data.innerHTML = val;
    marker.style.left = val + "%";
  });
};