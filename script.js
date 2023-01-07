var button = document.querySelector(".dropbtn");
var content = document.querySelector(".dropdown-content");
var shadow = document.querySelector(".shadow");

function openMenu() {
    content.classList.toggle("showNav");
    shadow.classList.toggle("shadowSee");
}