// Define an async function for logging out
const logout = async () =>{
    // Send a POST request to the "/api/user/logout" endpoint
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    // Check if the server response is successful (HTTP status code 200)
    if (response.ok) {
      // Redirect to the homepage upon successful logout
      document.location.replace('/');
      // Display a success alert
      alert('Logged out successfully!');
    } else {
      // Display an alert if logout fails
      alert('Failed to log out');
    }
  };
  
  // Add a click event listener to the logout link
  document.querySelector('#logout').addEventListener('click', logout);
  