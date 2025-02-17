const cursor = document.querySelector('.cursor');
const btn = document.querySelector('button');
const elements = document.querySelectorAll('h1, p, button');

document.addEventListener('mousemove', (e) => {
    moveCursor(e.pageX, e.pageY);
});

const moveCursor = (pageX, pageY) => {
  cursor.style.left = `${pageX}px`;
  cursor.style.top = `${pageY}px`;
};

elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        element.classList.add('black-text');
        btn.style.border = '2px solid black';
        element.classList.add('black-text');
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        element.classList.remove('black-text');
        btn.style.border = '2px solid white';
        element.classList.remove('black-text');
    });
});

cursor.style.display = 'none';

document.addEventListener('mousemove', (e) => {
    const target = e.target;
    if (target.closest('h1, p, button')) {
        cursor.style.display = 'block';
    } else {
        cursor.style.display = 'none';
    }
});