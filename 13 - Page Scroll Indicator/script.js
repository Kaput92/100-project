let indicator = document.querySelector('.scroll-indicator .progress');

window.addEventListener('scroll', scroll);

function scroll() {
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = window.scrollY;
    
    if (scrollHeight > 0) {
        let scrolled = (scrollTop / scrollHeight) * 100;
        indicator.style.width = `${scrolled}%`;
    }
}