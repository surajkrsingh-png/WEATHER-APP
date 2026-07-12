let userLocation = document.querySelector("#user-location");

let converter = document.querySelector("#converter");

let weatherIcon = document.querySelector(".weather-icon");

let temperature = document.querySelector(".temperature");

let feelsLike = document.querySelector(".feelslike");

let description = document.querySelector("#.description");

let date = document.querySelector(".date");

let city = document.querySelector(".city");


let Hvalue = document.querySelector("Hvalue");

let Wvalue = document.querySelector(".Wvalue");

let SRvalue = document.querySelector(".SRvalue");

let SSvalue = document.querySelector(".SSvalue");

let Cvalue = document.querySelector(".Cvalue");

let UVvalue = document.querySelector(".Uvalue");

let Pvalue = document.querySelector(".Pvalue");

let forecast = document.querySelector(".forecast");

let weather_api_endpoint =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cffc7fdf35c44d44224d56678ef64328";

weather_data_endpoint="";

// cffc7fdf35c44d44224d56678ef64328

function findUserlocation(){
fetch( weather_api_endpoint  + "delhi")
.then((response)=>response.json())
.then((data)=>{
console.log(data)
});

}



