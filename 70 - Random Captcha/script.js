let captcha = document.querySelector(".captcha");
let reloadBtn = document.querySelector(".reload-btn");
let inputField = document.querySelector("input");
let checkBtn = document.querySelector(".check-btn");
let statusTxt = document.querySelector(".status-text");

let allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    captcha.innerHTML += `${randomChar}`;
  }
}

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  statusTxt.style.display = "block";
  let inputVal = inputField.value.split("").join("");

  if (inputVal == captcha.innerHTML) {
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerHTML = "Captcha Matched!";
    setTimeout(() => {
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();
    }, 4000);
  } else {
    statusTxt.style.color = "#fffb00";
    statusTxt.innerHTML = "Captcha Not Matched! Try Again.";
  }
});

reloadBtn.addEventListener("click", () => {
  captcha.innerHTML = "";
  getCaptcha();
});
