//intialization of a new variable that will remain constant
const kelvin = 0;
//intialization of a new variable that will remain constant. Use arithmatic operater to assign value
const celcius = kelvin - 273;
//intialization of a new variable that can change value. Use arithmatic operaters to assign value
let fahrenheit = celcius * (9/5) + 32;
//Reassignment of variable using built-in math object
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
