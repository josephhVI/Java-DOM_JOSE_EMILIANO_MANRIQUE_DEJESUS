

let divform = document.getElementById("login-container")
let showLoginButton = document.getElementById("show-login-button")
let cancelButton = document.getElementById("cancel-button")
let loginButton = document.getElementById("login-button")
showLoginButton.addEventListener("click",() => {
    divform.classList.toggle("login-container-hide");
    showLoginButton.style.display = "none";
})

cancelButton.addEventListener("click",(e) => {
    divform.classList.toggle("login-container-hide");
    setTimeout(() => {
        showLoginButton.style.display = "block";
    }, 500);
    e.preventDefault();
})

loginButton.addEventListener("click",(e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        alert("Login successful!");
        divform.classList.toggle("login-container-hide");
    } else {
        alert("Invalid username or password.");
    }
})