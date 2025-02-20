const btn = document.querySelector("#emoji");

const emoji = [
    "😂", "😘", "😊", "😁", "😉", "😎", "🤩", "😍", "😜", "😇", 
    "😋", "😏", "😌", "😔", "😪", "😴", "😵", "😲", "😳"
  ];

// emoji change with mouse hover
btn.addEventListener("mouseover", () => {
  btn.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
});


// random emoji change
setInterval(() => {
    btn.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
  }, 1000);