//Swapping using temporary variables
//Swapping without using temporary variables
var a = prompt("Please enter the a value");
var b = prompt("Please enter tne b value");
console.log(`the value of a is: ${a}, The value of b is: ${b}`);
var temp;
//a = 5 , b = 6
temp = a; // a=5
a = b; // b=6
b = temp;
console.log (`After Swapping \n The value of a is: ${a},\n The value of b is: ${b}`);
//Without using Temporary variables
// a = 5 and b = 6
// a = a + b (5+6 = 11) | a = 11
// b = a - b
// a = a- b 
var a = parseInt(prompt("Please enter the a value"));
var b = parseInt(prompt("Please enter tne b value"));
console.log(`the value of a is: ${a}, The value of b is: ${b}`);
a = a+b;
console.log (`After Swapping \n The value of a is: ${a},\n The value of b is: ${b}`);