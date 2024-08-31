document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function openLink(url) {
    window.open(url, '_blank');
}

function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
}

document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (boxPosition < screenPosition) {
            box.classList.add('fade-in');
        }
    });
});
