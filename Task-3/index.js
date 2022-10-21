// Name = Ubaid 
// Date = 29-Sep-2022
const personName = "Muhammad Ubaid";
const nameInLowerCase = personName.toLowerCase();
const nameInUpperCase = personName.toUpperCase();
// For Title Case:

// spliting words, and we are using lower case variable because a word can occur 
// caital letters. 
const nameInTitleCase = nameInLowerCase.split(' ');
for (var i = 0; i < nameInTitleCase.length; i++) {
    // Every word of first letter will be upper case and other will be concatenate.
    nameInTitleCase[i] = nameInTitleCase[i].charAt(0).toUpperCase() + nameInTitleCase[i].slice(1); 
}

console.log(`Name in lower case: ${nameInLowerCase}`);
console.log(`Name in upper case: ${nameInUpperCase}`);
console.log(`Name in title case: ${nameInTitleCase.join(' ')}`);
