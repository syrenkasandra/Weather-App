function enterCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let userCity = document.querySelector("h1");
  if (cityInput.value.length > 0) {
    userCity.innerHTML = `${cityInput.value}`;

    let apiKey = "70bdt40b752ea4a13dco5afb5b0f31c1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput.value}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  } else {
    alert("Please enter a valid city.");
  }
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", enterCity);

function getDate(date) {
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
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
  let currentDay = days[date.getDay()];

  return `${currentDay} ${currentHour}:${currentMinute}`;
}

let dateHeading = document.querySelector("#date");
let currentDate = new Date();

dateHeading.innerHTML = getDate(currentDate);

function displayTemperature(result) {
  let temperatureElement = document.querySelector("#current-temperature");
  let currentTemperature = Math.round(result.data.temperature.current);

  let humidityElement = document.querySelector("#humidity");
  let currentHumidity = result.data.temperature.humidity;

  let windElement = document.querySelector("#wind-speed");
  let currentWind = Math.round(result.data.wind.speed * 3.6);

  temperatureElement.innerHTML = `${currentTemperature}`;
  humidityElement.innerHTML = `${currentHumidity}%`;
  windElement.innerHTML = `${currentWind} km/h`;
}
