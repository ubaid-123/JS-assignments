// Name = Ubaid 
// Date = 29-Sep-2022

const favPlaces = ["Dubai", "Australia", "Zimbabwe", "Germany", "Turkey"];
console.log("Original order: " +favPlaces);

const alphabeticalOrder = favPlaces.slice();

console.log("\nAlphabetical order: "+ alphabeticalOrder.sort());
console.log("\nOriginal order: "+ favPlaces);

let reversedArr = [];
alphabeticalOrder.map(place => reversedArr.push(reverseString(place)))

console.log("\nReverse Alphabetical order: "+reversedArr);
console.log("\nOriginal order: " +favPlaces);

const reversedArr1 = favPlaces.slice();
console.log("\nReversed: "+reversedArr1.reverse());
console.log("\nOriginal order: " +favPlaces);

console.log("\nAlphabetical order: "+ favPlaces.sort());
console.log("\nReverse Alphabetical order: "+ favPlaces.reverse());

function reverseString(str) {
    return str.split("").reverse().join("");
}


