const footer = document.querySelector('footer');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            footer.classList.add('visible');
        }
    });
}, {
    threshold: 0.2 // Déclenche à 20% de visibilité
});

observer.observe(footer);