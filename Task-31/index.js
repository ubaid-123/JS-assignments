// Name = Ubaid 
// Date = 1-Oct-2022

//let user_names = ['ubaid', 'qadir', 'yasir', 'admin', 'ibrahim', 'usman'];
let user_names = [];

if(user_names.length > 0){
    for(let i=0; i < user_names.length; i++){
        if(user_names[i] == 'admin')
            console.log("Hello admin, would you like to see a status report?")
        else
            console.log(`Hello ${user_names[i]}, thank you for logging in again!`)
    }
}else{
    console.log("We need to find some users!");
}