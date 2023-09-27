// Get the value of an input field with the name "post-id"
const postId = document.querySelector('input[name="post-id"]').value;

// Log "testing" to the console (for debugging purposes)
console.log("testing");
console.log(postId);

// Define an event handler for the comment form submission
const commentFormHandler = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the value of a textarea field with the name "comment-body"
  const commentContent = document.querySelector('textarea[name="comment-body"]').value;
  console.log(commentContent);

  // Check if commentContent is not empty
  if (commentContent) {
    // Send a POST request to the "/api/comment" endpoint
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Check if the server response is successful (HTTP status code 200)
    if (response.ok) {
      // Reload the page to display the new comment
      document.location.reload();
    } else {
      // Display an alert with the response status text in case of an error
      alert(response.statusText);
    }
  }
};

// Add a submit event listener to the comment form
document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
