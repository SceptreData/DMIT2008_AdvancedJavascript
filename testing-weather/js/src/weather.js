const Weather ={
    API_KEY: "97960d8c86f9f5dff085d503974d3063",
    ENDPOINT: "https://api.openweathermap.org/data/2.5/",

    getWeather:  function() {
        return fetch(`${ENDPOINT}weather?q=${location}&units=metric&appid=${API_KEY}`).then(data => {
            return data.json()
        }).then(json => {
            weatherData.weather = json;
        }).then(data => {
            let location = `${data.weather.name}, ${data.weather.sys.country}`,
                date = new Date(+ data.weather.dt * 1000),
                conditions = data.weather.weather[0].main,
                temp = data.weather.main.temp,
                sunrise = new Date(+ data.weather.sys.sunrise * 1000),
                sunset = new Date(+ data.weather.sys.sunset * 1000);
            
            return {location, date, conditions, temp, sunrise, sunset}
    })
    },
}

export {Weather}