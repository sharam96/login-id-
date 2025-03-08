document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting automatically

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long!";
        return;
    }

    errorMessage.textContent = "";
    alert("Login Successful!\nUsername: " + username);
});
