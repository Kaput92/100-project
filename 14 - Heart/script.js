const greyHeart = document.querySelector('.grey-heart');
const redHeart = document.querySelector('.red-heart');

redHeart.addEventListener('click', () => {
    greyHeart.classList.remove('animation');
    void greyHeart.offsetWidth;
    greyHeart.classList.add('animation');
    redHeart.classList.toggle('fill-color');
});