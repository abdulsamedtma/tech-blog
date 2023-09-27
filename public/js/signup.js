// Define an async function for handling the signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Get the values of the username and password input fields and trim any extra whitespace
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  //console.log(username);
  //console.log(password);
  if (username && password) {
  // Send a POST request to the "/api/user" endpoint with the provided username and password
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username, // Using shorthand property names to create an object with username and password
      password,
    }),
    headers: { "Content-Type": 'application/json' },
  });

  // Check if the server response is successful (HTTP status code 200)
  if (response.ok) {
    // Redirect to the dashboard upon successful signup
    document.location.replace('/dashboard');
  } else {
    // Display an alert if signup fails
    alert("Failed to sign up");
  }
}
};
// Add a submit event listener to the signup form
document
  .querySelector('.signup-form').addEventListener('submit', signupFormHandler);

