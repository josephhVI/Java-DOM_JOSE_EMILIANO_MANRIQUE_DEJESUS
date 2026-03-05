

let divform = document.getElementById("login-container")
let showLoginButton = document.getElementById("show-login-button")
let cancelButton = document.getElementById("cancel-button")
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
