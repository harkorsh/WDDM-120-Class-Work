document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready!");

  function addPostsToDOM(posts) {
    let output = "";
    posts.forEach((post) => {
      //   console.log("post", post);
      output += `<li>${post.title}</li>`;
    });

    document.getElementById("list").innerHTML = output;

    console.log(output);
  }

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=50")
      .then((response) => response.json())
      .then((posts) => addPostsToDOM(posts))
      .catch((err) => {
        console.error("error: ", err);
      });
  }

  getPosts();
});
