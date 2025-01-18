const header = document.querySelector('header');

function handleScroll() {
    if (window.scrollY > 0) {
       
        header.classList.add('scrolled');
    } else {
       
        header.classList.remove('scrolled');
    }
}


window.addEventListener('scroll', handleScroll);

const logo = document.querySelector('.logo');
const plus = document.querySelector('.plus');

logo.addEventListener('mouseenter', () => {
    plus.classList.add('rotate');

    setTimeout(() => {
        logo.classList.add('merci');
    }, 1000); 
});

logo.addEventListener('mouseleave', () => {
    plus.classList.remove('rotate');
    logo.classList.remove('merci');
});