const clock = document.querySelector(".clock");

clock.addEventListener("load", () => tick);

function tick() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const html = `<span>${h}</span> : <span>${m}</span> : <span>${s}</span>`;

  clock.innerHTML = html;
}

setInterval(tick, 1000);
