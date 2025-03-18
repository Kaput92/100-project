const p = document.getElementById("p");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  let input = document.getElementById("input").value;

  if (input !== "") {
    let regExp = new RegExp(input, "gi");
    p.innerHTML = p.textContent.replace(regExp, `<mark>$&</mark>`);
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let inputValue = input.value;

    if (inputValue !== "") {
      let regExp = new RegExp(inputValue, "gi");
      p.innerHTML = p.textContent.replace(regExp, `<mark>$&</mark>`);
    }
  }
});