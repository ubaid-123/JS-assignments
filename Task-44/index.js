// Name = Ubaid 
// Date = 10-Oct-2022

function makeSandwich(ingredients){
    console.log('Lets start: ')
    for(i=0; i< ingredients.length; i++)
        console.log(`${ingredients[i]} added`);
}

let sandwich1 = ["ketchup", "chicken", "tomato"];
let sandwich2 = ["butter", "jam"];
let sandwich3 = ["lettuce", "bacoin", "mayonnaise"];

makeSandwich(sandwich1);
makeSandwich(sandwich2);
makeSandwich(sandwich3);