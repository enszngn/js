//variables
//they cannot be a reserved keyword just like in c
//should be meaningful (so everyone understands what it is duh)
//cannot start with a number
//connot contain a space or hyphen(-)

const interestRate = 0.3;
//interestRate = 1; we can't change constant variables because they are constant
console.log(interestRate);

let age = 19; //number literal
let isApproved = true; //boolean literal
let isimsel = null; //if we want it to be empty all the time. type of this variable is an 'object'. i dno what is an object bc c doesn't have them.
let soyadsal = undefined; //if we're going to fill it with a input. undefined is not only its value, but also its type. which is kind of strange

//in js variables types can be changeed. hich is called 'Dynamic' 
//name = 123; //now it is a number

//console.log(name);
//also in js there no thing called float and int it is all called as 'number'
//which is easier honestly

let person = {
    name: 'Enes',
    Name: 'Zengin',
    age: 19
};

//dot notation
person.name = 'cakan';
person.Name = 'egil';
person.age = 123432;


console.log(person);
console.log(person.age);

//bracket notation  
person['name'] = 'apo';

console.log(person.name);

//pretty strange thing about this is even if i declared person.name as apo in the last part of my code
//on the previous console.log s it still says that person.name is apo so it reads it all before giving output
//i guess?

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[2]);
console.log(selectedColors.length); //not lenght, that is something different

//arrays are an object on js

//performing a task
function selamlama(isim, soyisim) {
    console.log('Selamlar ' + isim + ' ' + soyisim);
}

selamlama('Enes', 'Zengin');

//calculating a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(2))