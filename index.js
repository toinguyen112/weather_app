const APIID = '4d8e8c623c6e07c2d89e013e435b609a';
const DEFAULT_VALUE = '__'

const searchInput = document.querySelector(".search-input");
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');



searchInput.addEventListener('change', (e) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APIID}&units=metric&lang=vi`)
        .then(async (res) => {
            const data = await res.json();
            console.log(data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            temperature.innerHTML = Math.round(data.main.temp);
            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm');
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm');
            humidity.innerHTML = data.main.humidity;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2);
            searchInput.value = ''
        });
})

