// Name = Ubaid 
// Date = 30-Sep-2022

let personName = 'ubaid';
console.log("Is ubaid have 'a' on index 2? I predict True.");
console.log(personName.charAt(2) == 'a');

console.log("Is ubaid length != 5? I predict False.");
console.log(personName.length != 5);

let car = "Nissan Dayz";
console.log("all the letters of Nissan dayz will small ? I predict True.");
console.log(car.toLowerCase() == "nissan dayz");

let city = "KaRachi";
console.log("The R charater is in lower case ? I predict True.");
console.log(city.charAt(2).toLowerCase() == 'r');

let number1 = 5;
console.log("Is number1 value == 5 ? I predict True.");
console.log(number1 == 5);

let number2 = 3;
console.log("Is number2 value == 3 ? I predict True.");
console.log(number2 == 3);

let addition = number1 + number2;
console.log("Is addition of number1 and number2 == 8 ? I predict True.");
console.log(addition == 8);

let number3 = addition;
console.log("Is number3 value < number1 value ? I predict False.");
console.log(number3 < number1);

console.log("Is number1 value > number2 value ? I predict True.");
console.log(number1 > number2);

let subtraction = number1 - number2;
console.log("Is subtraction of number1 and number2 == 2 ? I predict True.");
console.log(subtraction >= 2);

console.log("Is subtraction value less than or equal to -10? I predict False.");
console.log(subtraction <= -10);

console.log("Person Name == ubaid and city == karachi? I predict True.");
console.log(personName == "ubaid" && city.toLowerCase() == "karachi");

let age = 16;
console.log("Person Name == ubaid and age >= 18? I predict True.");
console.log(personName == "ubaid" || age >= 18);

let arr = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
let isItemFound = arr.filter((value)=> value == "Lahore");
console.log("Is index 1 have value == 'Lahore' ? I predict True");
console.log(isItemFound == "Lahore");

let isItemNotFound = arr.filter((value)=> value == "India");
console.log("Array have not value'India' ? I predict True");
console.log(isItemNotFound != "India");