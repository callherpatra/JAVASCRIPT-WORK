// events
// event handdling
// event listeners = Listens for specific events to create interactive web pages
// events: click, hover
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Your form has been submitted");
});
let button2 = document.getElementById("button2");

function handle() {
  alert("You are stupid");
}
button2.addEventListener("click", handle);
let form = document.getElementById("my");
function submit(event) {
  event.preventDefault;
  alert("Your form has been submitted");
}
form.addEventListener("click", submit);
const form2 = document.getElementById("myform");

form2.addEventListener("submit", (event) => {
  event.preventDefault;
  let username = form2.username.value;
  let password = form2.password.value;
  if (username === " " || password === " ") {
    alert("Please fil in all the fields");
  } else {
    alert("form has been submitted");
  }
});
const mydiv = document.getElementById("mydiv");
function changeColor(event) {
  // event is an object provided to us by the web browser automatically that contains what happens when an action is executed
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH!";
}
mydiv.addEventListener("click", changeColor);
// passing an anonymous function
let button = document.getElementById("but1");
button.addEventListener("click", function (event) {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH!";
});
//  using arrow functions
let you = document.getElementById("you");
you.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH!";

})
