// Function to handle user signup form submission
async function signupFormHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values of the username and password input fields and trim any leading/trailing whitespace
  const username = document.querySelector("#name-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Check if both username and password are provided
  if (username && password) {
      // Send a POST request to create a new user account on the server
      await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify({
              username,
              password,
          }),
          headers: {
              "Content-Type": "application/json"
          },
      })
      .then(() => {
          // Display a welcome message and redirect to the user's dashboard upon successful signup
          alert("Welcome to the tech blog post !");
          document.location.replace("/dashboard");
      })
      .catch(() => alert("An error occurred while signing up. Please try again."));
  }
}

// Add an event listener to the signup form for form submission
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
