// Function to handle the submission of a new post
async function newPostHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values of the title and content input fields
  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="content"]').value;

  // Check if both title and content are provided
  if (title && content) {
      // Send a POST request to create a new post on the server
      await fetch(`/api/posts`, {
          method: "POST",
          body: JSON.stringify({
              title,
              content,
          }),
          headers: {
              "Content-Type": "application/json",
          },
      })
      .then(() => { 
          // Redirect to the user's dashboard upon successful post creation
          document.location.replace("/dashboard"); 
      })
      .catch(() => alert("An error occurred while creating the post. Please try again."));
  }
}

// Add an event listener to the new post form for form submission
document.querySelector(".new-post-form").addEventListener("submit", newPostHandler);
