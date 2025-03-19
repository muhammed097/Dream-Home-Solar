const solarData = [
    { amount: 1000, capacity: 1, savings_kwh: 135, savings_inr: 783, req_sqf: 100, co2: 32 },
    { amount: 1500, capacity: 2, savings_kwh: 270, savings_inr: 1566, req_sqf: 200, co2: 65 },
    { amount: 2000, capacity: 3, savings_kwh: 405, savings_inr: 2349, req_sqf: 300, co2: 98 },
    { amount: 2500, capacity: 3, savings_kwh: 405, savings_inr: 2349, req_sqf: 300, co2: 98 },
    { amount: 3000, capacity: 4, savings_kwh: 540, savings_inr: 3132, req_sqf: 400, co2: 131 },
    { amount: 3500, capacity: 4, savings_kwh: 540, savings_inr: 3132, req_sqf: 400, co2: 131 },
    { amount: 4000, capacity: 5, savings_kwh: 675, savings_inr: 3915, req_sqf: 500, co2: 164 },
    { amount: 4500, capacity: 6, savings_kwh: 810, savings_inr: 4698, req_sqf: 600, co2: 197 },
    { amount: 5000, capacity: 6, savings_kwh: 810, savings_inr: 4698, req_sqf: 600, co2: 197 },
    { amount: 5500, capacity: 7, savings_kwh: 945, savings_inr: 5481, req_sqf: 700, co2: 230 },
    { amount: 6000, capacity: 8, savings_kwh: 1080, savings_inr: 6264, req_sqf: 800, co2: 263 },
    { amount: 6500, capacity: 8, savings_kwh: 1080, savings_inr: 6264, req_sqf: 800, co2: 263 },
    { amount: 7000, capacity: 9, savings_kwh: 1285, savings_inr: 7047, req_sqf: 900, co2: 296 },
    { amount: 7500, capacity: 10, savings_kwh: 1350, savings_inr: 7830, req_sqf: 1000, co2: 329 },
    { amount: 8000, capacity: 10, savings_kwh: 1350, savings_inr: 7830, req_sqf: 1000, co2: 329 },
    { amount: 8500, capacity: 11, savings_kwh: 1455, savings_inr: 8613, req_sqf: 1100, co2: 362 },
    { amount: 9000, capacity: 11, savings_kwh: 1455, savings_inr: 8613, req_sqf: 1100, co2: 362 },
    { amount: 9500, capacity: 12, savings_kwh: 1620, savings_inr: 9396, req_sqf: 1200, co2: 395 },
    { amount: 10000, capacity: 13, savings_kwh: 1755, savings_inr: 10179, req_sqf: 1300, co2: 428 },
    { amount: 11000, capacity: 14, savings_kwh: 1890, savings_inr: 10962, req_sqf: 1400, co2: 461 },
    { amount: 12000, capacity: 15, savings_kwh: 2025, savings_inr: 11745, req_sqf: 1500, co2: 494 },
    { amount: 13000, capacity: 17, savings_kwh: 2295, savings_inr: 13311, req_sqf: 1700, co2: 560 },
    { amount: 14000, capacity: 18, savings_kwh: 2430, savings_inr: 14094, req_sqf: 1800, co2: 593 },
    { amount: 15000, capacity: 19, savings_kwh: 2565, savings_inr: 14877, req_sqf: 1900, co2: 626 },
    { amount: 16000, capacity: 20, savings_kwh: 2700, savings_inr: 15660, req_sqf: 2000, co2: 659 },
    { amount: 17000, capacity: 22, savings_kwh: 2970, savings_inr: 17226, req_sqf: 2200, co2: 725 },
    { amount: 18000, capacity: 23, savings_kwh: 3105, savings_inr: 18009, req_sqf: 2300, co2: 758 },
    { amount: 19000, capacity: 24, savings_kwh: 3240, savings_inr: 18792, req_sqf: 2400, co2: 791 },
    { amount: 20000, capacity: 26, savings_kwh: 3510, savings_inr: 20358, req_sqf: 2600, co2: 857 },
    { amount: 21000, capacity: 27, savings_kwh: 3645, savings_inr: 21141, req_sqf: 2700, co2: 890 },
    { amount: 22000, capacity: 28, savings_kwh: 3780, savings_inr: 21924, req_sqf: 2800, co2: 923 },
    { amount: 23000, capacity: 29, savings_kwh: 3915, savings_inr: 22707, req_sqf: 2900, co2: 956 },
    { amount: 24000, capacity: 31, savings_kwh: 4185, savings_inr: 24273, req_sqf: 3100, co2: 1022 },
    { amount: 25000, capacity: 32, savings_kwh: 4320, savings_inr: 25056, req_sqf: 3200, co2: 1055 },
    { amount: 26000, capacity: 33, savings_kwh: 4455, savings_inr: 25839, req_sqf: 3300, co2: 1088 },
    { amount: 27000, capacity: 34, savings_kwh: 4590, savings_inr: 26122, req_sqf: 3400, co2: 1121 },
    { amount: 28000, capacity: 36, savings_kwh: 4860, savings_inr: 28188, req_sqf: 3600, co2: 1187 },
    { amount: 29000, capacity: 37, savings_kwh: 4995, savings_inr: 28971, req_sqf: 3700, co2: 1220 },
    { amount: 30000, capacity: 38, savings_kwh: 5130, savings_inr: 29754, req_sqf: 3800, co2: 1253 },
    { amount: 31000, capacity: 40, savings_kwh: 5400, savings_inr: 31320, req_sqf: 4000, co2: 1318 },
    { amount: 32000, capacity: 41, savings_kwh: 5535, savings_inr: 32103, req_sqf: 4100, co2: 1351 },
    { amount: 33000, capacity: 42, savings_kwh: 5670, savings_inr: 32886, req_sqf: 4200, co2: 1384 },
    { amount: 34000, capacity: 43, savings_kwh: 5805, savings_inr: 33669, req_sqf: 4300, co2: 1417 },
    { amount: 35000, capacity: 45, savings_kwh: 6075, savings_inr: 35235, req_sqf: 4500, co2: 1483 },
    { amount: 36000, capacity: 46, savings_kwh: 6210, savings_inr: 36018, req_sqf: 4600, co2: 1516 },
    { amount: 37000, capacity: 47, savings_kwh: 6345, savings_inr: 36801, req_sqf: 4700, co2: 1549 },
    { amount: 38000, capacity: 49, savings_kwh: 6615, savings_inr: 38369, req_sqf: 4900, co2: 1615 },
    { amount: 39000, capacity: 50, savings_kwh: 6750, savings_inr: 39150, req_sqf: 5000, co2: 1648 },
    { amount: 40000, capacity: 51, savings_kwh: 6885, savings_inr: 39933, req_sqf: 5100, co2: 1681 },
    { amount: 41000, capacity: 52, savings_kwh: 7020, savings_inr: 40716, req_sqf: 5200, co2: 1714 },
    { amount: 42000, capacity: 54, savings_kwh: 7290, savings_inr: 42282, req_sqf: 5400, co2: 1780 },
    { amount: 43000, capacity: 55, savings_kwh: 7425, savings_inr: 43065, req_sqf: 5500, co2: 1813 },
    { amount: 44000, capacity: 56, savings_kwh: 7560, savings_inr: 43848, req_sqf: 5600, co2: 1846 },
    { amount: 45000, capacity: 57, savings_kwh: 7695, savings_inr: 44631, req_sqf: 5700, co2: 1879 },
    { amount: 46000, capacity: 59, savings_kwh: 7965, savings_inr: 46190, req_sqf: 5900, co2: 1945 },
    { amount: 47000, capacity: 60, savings_kwh: 8100, savings_inr: 46980, req_sqf: 6000, co2: 1978 },
    { amount: 48000, capacity: 61, savings_kwh: 8235, savings_inr: 47763, req_sqf: 6100, co2: 2011 },
    { amount: 49000, capacity: 63, savings_kwh: 8505, savings_inr: 49329, req_sqf: 6300, co2: 2077 },
    { amount: 50000, capacity: 64, savings_kwh: 8640, savings_inr: 50112, req_sqf: 6400, co2: 2110 }
  ];
  
  const el = (id) => document.getElementById(id);
  const qsa = (selector) => document.querySelectorAll(selector);
  
  // Update the switchCalculator function in your script.js
  function switchCalculator(calculatorType) {
    el('batteryCard').classList.toggle('active', calculatorType === 'battery');
    el('energyCard').classList.toggle('active', calculatorType !== 'battery');
    el('batteryCalculator').style.display = calculatorType === 'battery' ? 'block' : 'none';
    el('energyCalculator').style.display = calculatorType === 'battery' ? 'none' : 'block';
  }

  function lookupSolarData(monthlyBill) {
    let lowerValue = null;
    let higherValue = null;
  
    for (const item of solarData) {
      if (item.amount === monthlyBill) {
        displayResults(item);
        return; // Exact match found, exit early
      }
  
      if (item.amount < monthlyBill) {
        lowerValue = item;
      } else if (!higherValue) {
        higherValue = item;
      }
    }
  
    let result;
    if (!higherValue && lowerValue) {
      result = lowerValue;
    } else if (!lowerValue && higherValue) {
      result = higherValue;
    } else if (lowerValue && higherValue) {
      const ratio = (monthlyBill - lowerValue.amount) / (higherValue.amount - lowerValue.amount);
  
      result = {
        amount: monthlyBill,
        capacity: interpolate(lowerValue.capacity, higherValue.capacity, ratio),
        savings_kwh: Math.round(interpolate(lowerValue.savings_kwh, higherValue.savings_kwh, ratio)),
        savings_inr: Math.round(interpolate(lowerValue.savings_inr, higherValue.savings_inr, ratio)),
        req_sqf: Math.round(interpolate(lowerValue.req_sqf, higherValue.req_sqf, ratio)),
        co2: Math.round(interpolate(lowerValue.co2, higherValue.co2, ratio))
      };
    } else {
      result = solarData[0]; // Use minimum values if no suitable match
    }
  
    displayResults(result);
  }
  
  const interpolate = (val1, val2, ratio) => val1 + (val2 - val1) * ratio;
  
  function displayResults(data) {
    el('suggestedCapacity').textContent = data.capacity;
    el('monthlySavingKwh').textContent = data.savings_kwh;
    el('monthlySavingInr').textContent = `₹${data.savings_inr.toLocaleString('en-IN')}`;
    el('requiredSpace').textContent = data.req_sqf;
    el('co2Reduction').innerHTML = `${data.co2} <span class="result-unit">Ton</span>`;
  
    el('calculatorResults').style.display = 'block';
    el('calculatorResults').scrollIntoView({ behavior: 'smooth' });
  }
  
  const requestQuote = () => alert("Thank you for your interest! Our team will contact you shortly for a free consultation.");
  
  function backToCalculator() {
    el('calculatorResults').style.display = 'none';
    el('solarCalculatorForm').scrollIntoView({ behavior: 'smooth' });
    // Optionally, reset the form: el('solarCalculatorForm').reset();
  }

  // Function to open the modal
  function openContactModal() {
    el('contactModal').style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    el('overLimitModal').style.display = 'none';
  }

  // Function to handle modal form submission (replace with your logic)
  function handleContactSubmit() {
    // Get form values (replace with your actual form fields)
    const fullName = el('fullName').value;
    const phoneNumber = el('phoneNumber').value;
    const location = el('location').value;
    const email = el('email').value;

    // Basic validation (add more sophisticated validation as needed)
    if (!fullName || !phoneNumber || !location || !email) {
      alert("Please fill in all fields.");
      return;
    }

    // Here, you'd typically send the data to a server using AJAX or fetch
    // For this example, we'll just log the values to the console
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Location:", location);
    console.log("Email:", email);

    // For now, let's just close the modal and show an alert
    closeContactModal();
    alert("Thank you! We'll be in touch soon.");
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    switchCalculator('battery');
  
    const monthlyBillInput = el('monthlyBill');
    monthlyBillInput?.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  
    const solarCalculatorForm = el('solarCalculatorForm');
    solarCalculatorForm?.addEventListener('submit', (event) => {
      event.preventDefault();
  
      qsa('.calculator-input-error').forEach(el => el.style.display = 'none');
  
      const state = el('state').value;
      const category = el('category').value;
      const monthlyBill = parseFloat(el('monthlyBill').value);
  
      let hasError = false;
  
      if (!state) {
        el('stateError').style.display = 'block';
        hasError = true;
      }
  
      if (!category) {
        el('categoryError').style.display = 'block';
        hasError = true;
      }
  
      if (!monthlyBill || isNaN(monthlyBill) || monthlyBill < 1000) {
        const monthlyBillError = el('monthlyBillError');
        monthlyBillError.style.display = 'block';
        monthlyBillError.innerHTML = '<strong>Error:</strong> Amount must be at least ₹1000.';
        hasError = true;
      }

        if (monthlyBill > 50000) {
            hasError = true;
            el('overLimitModal').style.display = 'block'; // Show the modal
            return;
        }
  
      if (hasError) return;
  
      lookupSolarData(monthlyBill);
    });
  });

  $(document).ready(function() {
    // Add jQuery CDN if not already included
    if (typeof jQuery === 'undefined') {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
      document.head.appendChild(script);
    }
    
    // Store calculated results for later use
    let energyCalculationResults = {};
    
    // Override the form submission with jQuery handler
    $("#solarCalculatorForm").on("submit", function(event) {
      event.preventDefault();
      
      // First, make sure to hide the results section if it's visible from previous calculations
      $("#calculatorResults").hide();
      
      // Hide any previous errors
      $(".calculator-input-error").hide();
      
      // Get values from form
      const state = $("#state").val();
      const category = $("#category").val();
      const monthlyBill = parseFloat($("#monthlyBill").val());
      
      let hasError = false;
      
      // Validate inputs
      if (!state) {
        $("#stateError").show();
        hasError = true;
      }
      
      if (!category) {
        $("#categoryError").show();
        hasError = true;
      }
      
      if (!monthlyBill || isNaN(monthlyBill) || monthlyBill < 1000) {
        const monthlyBillError = $("#monthlyBillError");
        monthlyBillError.show();
        monthlyBillError.html('<strong>Error:</strong> Amount must be at least ₹1000.');
        hasError = true;
      }
      
      if (monthlyBill > 50000) {
        $("#overLimitModal").show();
        return;
      }
      
      if (hasError) return;
      
      // Process the calculation but store results instead of displaying
      let result = null;
      
      // Find the appropriate data from solarData
      for (const item of solarData) {
        if (item.amount === monthlyBill) {
          result = item;
          break;
        }
      }
      
      // If exact match not found, find closest values and interpolate
      if (!result) {
        let lowerValue = null;
        let higherValue = null;
        
        for (const item of solarData) {
          if (item.amount < monthlyBill) {
            lowerValue = item;
          } else if (!higherValue) {
            higherValue = item;
            break;
          }
        }
        
        if (!higherValue && lowerValue) {
          result = lowerValue;
        } else if (!lowerValue && higherValue) {
          result = higherValue;
        } else if (lowerValue && higherValue) {
          const ratio = (monthlyBill - lowerValue.amount) / (higherValue.amount - lowerValue.amount);
          
          result = {
            amount: monthlyBill,
            capacity: interpolate(lowerValue.capacity, higherValue.capacity, ratio),
            savings_kwh: Math.round(interpolate(lowerValue.savings_kwh, higherValue.savings_kwh, ratio)),
            savings_inr: Math.round(interpolate(lowerValue.savings_inr, higherValue.savings_inr, ratio)),
            req_sqf: Math.round(interpolate(lowerValue.req_sqf, higherValue.req_sqf, ratio)),
            co2: Math.round(interpolate(lowerValue.co2, higherValue.co2, ratio))
          };
        } else {
          result = solarData[0]; // Use minimum values if no suitable match
        }
      }
      
      // Store calculation results
      energyCalculationResults = result;
      
      // Show the jQuery modal instead of results
      showJQueryEnergyModal();
    });
    
    // Helper function for interpolation
    function interpolate(val1, val2, ratio) {
      return val1 + (val2 - val1) * ratio;
    }
    
    // Function to show the jQuery modal
    function showJQueryEnergyModal() {
      $("#jqEnrUserInfoModal").addClass("active");
      $("body").css("overflow", "hidden");
    }
    
    // Function to close the jQuery modal
    function closeJQueryEnergyModal() {
      $("#jqEnrUserInfoModal").removeClass("active");
      $("#jqEnrUserInfoForm")[0].reset();
      
      // Remove error classes
      $(".jq-energy-form-group").removeClass("error");
      
      // Allow body scrolling
      $("body").css("overflow", "auto");
    }
    
    // Validate jQuery form
    function validateJQueryEnergyForm() {
      let isValid = true;
      
      // Validate name
      const name = $("#jqEnrUserName").val().trim();
      if (name === '') {
        $("#jqEnrNameGroup").addClass("error");
        isValid = false;
      } else {
        $("#jqEnrNameGroup").removeClass("error");
      }
      
      // Validate phone
      const phone = $("#jqEnrUserPhone").val().trim();
      if (phone === '' || !/^[0-9]{10,12}$/.test(phone.replace(/[\s-()]/g, ''))) {
        $("#jqEnrPhoneGroup").addClass("error");
        isValid = false;
      } else {
        $("#jqEnrPhoneGroup").removeClass("error");
      }
      
      // Validate place
      const place = $("#jqEnrUserPlace").val().trim();
      if (place === '') {
        $("#jqEnrPlaceGroup").addClass("error");
        isValid = false;
      } else {
        $("#jqEnrPlaceGroup").removeClass("error");
      }
      
      // Validate email
      const email = $("#jqEnrUserEmail").val().trim();
      if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        $("#jqEnrEmailGroup").addClass("error");
        isValid = false;
      } else {
        $("#jqEnrEmailGroup").removeClass("error");
      }
      
      return isValid;
    }
    
    // Handle form submission
    $("#jqEnrUserInfoForm").on("submit", function(event) {
      event.preventDefault();
      
      if (!validateJQueryEnergyForm()) {
        return;
      }
      
      // Get user input values
      const userData = {
        name: $("#jqEnrUserName").val().trim(),
        phone: $("#jqEnrUserPhone").val().trim(),
        place: $("#jqEnrUserPlace").val().trim(),
        email: $("#jqEnrUserEmail").val().trim(),
        date: new Date().toLocaleString(),
        // Add source information
        source: $("#jqEnrUserSource").val(),
        // Add energy calculation metadata
        monthlyBill: $("#monthlyBill").val(),
        state: $("#state option:selected").text(),
        category: $("#category option:selected").text()
      };
      
      // Send data to SheetDB
      sendEnergyFormToSheetDb(userData);
      
      // Close the modal
      closeJQueryEnergyModal();
      
      // Now display the energy calculation results
      displayEnergyCalculationResults();
    });
    
    // Function to send data to SheetDB
    function sendEnergyFormToSheetDb(data) {
      // Replace with your SheetDB API URL for energy calculator
      const sheetDbUrl = 'https://sheetdb.io/api/v1/z1w3k0nnefkbc';
      
      // Format the data for SheetDB
      const sheetData = {
        data: {
          Name: data.name,
          Phone: data.phone,
          Place: data.place,
          Email: data.email,
          Timestamp: data.date,
          Source: data.source, // Include the source field
          monthly_bill: data.monthlyBill,
          state: data.state,
          category: data.category,
          capacity: energyCalculationResults.capacity,
          savings_kwh: energyCalculationResults.savings_kwh,
          savings_inr: energyCalculationResults.savings_inr
        }
      };
      
      console.log("Sending energy calculation data to SheetDB:", sheetData);
      
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
    
    // Function to display energy calculation results
    function displayEnergyCalculationResults() {
      const data = energyCalculationResults;
      
      if (!data) return; // Safety check
      
      // Update all the result values
      $("#suggestedCapacity").text(data.capacity);
      $("#monthlySavingKwh").text(data.savings_kwh);
      $("#monthlySavingInr").text(`₹${data.savings_inr.toLocaleString('en-IN')}`);
      $("#requiredSpace").text(data.req_sqf);
      $("#co2Reduction").html(`${data.co2} <span class="result-unit">Ton</span>`);
      
      // Now show the results section
      $("#calculatorResults").show();
      
      // Scroll to the results section
      $("#calculatorResults")[0].scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close modal events
    $("#jqEnrModalClose").on("click", closeJQueryEnergyModal);
    
    // Click outside to close
    $("#jqEnrUserInfoModal").on("click", function(e) {
      if (e.target === this) {
        closeJQueryEnergyModal();
      }
    });
  });