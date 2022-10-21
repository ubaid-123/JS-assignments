// Name = Ubaid 
// Date = 1-Oct-2022

let current_users = ['ubaid', 'qadir', 'yasir', 'ibrahim', 'usman'];
let new_users = ['fatima', 'ubaid', 'rimsha', 'amtul', 'Yasir'];
let alreadyFound = true;

for(let i=0; i < new_users.length; i++){
    for(let j=0; j < current_users.length; j++){
        if(new_users[i].toLowerCase() == current_users[j].toLowerCase()){
            alreadyFound = true;
            break;
        }
        else
            alreadyFound = false;
    }
    if(alreadyFound == true)
        console.log("Sorry, you will need to enter a new username");
    else
        console.log("The username is available");

}