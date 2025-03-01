// Font Change
const eye = document.getElementById('eye');

eye.addEventListener('click', () => {
    eye.classList.toggle('fa-eye');
    eye.classList.toggle('fa-eye-slash');
})

// Password Show Hide
const input = document.querySelector('input');

eye.addEventListener('click', () => {
    if (input.type === 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
})

// div container iterval

const div = document.querySelector('.container');

setTimeout(function() {
    document.querySelector('.container').style.opacity = 1;
  }, 250);
