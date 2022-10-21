// Name = Ubaid 
// Date = 10-Oct-2022

function makeCar(manufacturer, model_name, ...args){
    let car = {
        manufacturer: manufacturer,
        model_name: model_name,
        color: args[0],
        torque: args[1]
    }
    console.log(car);
}
makeCar('Audi','A6', "red", 390); 