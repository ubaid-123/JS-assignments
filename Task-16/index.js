// Name = Ubaid 
// Date = 29-Sep-2022

var names = ["ubaid", "zaid", "ali", "ibrahim", "qadir"];
names.map((name)=> console.log(`${name}, I would like to invite you in dinner`));

console.log(`\nSorry, ${names[2]} can't make it to dinner.\n`);

names[2] = "abbas";

names.map((name)=> console.log(`${name}, I would like to invite you in dinner`));

/**
 *  calculating middle value
 *  parseInt will neglect the decimal values => 2.5 will be 2 
*/
const middleValue = parseInt(names.length/2);
for(var i = 0; i < names.length; i++){
    // add an element at the start position
    if(i == 0){
        names[i+1] = names[i];
        names[0] = "shabbir";
    }
    // add an element at the middle 
    else if(i == middleValue){
        names[i+1] = names[i];
        names[middleValue] = "usama";
    }
}
// add an element at the end of the array
names.push("khalid");

// After adding more guests:
console.log("\nAfter adding new guests");
names.map((name)=> console.log(`${name}, I would like to invite you in dinner`));

