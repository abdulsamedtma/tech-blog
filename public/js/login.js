// Define an event handler for the login form submission
const loginFormHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the username and password input elements
    const usernameEl = document.querySelector('#username-input-login').value.trim();
    const passwordEl = document.querySelector('#password-input-login').value.trim();
    
    if (usernameEl && passwordEl) {

    // Send a POST request to the "/api/user/login" endpoint with the provided username and password
    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ usernameEl, passwordEl }),   
        headers: { 'Content-Type': 'application/json' },
    });
    }
    // Check if the server response is successful (HTTP status code 200)
    if (response.ok) {
        // Redirect to the dashboard page upon successful login
        document.location.replace('/dashboard');
    } else {
        // Display an alert if login fails
        alert('Failed to login');
    }
};

// Add a submit event listener to the login form
document.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);


