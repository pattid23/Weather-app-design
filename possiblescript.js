function weatherNow(response) {
  console.log(response.data.main.temp);
}

let apiKey = "e75d849f74609cf49f1546fd56024af1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Washington D.C.&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(weatherNow);
