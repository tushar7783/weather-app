const apiKey = "231e70200cedb9e9c32021e52caaa417";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icons");
async function checkWether(city) {
  const respond = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await respond.json();
  if (respond.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "+";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0] == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0] == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0] == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0] == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWether(searchBox.value);
});
