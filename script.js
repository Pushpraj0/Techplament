const apiKey = "1c8fd26c0849f4b38996303ac0e4b7db";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // opneWetherApp API

// SearchBox, SearchButton, WetherImages........
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Fucntion to checkWeather;
async function checkWeather(city) {
  const responce = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.body.style.background = "#222";
  } else {
    let data = await responce.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      document.body.style.backgroundImage = "url('images/clodySky.jpg')";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      document.body.style.backgroundImage = "url('images/clearSky.jpg')";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      document.body.style.backgroundImage = "url('images/rainingSky.jpg')";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      document.body.style.backgroundImage = "url('images/Drizzling.jpg')";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      document.body.style.backgroundImage = "url('images/Misty.jpg')";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
      document.body.style.backgroundImage = "url('images/snowing.webp')";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
// SearchBtn function call
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
