// local storage , it stores data untill you remove it manually
// session storage , stores data for a duration of the page session
localStorage.setItem("name", "oscar"); // set item
localStorage.getItem("name"); // get soecific item
localStorage.clear(); // clears all items
localStorage.removeItem("name"); // removes specific item
let farmer = {
  name: "oscar",
  age: 23,
  place: "Masaka",
};
localStorage.setItem("farmer", JSON.stringify(farmer));

