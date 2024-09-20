document.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector(".hamburger");
    let links = document.querySelector(".nav-links");

    hamburger.addEventListener('click', () => {
        links.classList.toggle("nav-menu-show");
    });
});
    const navLinks = document.querySelectorAll('.nav-links > li');

    navLinks.forEach(link => {
        const toggleIcon = link.querySelector('.toggle-icon');
        const sublinks = link.querySelector('.sublinks');

        link.addEventListener('mouseenter', () => {
            if (toggleIcon) toggleIcon.textContent = '-';
            if (sublinks) sublinks.style.display = 'block';
        });

        link.addEventListener('mouseleave', () => {
            if (toggleIcon) toggleIcon.textContent = '+';
            if (sublinks) sublinks.style.display = 'none';
        });
    });

    let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


