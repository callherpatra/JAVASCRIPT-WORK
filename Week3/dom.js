// DOM manipulation
// DOM Methods
// document.getElementsByTagName() gets element by tag e.g p,button
// document.getElementById()
// document.getElementsByClassName()
// document.querySelector() captures element by class/Id/tag name, gets the first matching element
// document.querySelectorAll()  captures element returns all classes/all matching elements, gets all matching elements
// C create/get
// R
// U
// D
const head = document.querySelectorAll(".title");
const head2 = document.getElementById("he-2");
const head3 = document.getElementById("he-3");

head[0].textContent = `patra is me`;
head2.textContent = `never give up`;
head3.style.color = "blue";
let subheading = document.createElement("h1");
subheading.id = "sub";

