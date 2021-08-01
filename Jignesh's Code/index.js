let firstname = "Jignesh"
let lastname = "Jagad"

let person = {
    firstname:firstname,    //{} this object call:- objectlitral
    lastname:lastname
};

console.log(person.firstname)
console.log(person.lastname)

class Person{
    greet(){}
}

let p = new Person();

console.log(p.greet === Person.prototype.greet);


console.log(document.COMMENT_NODE);
console.log(document.location);
console.log(document.timeline);

sum = (a, b) => {
    return a + b;
}

logKaro = () => {
    console.log("Hello world");
}

var timeout = setTimeout(logKaro, 2000);
var clr = setInterval(logKaro, 2000);

clearInterVal = () => {
    clearInterval(clr);
}

setTimeout(clearInterVal,10000);


let displayColors = function(message,...colors){

    console.log(message);
    console.log(colors);
    console.log(arguments.length);

    for(let i in colors){
        console.log(colors[i]);
    }

}

let message = "List of Colors";

displayColors(message, 'Red');
displayColors(message, 'Red','Blue');
displayColors(message, 'Red','Blue','Green');

let check = "Check main branch code push"

















//Challenge 1
console.log("----------------->Challange 1<-----------------")

//------>Task 1<------- Store Mark's and John data in variable

var markMass1 = 78
var markHeight1 = 1.69

var johnMass1 = 92
var johnHeight1 = 1.92

var markMass2 = 95
var markHeight2 = 1.88

var johnMass2 = 85
var johnHeight2 = 1.76

console.log("------>First Data<-------")

console.log("------>Task 2<-------")
//calculate bmi using both formula
var markBMICalculationFirstFormula = bmiCalculationFirstFormula(markMass1,markHeight1)
console.log("mark BMI thorw first formula",markBMICalculationFirstFormula.toFixed(2));

var markBMICalculationSecondFormula = bmiCalculationSecondFormula(markMass1,markHeight1)
console.log("mark BMI thorw second formula",markBMICalculationSecondFormula.toFixed(2));

var johnBMICalculationFirstFormula = bmiCalculationFirstFormula(johnMass1,johnHeight1)
console.log("mark BMI thorw first formula",johnBMICalculationFirstFormula.toFixed(2));

var johnBMICalculationSecondFormula = bmiCalculationSecondFormula(johnMass1,johnHeight1)
console.log("mark BMI thorw second formula",johnBMICalculationSecondFormula.toFixed(2));

function bmiCalculationFirstFormula(mass, height){
  return mass / (height * height)
}

function bmiCalculationSecondFormula(mass, height){
  return mass / (height ** 2)
}

console.log("------>Second Data<-------")

var markBMI = bmiCalculationFirstFormula(markMass2,markHeight2)
var johnBMI = bmiCalculationFirstFormula(johnMass2,johnHeight2)

console.log("mark BMI",markBMI.toFixed(2))
console.log("john BMI",johnBMI.toFixed(2))
//------>Task 3<-------
console.log("------>Task 3<-------")
var markHigherBMI = checkHigherBMI(markBMICalculationFirstFormula,johnBMICalculationFirstFormula)

console.log("Check First data according mark bmi is higher than john:",markHigherBMI)

markHigherBMI = checkHigherBMI(markBMI,johnBMI)

console.log("Check Second data according mark bmi is higher than john:",markHigherBMI)

function checkHigherBMI(markBMI,johnBMI){
  if (markBMI > johnBMI) {
    return true
  } else {
    return false
  }
}

//Challenge 2
console.log("----------------->Challange 2<-----------------")

console.log("------------->Task 1<------------")

console.log("According first data result is below:")
checkHigherBMIwithMessage(markBMICalculationFirstFormula,johnBMICalculationFirstFormula)
console.log("According second data result is below:")
checkHigherBMIwithMessage(markBMI,johnBMI)

function checkHigherBMIwithMessage(markBMI,johnBMI){
  if(markBMI > johnBMI){
    console.log("Mark's BMI is higher than John's!")
  } else {
    console.log("John's BMI is higher than Mark's!")
  }
}

console.log("------------->Task 2<------------")
console.log("According first data result is below:")
checkHigherBMIValuewithMessage(markBMICalculationFirstFormula,johnBMICalculationFirstFormula)
console.log("According second data result is below:")
checkHigherBMIValuewithMessage(markBMI,johnBMI)

function checkHigherBMIValuewithMessage(markBMI,johnBMI){
  if(markBMI > johnBMI){
    console.log(`Mark's BMI(${markBMI.toFixed(1)}) is higher than John's(${johnBMI.toFixed(1)})!`)
  } else {
    console.log(`John's BMI(${johnBMI.toFixed(1)}) is higher than Mark's(${markBMI.toFixed(1)})!`)
  }
}



