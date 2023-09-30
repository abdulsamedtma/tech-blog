// Function to handle comment submission
async function commentFormHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the value of the comment text input field and trim any leading/trailing whitespace
  const comment_text = document.querySelector('input[name="comment-body"]').value.trim();

  // Extract the post_id from the current URL by splitting it and taking the last part
  const post_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
  ];

  // Check if the comment text is not empty
  if (comment_text) {
      // Send a POST request to create a new comment
      await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify({
              post_id,
              comment_text,
          }),
          headers: {
              "Content-Type": "application/json",
          },
      })
      .then(() => {
          // Display a success message and reload the page after successful comment submission
          alert("Comment posted successfully!");
          document.location.reload();
      })
      .catch(() => alert("An error occurred while posting your comment. Please try again."));
  }
}

// Add an event listener to the comment form for form submission
document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);
