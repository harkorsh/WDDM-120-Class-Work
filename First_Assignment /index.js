// This is to load the City and get the value typed in
var checkCity = document.querySelector("#check-city");

checkCity.onclick = function (e) {
  // This gets the value for the city typed in
  let citySelected = document.getElementById("city").value;
  //   This is to update the city Name in Dom
  document.getElementById("city-name").innerHTML = citySelected;
  document.getElementById("city-name2").innerHTML = citySelected;
  //   This calls the load Weather details in the API
  loadWeather(citySelected);
};

function loadWeather(citySelected) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b5f11f1279msh39b9408dfc97933p1f46a3jsn104fc7ca22ea",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${citySelected}`,
    options
  )
    .then((response) => response.json())
    .then((response) => addPostsToDOM(response.current))
    .catch((err) => console.error(err));
}

function addPostsToDOM(response) {
  //The message is an Object with all the URLs for the breed images as an array
  console.log(response);
  let currentTemp = document.querySelector("#current-temp");
  let feelsLike = document.querySelector("#feels-like");
  let windMiles = document.querySelector("#wind-miles");
  let windKm = document.querySelector("#wind-km");
  let overview = document.querySelector("#overview");
  //   Add Image to Temperature overview
  let imgSrc = response.condition.icon;
  document.getElementById("image").src = imgSrc;

  //   Start placing the tempratures in the DOM
  currentTemp.innerHTML = response.temp_c;
  feelsLike.innerHTML = response.feelslike_c;
  overview.innerHTML = response.condition.text;
  windMiles.innerHTML = response.wind_mph;
  windKm.innerHTML = response.wind_kph;
}
