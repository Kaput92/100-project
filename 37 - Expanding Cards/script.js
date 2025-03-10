const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        removeCurrentActive()
        slide.classList.toggle('active')
    })
})

function removeCurrentActive () {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}