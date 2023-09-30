// Function to handle login form submission
async function loginFormHandler(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the username and password input fields and trim any leading/trailing whitespace
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    // Check if both username and password are provided
    if (username && password) {
        // Send a POST request to the server to perform user login
        await fetch("/api/users/login", {
            method: "post",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => { 
            // Redirect to the user's dashboard upon successful login
            document.location.replace("/dashboard"); 
        })
        .catch(err => console.log(err)); // Log any errors that occur during the request
    }
}

// Add an event listener to the login form for form submission
document.querySelector(".login-form").addEventListener("submit", loginFormHandler);



