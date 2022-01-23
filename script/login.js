function toggleLogin() {
    document.querySelector(".overlay").classList.toggle("open");
}

function login() {
    user_data = {
        admin: "admin",
        user: "passwd",
    };

    user = document.getElementById("username").value;
    password = document.getElementById("password").value;


    if (user in user_data && user_data[user] == password) {
        sessionStorage['Login_state'] = "true";
        isLoggedIn();
        toggleLogin();
    } else {
        alert("Błędne dane logowania, spróbuj ponownie");
    }
}

function logout() {
    sessionStorage['Login_state'] = "false";
    isLoggedIn();
}

function isLoggedIn() {
    if (sessionStorage['Login_state'] == "true") {
        for (object of document.getElementsByClassName("auth")) {
            object.style.display = "initial";
        }
        document.getElementById("li_login").style.display = "none";
    } else {
        for (object of document.getElementsByClassName("auth")) {
            object.style.display = "none";
        }
        document.getElementById("li_login").style.display = "initial";
    }
}