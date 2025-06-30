let emailPattern;
let phonePattern;
let passwordPattern;
let farmerNamePattern = /^[A-Za-z]+ $/;
let farmerName = prompt("enter your name: ");
console.log(farmerNamePattern.test(farmerName));
const pasPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

