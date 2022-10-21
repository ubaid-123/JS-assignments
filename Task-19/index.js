// Name = Ubaid 
// Date = 29-Sep-2022

const names = ["ubaid", "zaid", "ali", "ibrahim", "qadir"];
names.map((name)=> console.log(`${name}, I would like to invite you in dinner`));

console.log(`\nSorry, ${names[2]} can't make it to dinner.\n`);

names[2] = "abbas";

names.map((name)=> console.log(`${name}, I would like to invite you in dinner`));

// Number of guests:
console.log(`\nThe number of invited people in dinner: ${names.length}`);