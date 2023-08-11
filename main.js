//let num = prompt("enter number");

//num > 10 && num < 20
//  ? console.log("Число входить в діапазон від 10 до 20")
// : console.log("Число не входить в діапазон від 10 до 20");

let form = document.querySelector(".form");
let list = document.querySelector(".list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputText = event.target.elements.text.value;
  let optionName = event.target.elements.select.value;
  createElement(inputText, optionName);
});

function createElement(inputText, optionName) {
  let newEl1 = document.createElement("li");
  let newEl2 = document.createElement("li");
  newEl1.textContent = inputText;
  newEl2.textContent = optionName;
  list.append(newEl2);
  list.append(newEl1);
}
