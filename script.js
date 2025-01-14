const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "3f4fae412db5f13795c7eb4e51cdf4a0"; 
let cityName = document.getElementById('city_name');

async function getWeather(cityName){
    let req = await fetch(apiURL + cityName + `&appid=${apiKey}`);
    let res = await req.json();
    
    document.getElementById('temp').innerHTML = res.main.temp;
    document.getElementById('humidity').innerHTML = res.main.humidity;
    document.getElementById('pressure').innerHTML = res.main.pressure;
    document.getElementById('wind').innerHTML = res.wind.speed;
    document.getElementById('country').innerHTML = res.name;
    console.log(res);
}

document.getElementById('btn').addEventListener('click', function(){
    getWeather(cityName.value);
});