function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    const result = document.getElementById("result");


    let heightM = height / 100;
    let bmi = weight / (heightM * heightM);
    bmi = bmi.toFixed(2);

    let message = "";
    let color = "";
    let emoji = "";

    if (bmi < 16) {
        message = "severly Underweight 😟";
        color = "blue";}
    else if (bmi < 18.5) {
        message = "Underweight 🧍‍♀️";
        color = "pink";
        }
     else if (bmi < 24.9) {
        message = "Normal 💪";
        color = "dodgerblue";
    } else if (bmi < 29.9) {
        message = "Overweight 🍔";
        color = "orange";
    } else {
        message = "Obese ⚠️";
        color = "red";
    }

    result.innerHTML = `Your BMI is <strong>${bmi}</strong> - <span style="color:${color}; font-weight:bold;">${message}</span> `;
}
