// function formatDate(date) {
//   let now = new Date();

//   let hours = now.getHours();
//   if (hours < 10) {
//     hours = `0${hours}`;
//   }

//   let minutes = now.getMinutes();
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let day = days[now.getDay()];

//   let currentDate = `${day}, ${hours}: ${minutes}`;

//   return currentDate;
// }
// document.getElementById("date").innerHTML = formatDate();

// function weatherNow(response) {
//   let h1 = document.querySelector("#display-input");
//   h1.innerHTML = response.data.name;
//   let temparature = document.querySelector("#current-temp");
//   temparature.innerHTML = Math.round(response.data.main.temp);
//   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
//   document.querySelector("#windy").innerHTML = Math.round(
//     response.data.wind.speed
//   );
// }

// function searchCity(city) {
//   let apiKey = "e75d849f74609cf49f1546fd56024af1";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
//   axios.get(apiUrl).then(weatherNow);
// }

// function search(event) {
//   event.preventDefault();
//   let city = document.querySelector("#search-input");
//   searchCity(city.value);
// }
// let form = document.querySelector("#search-form");
// form.addEventListener("submit", search);

// function showPosition(position) {
//   let apiKey = "e75d849f74609cf49f1546fd56024af1";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

//   axios.get(apiUrl).then(weatherNow);
// }
