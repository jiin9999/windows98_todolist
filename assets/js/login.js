const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login_form input");
const loginButton = document.querySelector("#login_form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if(username == "") {
        username = "Unknown";
    }
}

function onLoginSubmit(event) {
    event.preventDefault();
    
}

loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);