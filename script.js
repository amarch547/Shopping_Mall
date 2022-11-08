
/* <-------------------Script for Profile Login Section----------------------> */
var login = document.getElementById("login");
var register = document.getElementById("register");
var indicator = document.getElementById("indicator");
function Register() {
    register.style.transform = "translateX(0px)";
    login.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function Login() {
    register.style.transform = "translateX(300px)";
    login.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}
/* <---------------------------------The End----------------------------------> */

/* <------------------------------Script for Bag Section----------------------> */
var bag = getElementById("bag");
function loadBag() {
    alert("Item added to cart");
}