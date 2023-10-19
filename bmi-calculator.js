function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / (height * height));
    return bmi;
}

var bmi = bmiCalculator(56, 1.5);
console.log(bmi);
