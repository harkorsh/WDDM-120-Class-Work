document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready!");

  function getChuck() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-RapidAPI-Key": "b5f11f1279msh39b9408dfc97933p1f46a3jsn104fc7ca22ea",
        "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
      },
    };

    fetch(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=any",
      options
    )
      .then((response) => response.json())
      //The array is under the result key so I updated `addPostsToDOM(response)` to `addPostsToDOM(response.result)`
      .then((response) => addPostsToDOM(response.result))
      .catch((err) => console.error(err));
  }
  getChuck();

  function addPostsToDOM(chuck) {
    // console.log(chuck);
    console.log("type of data: " + typeof chuck);

    chuck.forEach((chuck) => {
      //create a new li element
      const li = document.createElement("li");

      //create a text string from chuck.value
      const text = document.createTextNode(chuck.value);

      //append the string to the li, same as what u did b4 `<li>${chuck.value}</li>`
      li.appendChild(text);

      //append the li with text into the ul in your html
      document.getElementById("list").appendChild(li);
    });
  }
});
