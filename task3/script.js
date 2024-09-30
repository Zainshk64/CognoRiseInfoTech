document.getElementById("calculateBtn").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid weight and height!");
        return;
    }
    
    // Convert height from cm to meters
    const heightM = heightCm / 100;
    
    // Calculate BMI
    const bmi = (weight / (heightM * heightM)).toFixed(2);
    
    // Display BMI result
    document.getElementById("bmiResult").innerText = bmi;

    // Determine BMI category
    let bmiMessage = "";
    if (bmi < 18.5) {
        bmiMessage = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiMessage = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiMessage = "Overweight";
    } else {
        bmiMessage = "Obese";
    }

    // Display the BMI category message
    document.getElementById("bmiMessage").innerText = `You are in the ${bmiMessage} category.`;
});
