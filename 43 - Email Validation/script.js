let input = document.getElementById("inputBox");

input.addEventListener('keydown', validate)

function validate() {
    let form = document.querySelector('.mainForm');
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (input.value.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
    }
}