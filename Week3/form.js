let form = document.getElementById("chickForm");
let errorMsg = document.getElementById("error");

function addtoTable(name, age, type, number) {
  const table = document
    .getElementById("requestTable")
    .getElementsByTagName("tbody")[0];

  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.textContent = name;
  cell2.textContent = age;
  cell3.textContent = type;
  cell4.textContent = number;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  let age = Number(document.getElementById("age").value);
  let type = document.getElementById("chickType").value;
  let number = Number(document.getElementById("quantity").value);
  let errorMsg = document.getElementById("error");

  if (!name || !type) {
    errorMsg.textContent = " Fill in all the fields";
    return;
  }
  if (age < 20 || age > 30) {
    errorMsg.textContent = `Age must be between 20 and 30`;
    return;
  }
  if (number > 100) {
    errorMsg.textContent = `You must fill a number below 100`;
    return;
  }

  addtoTable(name, age, type, number);

  form.reset();
});
