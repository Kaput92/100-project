let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector(".close");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/img${index}.avif`);
    console.log(img.src);
  });
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}

close.addEventListener("click", () => {
  wrapper.style.display = "none";
});

if (wrapper) {
  wrapper.addEventListener("click", () => {
    wrapper.style.display = "none";
  });
}