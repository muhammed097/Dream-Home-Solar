const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');
const dropdownLinks = document.querySelectorAll('.dropdown > a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navContainer.classList.toggle('active');
});

// Handle dropdown clicks on mobile
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            const dropdown = link.parentElement;
            dropdown.classList.toggle('active');
            
            // Rotate arrow on mobile
            if (dropdown.classList.contains('active')) {
                link.style.transform = 'rotate(180deg)';
            } else {
                link.style.transform = 'rotate(0)';
            }
        }
    });
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-links a:not(.dropdown > a)').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navContainer.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.background-video');
    const source = video.querySelector('source');
    
    // Load video only when it's in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Set the actual video source
                source.src = source.dataset.src;
                video.load();
                
                video.addEventListener('loadeddata', () => {
                    video.classList.add('loaded');
                    video.play();
                });
                
                observer.unobserve(video);
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(video);
});

// Fallback for browsers that don't support IntersectionObserver
if (!('IntersectionObserver' in window)) {
    const video = document.querySelector('.background-video');
    const source = video.querySelector('source');
    source.src = source.dataset.src;
    video.load();
    video.play();
}