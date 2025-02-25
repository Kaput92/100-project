// copyText
const copyText = document.querySelector('textarea[name=copyTxt]');

// finalText
const finalText = document.querySelector('textarea[name=finalTxt]');

// moveBtn
const moveBtn = document.querySelector(".moverBtn");

// copyBtn
const copyBtn = document.querySelector(".copyBtn");

// output
const output = document.querySelector(".output");

function copyToClipBoard(string) {
  const outputContainer = document.querySelector(".output-container");
  const textArea = document.createElement("textarea");
  textArea.value = string;
  outputContainer.appendChild(textArea);
  textArea.select();
  /* document.execCommand("copy"); */
  navigator.clipboard.writeText(string)
  outputContainer.removeChild(textArea);

  output.innerHTML = "<h3>Content Copied</h3>";
  output.classList.add("added");

  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);
}

copyText.addEventListener("click", () => this.select());
finalText.addEventListener("click", () => this.select());

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
});

moveBtn.addEventListener("click", () => {
    let temp = copyText.value;
  finalText.value = temp;
});
