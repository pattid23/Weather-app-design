function weatherNow(response) {
  console.log(response.data);
  let currentTemperatureElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#display-input");
  //let conditionsElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#windy");
  currentTemperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  //conditionsElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e75d849f74609cf49f1546fd56024af1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Washington D.C.&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(weatherNow);
