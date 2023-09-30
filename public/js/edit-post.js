// Function to handle the submission of the edit post form
async function editFormHandler(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the post title and content from the form inputs
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();

    // Extract the post ID from the current URL
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    // Send a PUT request to update the post using the fetch API
    await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            post_id: id,
            title,
            content,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(() => { document.location.replace("/dashboard"); }) // Redirect to the dashboard on success
    .catch(() => alert("Try again")); // Show an alert on error
}

// Function to handle the deletion of a post
async function deleteFormHandler(event) {
    event.preventDefault(); // Prevent the default button click behavior

    // Extract the post ID from the current URL
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    // Send a DELETE request to delete the post using the fetch API
    const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        body: JSON.stringify({
            post_id: id,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(() => { document.location.replace("/dashboard"); }) // Redirect to the dashboard on success
    .catch(() => alert("Try again")); // Show an alert on error
}

// Add event listeners to the web page elements

// Listen for the submission of the edit post form
document.querySelector(".edit-post-form").addEventListener("submit", editFormHandler);

// Listen for a click on the delete button
document.querySelector(".delete-btn").addEventListener("click", deleteFormHandler);
