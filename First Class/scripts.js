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
      .then((response) => addPostsToDOM(response))
      .catch((err) => console.error(err));
  }
  getChuck();

  function addPostsToDOM(chuck) {
    console.log(chuck);
    console.log("type of data: " + typeof chuck);
    let output = "";
    output = chuck.forEach((chuck) => {
      console.log(chuck);
      output += `<li>${chuck.value}</li>`;
    });
    document.getElementById("list").innerHTML = chuck.result;
  }
  addPostsToDOM();
});
