function formatDate(timestamp) {
  let date = new Date(timestamp);

  let hours = date.getHours();

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function weatherNow(response) {
  let currentTemperatureElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#display-input");
  let conditionsElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#windy");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  fahrenheitTemp = response.data.main.temp;

  currentTemperatureElement.innerHTML = Math.round(fahrenheitTemp);
  cityElement.innerHTML = response.data.name;
  conditionsElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let apiKey = "e75d849f74609cf49f1546fd56024af1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Washington D.C.&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(weatherNow);

function searchCity(city) {
  let apiKey = "e75d849f74609cf49f1546fd56024af1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(weatherNow);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  searchCity(city.value);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  let celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
  temperatureElement.innerHTML = Math.round(celsiusTemp);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

let fahrenheitTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemp);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);
