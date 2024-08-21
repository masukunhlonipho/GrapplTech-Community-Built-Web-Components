// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Highlight active link
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Carousel/slider Functionality
const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

//Manual Control
document.querySelector('.next-slide').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.prev-slide').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

// Auto-slide functionality
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

// Slide automatically every 3 seconds
setInterval(autoSlide, 3000);

// Add animations to buttons
document.querySelectorAll('.cta-button, .nav-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Scroll to Top/Bottom Buttons
document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('.scroll-bottom').addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
