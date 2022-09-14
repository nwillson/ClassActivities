const unorderedList = document.createElement("ul");

let childToRemove = document.querySelector(".nav-bar > p");
childToRemove.remove();

document.querySelector9(".nav-bar").appendChild(unorderedList);

const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");

listItem1.textContent = "1st new list item";
listItem2.textContent = "2nd new list item";

document.querySelector(".nav-bar > ul").appendChild(listItem1);
document.querySelector(".nav-bar > ul").appendChild(listItem2);
