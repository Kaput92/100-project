const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector('.cursor');

let words = ['Awesome', 'Fun', 'Cool', 'Life', 'Amazing', 'Exciting', 'Incredible', 'Wonderful', 'Beautiful', 'Fantastic', 'Fabulous', 'Terrific', 'Marvelous', 'Stunning', 'Impressive', 'Spectacular', 'Magnificent', 'Gorgeous', 'Breathtaking', 'Extraordinary', 'Phenomenal', 'Remarkable', 'Astonishing', 'Astounding', 'Mind-blowing', 'Mind-boggling', 'Mind-bending'];
const typingDelay = 200;
const erasingDelay = 200;
const newTextDelay = 2000; // Delay between current and next text

const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    if (words.length) {
        setTimeout(type, typingDelay + 250);
    }
});

function type() {
    if (charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        index++;
        if (index >= words.length - 1) {
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}