
 /*function higherFunction (callback()){
    
}

fetch('/api/data')
  .then(res => res.json())            // then() takes a function
  .catch(err => console.error(err))   // catch() too
  .finally(() => spinner.hide());     // finally() ditto
// Objects are used to store related data */
const person = {
    name: "John",
    age: 20,
    child : {},
    courses : ["Javascript","Python",20] 
};
// We use the dot notation to return values from an object
// We use the index to return values from an array[0],[1],[2]
console.log(person.courses[1]);
console.log(person.courses[2]);

console.log(person.courses[0]);

// () - parethesis - dealing with an object
// {} - Braces
// [] - square brackets
// <> - angle brackets