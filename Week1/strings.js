// String methods are built functions that allow you to manipulate and work with text
// Example 1

// Returning a character from a specified position(index) from string using CharAt()
// Returning the  character  in the first position(index)  from a sting
let myName = "Patra";
console.log(myName.charAt(0));
// Returning  the character  in the third position(index 2) from a string
let yourName = "Mercy";
console.log(yourName.charAt(2));

// Example 2
// Joining two or more strings using concat
let stringOne = "Go home";
let stringTwo = ` if youre sick`;
console.log(stringOne.concat(stringTwo));

// Example 3
// Returning the index of the first occurence of a character using .indexOf
let userName = "girlocode";
console.log(userName.indexOf("o"));
// Returning the index of the last occurence of a character using .lastIndexOf
console.log(userName.lastIndexOf("o"));

// Example 4
// Returning  the length of string using .length
let herName = "Kasemire";
console.log(herName.length);

// Example 5
// Triming a string incase there are wide spaces before or after using .trim()
let herrName = "Benita  ";
herName = herrName.trim();
console.log(herrName);

// Example 6
// Changing the string to uppercase using .toUpperCase
let vrName = "trevor";
console.log(vrName.toUpperCase());
// Changing to lower Case using .toLowerCase()
let loName = "ANDREW";
console.log(loName.toLowerCase());

// Example 7
// Repeating a string
let allName = "Monica";
console.log(allName.repeat(3));

// Exampe 8
// Returning  what a string starts with using .startsWith()
let result = " Fred";
console.log(result.startsWith(""));
// creating a simple function
if (result.startsWith("")) {
  console.log("Your username can't start with a space");
} else {
  console.log(result);
}

// Example 9
// Determining what a string ends with
let brName = "okello ";
console.log(brName.endsWith(""));
// simple function
if (brName.endsWith("")) {
  console.log("Your Name can't end with a space");
} else {
  console.log(brName);
}

// Example 10
// Determing what a string contains using the .includes()
let password = "hwllo piper";
console.log(password.includes(""));
// simple function
if (password.includes("")) {
  console.log("Your password can't contain spaces");
} else {
  console.log(password);
}

// Example 9
// Replacing characters in a string using .replaceAll
let phoneNumber = "076-86-29-076";
console.log(phoneNumber.replaceAll("-", ""));

// Example 11
// Adding a character to the start of a string until it reaches maximum length using padStart()
let phonNumber = "709135086";
console.log(phonNumber.padStart(10, "0"));

// Example 12
// Adding a character to the end of a string until it reaches maximum length using padEnd()
let ninNumber = "CF78900";
console.log(ninNumber.padEnd(15, "2"));
