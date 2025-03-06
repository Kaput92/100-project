const countEl = document.getElementById("count");
const saveEl = document.getElementById("save");
const incrementBtn = document.querySelector(".increment-btn");
const saveBtn = document.querySelector(".save-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
  let countStr = count + ", ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
});
