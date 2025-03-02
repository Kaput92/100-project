// selectField
// selectText
// list
// arrow
// options

const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const list = document.getElementById("list");
const arrow = document.getElementById("arrow");
const options = document.getElementsByClassName("options");

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
});

for (option of options) {
  option.onclick = function() {
    selectText.innerHTML = this.textContent;
/*     selectText.style.margin = '0 auto'; */
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  };
}
