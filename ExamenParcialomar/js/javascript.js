const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 6) % 6;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 6;
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

function updateSlider() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}vw)`;

    // Actualizar la clase 'active' en los puntos
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

updateSlider();
