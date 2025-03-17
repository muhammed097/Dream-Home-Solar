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
window.onload = function () {
    switchCalculator('battery');
};

// Battery Calculator Functions
function resetUI() {
    // Get list of error and result element IDs
    var errorIds = ["energyConsumptionError", "batteryVoltageError", "batteryTypeError", "backupDaysError", "batteryCalculatorResults"];

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

// Modified calculate function to show the contact form before showing results
function calculate() {
    resetUI();

    if (checkForErrors())
        return false;

    // Perform all calculations but don't display results yet
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

    // Store calculation results in global variables to use after form submission
    window.calculationResults = {
        batterySizeAh: batterySizeAh,
        batterySizeWh: batterySizeWh,
        batterySizekWh: batterySizekWh,
        batteryType: batteryType,
        batteryVoltage: batteryVoltage,
        nominalBatteryVoltage: nominalBatteryVoltage,
        dailyEnergyWh: dailyEnergyWh,
        backupDays: backupDays
    };

    // Show the user info modal immediately instead of showing results
    showUserInfoModal();

    return false;
}

// Function to show the modal after calculation
function showUserInfoModal() {
    // Show the modal
    const modal = document.getElementById('userInfoModal');
    modal.classList.add('active');

    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeUserInfoModal() {
    const modal = document.getElementById('userInfoModal');
    modal.classList.remove('active');

    // Reset form
    document.getElementById('userInfoForm').reset();

    // Remove error classes
    document.getElementById('nameGroup').classList.remove('error');
    document.getElementById('phoneGroup').classList.remove('error');
    document.getElementById('placeGroup').classList.remove('error');
    document.getElementById('emailGroup').classList.remove('error');

    // Show form, hide success
    document.getElementById('modalFormContent').style.display = 'block';

    // Allow body scrolling
    document.body.style.overflow = 'auto';
}

// Function to validate form
function validateUserForm() {
    let isValid = true;

    // Validate name
    const name = document.getElementById('userName').value.trim();
    if (name === '') {
        document.getElementById('nameGroup').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('nameGroup').classList.remove('error');
    }

    // Validate phone (simple validation, adjust as needed)
    const phone = document.getElementById('userPhone').value.trim();
    if (phone === '' || !/^[0-9]{10,12}$/.test(phone.replace(/[\s-()]/g, ''))) {
        document.getElementById('phoneGroup').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('phoneGroup').classList.remove('error');
    }

    // Validate place
    const place = document.getElementById('userPlace').value.trim();
    if (place === '') {
        document.getElementById('placeGroup').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('placeGroup').classList.remove('error');
    }

    // Validate email
    const email = document.getElementById('userEmail').value.trim();
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailGroup').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('emailGroup').classList.remove('error');
    }

    return isValid;
}

// Function to submit form data
function submitUserInfo(event) {
    event.preventDefault();

    if (!validateUserForm()) {
        return;
    }

    // Get user input values
    const userData = {
        name: document.getElementById('userName').value.trim(),
        phone: document.getElementById('userPhone').value.trim(),
        place: document.getElementById('userPlace').value.trim(),
        email: document.getElementById('userEmail').value.trim(),
        date: new Date().toLocaleString()
    };

    // Send data to SheetDB
    sendToSheetDb(userData);

    // Close the modal
    closeUserInfoModal();

    // Now display the calculation results
    displayCalculationResults();
}

// Function to display the calculation results after form submission
function displayCalculationResults() {
    // Get the stored calculation results
    const results = window.calculationResults;

    if (!results) return; // Safety check

    const resultsDiv = document.getElementById("batteryCalculatorResults");
    let successResults = document.getElementById("successResults");
    let successResultsTitle = document.getElementById("successResultsTitle");
    let successNote = document.getElementById("successNote");

    successResultsTitle.innerHTML = 'Your ' + results.nominalBatteryVoltage + 'V ' +
        (results.batteryType === 'lithium' ? '(' + results.batteryVoltage + 'V) LiFePO4' : 'lead acid') +
        ' battery bank size:';

    successResults.innerHTML = '<strong>' + results.batterySizeAh + ' Ah</strong> ' +
        (results.batterySizeWh < 1000 ? '(' + results.batterySizeWh + ' Wh)' : '(' + results.batterySizekWh + ' kWh)');

    resultsDiv.style.display = "block";
    successResults.style.display = "block";
    successNote.style.display = "block";

    document.getElementById("batteryCalculatorResults").scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to send data to SheetDB
function sendToSheetDb(data) {
    // Replace with your SheetDB API URL
    const sheetDbUrl = 'https://sheetdb.io/api/v1/z1w3k0nnefkbc';

    // Format the data for SheetDB
    const sheetData = {
        data: {
            name: data.name,
            phone: data.phone,
            place: data.place,
            email: data.email,
            timestamp: data.date
        }
    };

    console.log("Sending data to SheetDB:", sheetData);

    // Send data to SheetDB
    fetch(sheetDbUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sheetData)
    })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error submitting form:', error));
}

// Initialize event listeners when document is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add modal close button event
    document.getElementById('modalClose').addEventListener('click', closeUserInfoModal);

    // Add form submit event
    document.getElementById('userInfoForm').addEventListener('submit', submitUserInfo);

    // Add click outside modal to close
    document.getElementById('userInfoModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeUserInfoModal();
        }
    });
});

// Solar system data table based on monthly electricity bill
const solarData = [
    { amount: 1000, capacity: 1, savings_kwh: 135, savings_inr: 783, req_sqf: 100, co2: 32 },
    { amount: 1500, capacity: 1.5, savings_kwh: 203, savings_inr: 1054, req_sqf: 150, co2: 48 },
    { amount: 2000, capacity: 2, savings_kwh: 270, savings_inr: 1135, req_sqf: 200, co2: 64 },
    { amount: 2500, capacity: 2.5, savings_kwh: 338, savings_inr: 1421, req_sqf: 250, co2: 80 },
    { amount: 3000, capacity: 3, savings_kwh: 405, savings_inr: 1703, req_sqf: 300, co2: 96 },
    { amount: 3500, capacity: 3.5, savings_kwh: 473, savings_inr: 1989, req_sqf: 350, co2: 112 },
    { amount: 4000, capacity: 4, savings_kwh: 540, savings_inr: 2271, req_sqf: 400, co2: 128 },
    { amount: 4500, capacity: 4.5, savings_kwh: 608, savings_inr: 2557, req_sqf: 450, co2: 144 },
    { amount: 5000, capacity: 5, savings_kwh: 675, savings_inr: 2838, req_sqf: 500, co2: 160 },
    { amount: 5500, capacity: 5.5, savings_kwh: 743, savings_inr: 3124, req_sqf: 550, co2: 176 },
    { amount: 6000, capacity: 6, savings_kwh: 810, savings_inr: 3406, req_sqf: 600, co2: 192 },
    { amount: 6500, capacity: 6.5, savings_kwh: 878, savings_inr: 3692, req_sqf: 650, co2: 208 },
    { amount: 7000, capacity: 7, savings_kwh: 945, savings_inr: 3974, req_sqf: 700, co2: 224 },
    { amount: 7500, capacity: 7.5, savings_kwh: 1013, savings_inr: 4260, req_sqf: 750, co2: 240 },
    { amount: 8000, capacity: 8, savings_kwh: 1080, savings_inr: 4541, req_sqf: 800, co2: 256 },
    { amount: 8500, capacity: 8.5, savings_kwh: 1148, savings_inr: 4827, req_sqf: 850, co2: 272 },
    { amount: 9000, capacity: 9, savings_kwh: 1215, savings_inr: 5109, req_sqf: 900, co2: 288 },
    { amount: 9500, capacity: 9.5, savings_kwh: 1283, savings_inr: 5395, req_sqf: 950, co2: 304 },
    { amount: 10000, capacity: 10, savings_kwh: 1350, savings_inr: 5677, req_sqf: 1000, co2: 320 },
    // Additional data ranges can be found in the original code
    { amount: 50000, capacity: 50, savings_kwh: 6750, savings_inr: 28384, req_sqf: 5000, co2: 1600 }
];

// Update the switchCalculator function in your script.js
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

// Add Solar Calculator Functions
function lookupSolarData(monthlyBill) {
    // Find exact match or closest lower value
    let result = null;
    let exactMatch = solarData.find(item => item.amount === monthlyBill);

    if (exactMatch) {
        result = exactMatch;
    } else {
        // Find values to interpolate between
        let lowerValue = null;
        let higherValue = null;

        for (let i = 0; i < solarData.length; i++) {
            if (solarData[i].amount < monthlyBill) {
                lowerValue = solarData[i];
            }
            if (solarData[i].amount > monthlyBill && !higherValue) {
                higherValue = solarData[i];
                break;
            }
        }

        // If monthly bill is higher than our highest value, use the highest value
        if (!higherValue && lowerValue) {
            result = lowerValue;
        }
        // If monthly bill is lower than our lowest value, use the lowest value
        else if (!lowerValue && higherValue) {
            result = higherValue;
        }
        // If we have both bounds, interpolate
        else if (lowerValue && higherValue) {
            const ratio = (monthlyBill - lowerValue.amount) / (higherValue.amount - lowerValue.amount);

            result = {
                amount: monthlyBill,
                capacity: interpolate(lowerValue.capacity, higherValue.capacity, ratio),
                savings_kwh: Math.round(interpolate(lowerValue.savings_kwh, higherValue.savings_kwh, ratio)),
                savings_inr: Math.round(interpolate(lowerValue.savings_inr, higherValue.savings_inr, ratio)),
                req_sqf: Math.round(interpolate(lowerValue.req_sqf, higherValue.req_sqf, ratio)),
                co2: Math.round(interpolate(lowerValue.co2, higherValue.co2, ratio))
            };
        }
    }

    if (result) {
        displayResults(result);
    } else {
        // If no result found, use minimum values
        displayResults(solarData[0]);
    }
}

// Helper function to interpolate between two values
function interpolate(val1, val2, ratio) {
    return val1 + (val2 - val1) * ratio;
}

// Display the results in the UI
function displayResults(data) {
    document.getElementById('suggestedCapacity').textContent = data.capacity;
    document.getElementById('monthlySavingKwh').textContent = data.savings_kwh;
    document.getElementById('monthlySavingInr').textContent = '₹' + data.savings_inr.toLocaleString('en-IN');
    document.getElementById('requiredSpace').textContent = data.req_sqf;
    document.getElementById('co2Reduction').innerHTML = data.co2 + ' <span class="result-unit">Ton</span>';

    // Show results section
    document.getElementById('calculatorResults').style.display = 'block';

    // Scroll to results
    document.getElementById('calculatorResults').scrollIntoView({
        behavior: 'smooth'
    });
}

// Function for the CTA button
function requestQuote() {
    alert("Thank you for your interest! Our team will contact you shortly for a free consultation.");
}

// Initialize event listeners when document is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the energy calculator
    switchCalculator('battery');

    // Add validation to ensure minimum amount of ₹1000
    const monthlyBillInput = document.getElementById('monthlyBill');
    if (monthlyBillInput) {
        monthlyBillInput.addEventListener('input', function () {
            let value = this.value.replace(/[^0-9]/g, '');
            this.value = value;
        });
    }

    // Add form submit event for the solar calculator
    const solarCalculatorForm = document.getElementById('solarCalculatorForm');
    if (solarCalculatorForm) {
        solarCalculatorForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Reset error messages
            document.querySelectorAll('.calculator-input-error').forEach(el => {
                el.style.display = 'none';
            });

            // Get form values
            const state = document.getElementById('state').value;
            const category = document.getElementById('category').value;
            const monthlyBill = parseFloat(document.getElementById('monthlyBill').value);

            // Validate inputs
            let hasError = false;

            if (!state) {
                document.getElementById('stateError').style.display = 'block';
                hasError = true;
            }

            if (!category) {
                document.getElementById('categoryError').style.display = 'block';
                hasError = true;
            }

            // Check if the monthly bill is entered and is at least 1000
            if (!monthlyBill || isNaN(monthlyBill) || monthlyBill < 1000) {
                document.getElementById('monthlyBillError').style.display = 'block';
                document.getElementById('monthlyBillError').innerHTML = '<strong>Error:</strong> Amount must be at least ₹1000.';
                hasError = true;
            }

            if (hasError) {
                return;
            }

            // Proceed with calculation if no errors
            lookupSolarData(monthlyBill);

            // Perform lookup in data table
            lookupSolarData(monthlyBill);
        });
    }
});

// Add this function to your script.js file

function backToCalculator() {
    // Hide results section
    document.getElementById('calculatorResults').style.display = 'none';
    
    // Scroll back to the calculator form
    document.getElementById('solarCalculatorForm').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Optionally reset the form
    // document.getElementById('solarCalculatorForm').reset();
}