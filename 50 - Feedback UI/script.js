const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied'

function removeActives() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}

ratingsContainer.addEventListener('click', e => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActives();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <p class='heart'>❤️‍🔥</p>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p class='text'>We'll use your feedback to improve our customer support</p>`
})