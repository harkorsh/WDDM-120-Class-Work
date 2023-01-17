document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready!");

  fetch("./posts.json")
    .then((response) => response.json())
    .then((posts) => console.log("posts", posts))
    .catch((err) => console.error("error", error));
});
