const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const btn = document.querySelectorAll(".btn");

inputField.addEventListener("keyup", () => {
  outputField.innerHTML = inputField.value;
});

btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("uppercase")) {
      outputField.innerHTML = outputField.innerHTML.toUpperCase();
    } else if (element.classList.contains("lowercase")) {
      outputField.innerHTML = outputField.innerHTML.toLowerCase();
    } else if (element.classList.contains("capitalize")) {
      outputField.innerHTML =
        outputField.innerHTML.charAt(0).toUpperCase() +
        outputField.innerHTML.slice(1).toLowerCase();
    } else if (element.classList.contains("bold")) {
      outputField.style.fontWeight = "Bold";
    } else if (element.classList.contains("italic")) {
      outputField.style.fontStyle = "italic";
    } else if (element.classList.contains("underline")) {
      outputField.style.textDecoration = "underline";
    }
  });
});
