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