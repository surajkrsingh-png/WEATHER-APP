let userLocation = document.querySelector("#user-location");

let converter = document.querySelector("#converter");

let weatherIcon = document.querySelector(".weather-icon");

let temperature = document.querySelector(".temperature");

let feelsLike = document.querySelector(".feelslike");

let description = document.querySelector(".description");

let date = document.querySelector(".date");

let city = document.querySelector(".city");

let Hvalue = document.querySelector(".Hvalue");

let Wvalue = document.querySelector(".Wvalue");

let SRvalue = document.querySelector(".SRvalue");

let SSvalue = document.querySelector(".SSvalue");

let Cvalue = document.querySelector(".Cvalue");

let Gvalue = document.querySelector(".Gvalue");

let Pvalue = document.querySelector(".Pvalue");

let forecast = document.querySelector(".forecast");

let weather_api_endpoint =
  "https://api.openweathermap.org/data/2.5/weather?APPID=cffc7fdf35c44d44224d56678ef64328&q=";

//   let weather_data_endpoint =
// "https://api.openweathermap.org/data/3.0/onecall?appid=cffc7fdf35c44d44224d56678ef64328&exclude=minutely&units=metric&";

// cffc7fdf35c44d44224d56678ef64328

function findUserLocation() {
  fetch(weather_api_endpoint + userLocation.value)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod != "" && data.cod != 200) {
        alert(data.message);
        return;
      }

      city.innerHTML = data.name + " , " + data.sys.country;
      console.log(data.weather[0].icon);
      weatherIcon.style.backgroundImage = `url("https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png")`;

  

let tempC = data.main.temp - 273.15;
temperature.innerHTML = `${Math.round(tempC)}<span class="unit">°C</span>`;

converter.addEventListener("change", () => {
  if (converter.value === "°F") {
    temperature.innerHTML = `${Math.round((tempC * 9) / 5 + 32)}<span class="unit">°F</span>`;
  } else {
    temperature.innerHTML = `${Math.round(tempC)}<span class="unit">°C</span>`;
  }
});


      feelsLike.innerHTML =
        "Feels Like " + Math.round(data.main.feels_like - 273.15);

      description.innerHTML =
        `<i class="fa-brands fa-cloudversify " ></i> &nbsp;` +
        data.weather[0].description;

      date.innerText = new Date().toLocaleString([], {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      Hvalue.innerHTML = Math.round(data.main.humidity) + "<span> % </sapan>";

      Wvalue.innerHTML = Math.round(data.wind.speed) + "<span> m/s</sapan>";

  

   SRvalue.innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
       hour: "2-digit",
       minute: "2-digit",
     },
   );

   SSvalue.innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
     hour: "2-digit",
     minute: "2-digit",
   });

      Cvalue.innerHTML = data.clouds.all + "<span> %</sapan>";

      Gvalue.innerHTML = data.wind.gust + " m/s";

      Pvalue.innerHTML = data.main.pressure + "<span> hPa</sapan>";
    })
    .catch((error) => {
      console.error(error);
    });
}


