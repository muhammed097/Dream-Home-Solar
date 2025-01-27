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