// Function to handle user logout
async function logoutHandler() {
  // Send a POST request to log the user out on the server
  await fetch("/api/users/logout", {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
  })
  .then(() => { 
      // Redirect to the home page after successful logout
      document.location.replace("/"); 
  })
  .catch(err => console.log(err)); // Log any errors that occur during the request
}

// Add an event listener to the logout button for click events
document.querySelector("#logout").addEventListener("click", logoutHandler);
