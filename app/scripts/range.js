window.onload = () => {
  let label = document.querySelector("#range-form__input-first");
  let data = document.querySelector(".range-form__label span");
  let marker = document.querySelector(".range-form__marker");

  label.addEventListener("change", function() {
    let val = this.value;
    data.innerHTML = val;
    marker.style.left = val + "%";
  });
};
