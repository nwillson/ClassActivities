// print the outer HTML of the navigation bar
console.log(document.querySelector(".nav-bar").outerHTML);
// print the inner HTML of the navigation bar
const innerNavBar = document.querySelector(".nav-bar");
console.log(innerNavBar.innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");
document.querySelector(".week-1").textContent = "test";
// select the img element and add a src attribute

/*missing a link for dog picture link

document.querySelector("img").src = "link";

*/
// change the font color of the h1 element
document.querySelector("h1").style.color = "blue";
