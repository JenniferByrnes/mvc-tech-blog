async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value.trim();

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
  document.getElementById('display-posts').style.display='block';
  document.getElementById('create-post').style.display='none';
}

function toggleHide(event) {
  event.preventDefault();
  console.log("here i am ************************")
  document.getElementById('display-posts').style.display='none';
  document.getElementById('create-post').style.display='block';
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

document.querySelector('.new-post-form').addEventListener('toggle', toggleHide);
