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
  currentTemperatureElement.innerHTML = Math.round(response.data.main.temp);
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
