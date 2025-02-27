const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});


const form = document.querySelector('.modal-form');

/* prevent form from submitting */

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    modal.classList.remove('show-modal');
});