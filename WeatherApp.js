// Using Dom Methods...

const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('location-not-found');

const weather_body = document.querySelector('.weather-body');




async function checkWeather(city){
    //Creating a variable of name const ApI
    const  api_key = "eb86aba451a1768070dc511aac4f2e7d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    //Fetch Function - belongs to Promices
    //Fetch function will take an Url...
    //awit will help to convert the data into string
    const weather_data = await fetch('${url}').then(response => response.json());

    if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    // console.log(weather_data)
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;
    description.innerHtml = `${weather_data.weather[0].description}`
    
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/Assets/Cloudy.jpg";
            break;
        case 'Clear':
            weather_img.src = "/Assets/Weather.jpg";
            break;
        case 'Rain':
            weather_img.src = "/Assets/Rainy.webp";
            break;
        case 'Mist':
            weather_img.src = "/Assets/Sunny.jpg";
            break;
        case 'Snow':
            weather_img.src = "/Assets/Snow.webp"; 
            break;
    }
    console.log(weather_data);
}



searchBtn.addEventListener('click', () =>{
    checkWeather(inputBox.value)
})