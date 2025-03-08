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

// Calcualtor Scripts 
document.addEventListener('DOMContentLoaded', function() {
    // Card elements
    const batteryCard = document.getElementById('battery-card');
    const panelCard = document.getElementById('panel-card');
    
    // Calculator sections
    const batteryCalculator = document.getElementById('battery-calculator');
    const panelCalculator = document.getElementById('panel-calculator');
    
    // Back buttons
    const backToBatteryCards = document.getElementById('back-to-cards-battery');
    const backToPanelCards = document.getElementById('back-to-cards-panel');
    
    // Calculate buttons
    const calculateBatteryBtn = document.getElementById('calculate-battery');
    const calculatePanelBtn = document.getElementById('calculate-panel');
    
    // Results sections
    const batteryResultsSection = document.getElementById('battery-results');
    const panelResultsSection = document.getElementById('panel-results');
    
    // Card click handlers
    batteryCard.addEventListener('click', function() {
        batteryCalculator.classList.add('active');
        panelCalculator.classList.remove('active');
        window.scrollTo({ top: batteryCalculator.offsetTop - 20, behavior: 'smooth' });
    });
    
    panelCard.addEventListener('click', function() {
        panelCalculator.classList.add('active');
        batteryCalculator.classList.remove('active');
        window.scrollTo({ top: panelCalculator.offsetTop - 20, behavior: 'smooth' });
    });
    
    // Back button handlers
    backToBatteryCards.addEventListener('click', function() {
        batteryCalculator.classList.remove('active');
        batteryResultsSection.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    backToPanelCards.addEventListener('click', function() {
        panelCalculator.classList.remove('active');
        panelResultsSection.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Battery Calculator Logic
    calculateBatteryBtn.addEventListener('click', function() {
        // Get input values
        const dailyConsumption = parseFloat(document.getElementById('daily-consumption').value);
        const backupDays = parseFloat(document.getElementById('backup-days').value);
        const batteryType = document.getElementById('battery-type').value;
        const dischargeDepth = parseFloat(document.getElementById('discharge-depth').value) / 100;
        
        // Validate inputs
        if (isNaN(dailyConsumption) || isNaN(backupDays) || !batteryType || isNaN(dischargeDepth)) {
            alert('Please fill in all required fields with valid values.');
            return;
        }
        
        // Calculate battery capacity
        let systemVoltage = 48; // Standard system voltage
        let efficiencyFactor = 0.85; // System efficiency
        
        // Adjust for battery type
        let batteryEfficiency;
        let cycleLife;
        let costPerKwh;
        
        switch(batteryType) {
            case 'lithium':
                batteryEfficiency = 0.95;
                cycleLife = 4000;
                costPerKwh = 35000; // Cost in INR per kWh
                break;
            case 'lead':
                batteryEfficiency = 0.80;
                cycleLife = 1500;
                costPerKwh = 15000; // Cost in INR per kWh
                break;
            case 'gel':
                batteryEfficiency = 0.85;
                cycleLife = 2000;
                costPerKwh = 18000; // Cost in INR per kWh
                break;
            default:
                batteryEfficiency = 0.85;
                cycleLife = 2000;
                costPerKwh = 20000;
        }
        
        // Calculate capacity in kWh
        const capacityKwh = (dailyConsumption * backupDays) / (dischargeDepth * batteryEfficiency * efficiencyFactor);
        
        // Calculate capacity in Ah
        const capacityAh = (capacityKwh * 1000) / systemVoltage;
        
        // Calculate estimated cost
        const estimatedCost = capacityKwh * costPerKwh;
        
        // Update results
        document.getElementById('battery-capacity').textContent = capacityKwh.toFixed(2) + ' kWh';
        document.getElementById('battery-ah').textContent = capacityAh.toFixed(2) + ' Ah';
        document.getElementById('battery-cost').textContent = '₹' + Math.round(estimatedCost).toLocaleString('en-IN');
        document.getElementById('battery-life').textContent = cycleLife + ' Cycles';
        
        // Show results section
        batteryResultsSection.classList.add('active');
        
        // Scroll to results
        batteryResultsSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Solar Panel Calculator Logic
    calculatePanelBtn.addEventListener('click', function() {
        // Get input values
        const state = document.getElementById('state').value;
        const category = document.getElementById('category').value;
        const monthlyBill = document.getElementById('monthlyBill').value;
        
        // Validate inputs
        if (!state || !category || !monthlyBill) {
            alert("Please fill in all required fields to calculate your solar needs.");
            return;
        }
        
        // Parse values
        const billAmount = parseFloat(monthlyBill);
        const stateValue = parseFloat(state);
        const categoryValue = parseInt(category);
        
        // Solar calculation logic
        const avgDailyConsumption = billAmount / 7; // Estimate daily consumption from monthly bill
        const sunshineHours = stateValue; // Using the state value as approximate sunshine hours
        const systemEfficiency = categoryValue === 2 ? 0.75 : 0.85; // Higher efficiency for commercial
        
        const suggestedCapacity = (avgDailyConsumption / (sunshineHours * systemEfficiency)).toFixed(2);
        
        // Monthly electricity generation in kWh (30 days)
        const monthlySavingKwh = (suggestedCapacity * sunshineHours * 30 * systemEfficiency).toFixed(2);
        
        // Average electricity rate in INR per kWh (varies by state and category)
        const electricityRate = categoryValue === 2 ? 8 : 10;
        const monthlySavingRs = (monthlySavingKwh * electricityRate).toFixed(2);
        
        // Required space (approx 100 sq ft per kW for rooftop solar)
        const requiredSpace = (suggestedCapacity * 100).toFixed(2);
        
        // CO2 emissions reduction (approx 0.7 tons per kW per year)
        const co2Reduction = (suggestedCapacity * 0.7).toFixed(2);
        
        // Update results
        document.getElementById('suggestedCapacity').textContent = suggestedCapacity + ' kW';
        document.getElementById('monthlySavingKwh').textContent = monthlySavingKwh + ' kWh';
        document.getElementById('suggestedCapacity').textContent = suggestedCapacity + ' kW';
        document.getElementById('monthlySavingKwh').textContent = monthlySavingKwh + ' kWh';
        document.getElementById('monthlySavingRs').textContent = '₹' + Number(monthlySavingRs).toLocaleString('en-IN');
        document.getElementById('requiredSpace').textContent = requiredSpace + ' sq.ft';
        document.getElementById('co2Reduction').textContent = co2Reduction + ' Ton CO₂ Reduction Per Year';
        
        // Show results section
        panelResultsSection.classList.add('active');
        
        // Scroll to results
        panelResultsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Calculator Script Ends 