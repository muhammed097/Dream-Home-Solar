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

// Faq Sections 

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                const otherAnswer = item.querySelector('.faq-answer');
                otherAnswer.style.height = '0px';
            }
        });

        // Toggle current FAQ
        if (!faqItem.classList.contains('active')) {
            faqItem.classList.add('active');
            answer.style.height = answer.scrollHeight + 'px';
        } else {
            faqItem.classList.remove('active');
            answer.style.height = '0px';
        }
    });
});

// Counter Animation Script
class Counter {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.startTimestamp = null;
        this.current = 0;
    }

    // Animate the counter
    animate(timestamp) {
        if (!this.startTimestamp) {
            this.startTimestamp = timestamp;
        }

        const progress = Math.min((timestamp - this.startTimestamp) / this.duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuad = t => t * (2 - t);
        const easedProgress = easeOutQuad(progress);

        this.current = Math.floor(easedProgress * this.target);
        this.element.textContent = this.current;

        if (progress < 1) {
            requestAnimationFrame(this.animate.bind(this));
        } else {
            this.element.textContent = this.target;
        }
    }

    // Start the animation
    start() {
        requestAnimationFrame(this.animate.bind(this));
    }
}

// Intersection Observer setup
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get all counter elements
            const counterElements = entry.target.querySelectorAll('.counter-number .number');
            
            // Initialize and start counter for each element
            counterElements.forEach(element => {
                const target = parseInt(element.dataset.target);
                const counter = new Counter(element, target);
                counter.start();
            });

            // Stop observing after animation starts
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const counterWrapper = document.querySelector('.counter-wrapper');
    if (counterWrapper) {
        counterObserver.observe(counterWrapper);
    }
});

// Reset animation on visibility change
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        const counterElements = document.querySelectorAll('.counter-number .number');
        counterElements.forEach(element => {
            element.textContent = '0';
        });
        
        const counterWrapper = document.querySelector('.counter-wrapper');
        if (counterWrapper) {
            counterObserver.observe(counterWrapper);
        }
    }
});

// Testimonial Scrolling 

class TestimonialSlider {
    constructor() {
        this.track = document.querySelector('.testimonial-track');
        this.items = document.querySelectorAll('.testimonial-item');
        this.prevBtn = document.querySelector('.nav-button.prev');
        this.nextBtn = document.querySelector('.nav-button.next');
        
        this.currentIndex = 0;
        this.itemCount = this.items.length;
        this.interval = null;
        
        this.init();
    }

    init() {
        // Set up click handlers
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Start auto-scroll
        this.startAutoScroll();
        
        // Pause on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoScroll());
        this.track.addEventListener('mouseleave', () => this.startAutoScroll());
    }

    updateSlide() {
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        this.updateButtons();
    }

    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.itemCount - 1;
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlide();
        }
    }

    next() {
        if (this.currentIndex < this.itemCount - 1) {
            this.currentIndex++;
            this.updateSlide();
        } else {
            // Reset to first slide
            this.currentIndex = 0;
            this.updateSlide();
        }
    }

    startAutoScroll() {
        this.interval = setInterval(() => this.next(), 5000); // Change slide every 5 seconds
    }

    stopAutoScroll() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// Initialize slider when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialSlider();
});


// Testimonial Scrolling Ends 