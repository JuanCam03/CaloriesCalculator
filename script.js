document.getElementById("tdeeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get values from the form
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const weightLbs = parseFloat(document.getElementById("weight").value);  // Weight in pounds
  const heightFeet = parseInt(document.getElementById("heightFeet").value); // Feet
  const heightInches = parseInt(document.getElementById("heightInches").value); // Inches
  const activity = parseFloat(document.getElementById("activity").value);
  
  // Convert height from feet and inches to inches
  const heightInchesTotal = (heightFeet * 12) + heightInches; // Total height in inches
  
  // Convert height from inches to centimeters for calculation (1 inch = 2.54 cm)
  const heightCm = heightInchesTotal * 2.54;
  
  // Weight remains in pounds
  const weightKg = weightLbs / 2.20462; // Convert weight from pounds to kilograms
  
  // Calculate BMR (Basal Metabolic Rate) using weight in kg and height in cm
  let tmb;
  if (gender === "male") {
    tmb = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    tmb = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
  
  // Calculate TDEE (Total Daily Energy Expenditure)
  const tdee = tmb * activity;
  
  // Display the result
  document.getElementById("result").innerHTML = `Your TDEE is approximately <strong>${Math.round(tdee)} calories</strong> per day.`;
});