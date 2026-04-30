function registerUser(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let role = document.getElementById("role").value;

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);

    alert("Account Created Successfully!");
    window.location.href = "index.html";
}

function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Email or Password!");
    }
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

function loadTheme() {
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
}
