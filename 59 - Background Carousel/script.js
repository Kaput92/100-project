const body = document.body;
const imgs = document.querySelectorAll(".img");
const arrowBtns = document.querySelectorAll(".arrow-btn");

let activeImg = 0;

function activeImages() {
  imgs.forEach((img) => {
    img.classList.remove("active");
    img.classList.remove("animateTransition");
  });

  imgs[activeImg].classList.add("active");
  imgs[activeImg].classList.add("animateTransition");
}

setImageAsBackground();

function setImageAsBackground() {
  const backgroundImage = imgs[activeImg].style.backgroundImage;
  body.style.backgroundImage = backgroundImage;

  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center center";
}

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList == "right-arrow") {
      activeImg++;
      if (activeImg > imgs.length - 1) {
        activeImg = 0;
      }
    } else {
      activeImg--;
      if (activeImg < 0) {
        activeImg = imgs.length - 1;
      }
    }

    setImageAsBackground();
    activeImages();
  });
});
