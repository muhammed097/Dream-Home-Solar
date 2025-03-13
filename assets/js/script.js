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

// Calculator switch functionality
function switchCalculator(calculatorType) {
    const batteryCard = document.getElementById('batteryCard');
    const energyCard = document.getElementById('energyCard');
    const batteryCalculator = document.getElementById('batteryCalculator');
    const energyCalculator = document.getElementById('energyCalculator');
    
    if (calculatorType === 'battery') {
        batteryCard.classList.add('active');
        energyCard.classList.remove('active');
        batteryCalculator.style.display = 'block';
        energyCalculator.style.display = 'none';
    } else {
        batteryCard.classList.remove('active');
        energyCard.classList.add('active');
        batteryCalculator.style.display = 'none';
        energyCalculator.style.display = 'block';
    }
}

// Initialize the page to show the battery calculator
window.onload = function() {
    switchCalculator('battery');
};

// Battery Calculator Functions
function resetUI() {
    // Get list of error and result element IDs
    var errorIds = ["energyConsumptionError", "batteryVoltageError", "batteryTypeError", "backupDaysError", "calculatorResults"];

    // Set the display of each error and result element to 'none'
    errorIds.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
}

function checkForErrors() {
    let isError = false;

    if (!document.getElementById("energyConsumption").value || document.getElementById("energyConsumption").value <= 0) {
        document.getElementById("energyConsumptionError").style.display = "block";
        document.getElementById("energyConsumptionLabel").scrollIntoView({
            behavior: 'smooth'
        });
        isError = true;
    }

    if (!document.getElementById("backupDays").value || document.getElementById("backupDays").value < 1) {
        document.getElementById("backupDaysError").style.display = "block";
        document.getElementById("backupDaysLabel").scrollIntoView({
            behavior: 'smooth'
        });
        isError = true;
    }

    return isError;
}

function convertToWhPerDay() {
    const energyConsumption = parseFloat(document.getElementById("energyConsumption").value);
    const unit = document.getElementById("energyConsumptionUnit").value;
    
    switch (unit) {
        case "whperday":
            return energyConsumption;
        case "whpermonth":
            return energyConsumption / 30;
        case "kwhperday":
            return energyConsumption * 1000;
        case "kwhpermonth":
            return energyConsumption * 1000 / 30;
        default:
            return 0;
    }
}

function calculate() {
    resetUI();
    
    if (checkForErrors())
        return false;
    
    const dailyEnergyWh = convertToWhPerDay();
    const nominalBatteryVoltage = parseFloat(document.getElementById("batteryVoltage").value);
    const batteryType = document.getElementById("batteryType").value;
    const backupDays = parseFloat(document.getElementById("backupDays").value);
    
    const alternateLiFePO4Voltage = {
        12: 12.8,
        24: 25.6,
        36: 38.4,
        48: 51.2
    };
    
    let inefficiencyFactor, batteryDoD, batteryVoltage;
    
    if (batteryType === "lithium") {
        inefficiencyFactor = 1.05;
        batteryDoD = 1.0;
        batteryVoltage = alternateLiFePO4Voltage[nominalBatteryVoltage];
    } else {
        inefficiencyFactor = 1.2;
        batteryDoD = 0.5;
        batteryVoltage = nominalBatteryVoltage;
    }
    
    let batterySizeAh = Math.ceil(dailyEnergyWh * backupDays * inefficiencyFactor / (batteryDoD * batteryVoltage));
    let batterySizeWh = Math.ceil(batterySizeAh * batteryVoltage);
    let batterySizekWh = Math.round(batterySizeWh / 1000 * 100) / 100;
    
    const resultsDiv = document.getElementById("calculatorResults");
    let successResults = document.getElementById("successResults");
    let successResultsTitle = document.getElementById("successResultsTitle");
    let successNote = document.getElementById("successNote");
    
    successResultsTitle.innerHTML = 'Your ' + nominalBatteryVoltage + 'V ' + 
        (batteryType === 'lithium' ? '(' + batteryVoltage + 'V) LiFePO4' : 'lead acid') + 
        ' battery bank size:';
    
    successResults.innerHTML = '<strong>' + batterySizeAh + ' Ah</strong> ' + 
        (batterySizeWh < 1000 ? '(' + batterySizeWh + ' Wh)' : '(' + batterySizekWh + ' kWh)');
    
    resultsDiv.style.display = "block";
    successResults.style.display = "block";
    successNote.style.display = "block";
    
    document.getElementById("calculatorResults").scrollIntoView({
        behavior: 'smooth'
    });
    
    return false;
}