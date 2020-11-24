function solve(name, age, weight, height) {

    let person = {};
    person.name = name;
    person.personalInfo = {
        age,
        weight,
        height,
    }
    person.BMI = calculateBMI(weight, height),
        person.status = checker(person.BMI)
    if (person.status == 'obese') {
        person.recommendation = 'admission required';
    }
    function calculateBMI(weight, height) {
        let bmi = weight / (height / 100) ** 2;
        return Math.round(bmi);
    }
    function checker(bmi) {
        if (bmi < 18.5) {
            return 'underweight'
        } else if (bmi < 25) {
            return 'normal'
        } else if (bmi < 30) {
            return 'overweight'
        } else {
            return 'obese';
        }
    }

    return person;

}
