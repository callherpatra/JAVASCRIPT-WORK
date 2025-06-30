/* // continuous,repetition
// Examples of loops in Javascript
// for loop (use it if you know the number of iterations)
for(initialisation,condtion,increment or decrement){
    code goes here

}
// while loop (use it when you do not know the number of iterations)
while(condition){
    code goes here
increment/decrement
}
// do while loop(runs atleast once and asks questions)
// iniatialise
do{
    code goes here

} while(condition) *

// Examples
for(let x=0;x<6;x++){
    console.log(x);

}
// mutiplication table for  3
let number = 3;
for(y=1;x<= 50;x++){
    console.log(`${x} x ${number} = ${number * x}`); */

// while 
while(true){
let password = prompt("Enter your password: ")
const correctPassword = "ketra"

if(correctPassword === password){
    alert("Password is correct")
    break;
}else{
    alert("Password is incorrect")
    continue;
}

}
do {
  console.log(y);
  y++;
} while (y <= 5);

