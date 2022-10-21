// Name = Ubaid 
// Date = 9-Oct-2022

let magician_names = ["mag_1", "mag_2", "mag_3", "mag_4", "mag_5"];

function make_great(){
    for(i=0; i< magician_names.length; i++)
    	magician_names[i] = String(magician_names[i]).concat(" the Great"); 
}

function show_magicians(mag_names){
    for(i=0; i< mag_names.length; i++)
        console.log(mag_names[i]); 
}
make_great();
show_magicians(magician_names);