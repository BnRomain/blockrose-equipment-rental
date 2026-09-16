// Carousel d'images

document.querySelectorAll('.card').forEach(card => {
    const carousel = card.querySelector('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    let current = 0;
    let intervalId = null;

    // Créer dynamiquement les dots si besoin
    let dotsContainer = card.querySelector('.carousel-dots');
    if (!dotsContainer) {
        dotsContainer = document.createElement('div');
        dotsContainer.classList.add('carousel-dots');
        carousel.after(dotsContainer);
    }

    // Vider les anciens dots si présents
    dotsContainer.innerHTML = '';

    const dots = [];

    images.forEach((img, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            img.classList.add('active');
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            showImage(index);
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
    });

    function showImage(index) {
        images[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = index;
        images[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function startAutoSlide() {
        intervalId = setInterval(() => {
            const next = (current + 1) % images.length;
            showImage(next);
        }, 7000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    if (images.length > 1) {
        startAutoSlide();
        card.addEventListener('mouseenter', stopAutoSlide);
        card.addEventListener('mouseleave', startAutoSlide);
    }
});