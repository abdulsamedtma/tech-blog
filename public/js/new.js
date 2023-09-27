const newFormHandler = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('textarea[name="post-body"]').value;
  
    //console.log(postTitle);
    //console.log(postContent);
    if (postTitle && postContent) {
      const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ postTitle, postContent,}),
      headers: { 'Content-Type': 'application/json' },
    });

  if (response.ok) {                                            
   document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}
};

  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
