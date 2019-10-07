/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the
 * OpenWeatherMap weather API.
 */
import {Weather} from './weather.js'
(() => {

    const API_KEY = "97960d8c86f9f5dff085d503974d3063";
    const ENDPOINT = 'https://api.openweathermap.org/data/2.5/';

    // forecast template is used as a partial in the weather template, register here
    Handlebars.registerPartial('forecast', Handlebars.templates['forecast']);
    Weather.test()

    /**
     * Displays the current weather for a given location.
     * @param {Object} data - The object of returned weather and forecast data.
     * @param {Object} el - The reference to the display DOM element.
     */
    const displayWeather = (data, el) => {

        // process weather data
        let location = `${data.weather.name}, ${data.weather.sys.country}`,
            date = new Date(+ data.weather.dt * 1000),
            conditions = data.weather.weather[0].main,
            temp = data.weather.main.temp,
            sunrise = new Date(+ data.weather.sys.sunrise * 1000),
            sunset = new Date(+ data.weather.sys.sunset * 1000),
        // process forecast data
            currDate,
            nextDate,
            day = -1,
            forecast = [];

        data.forecast.forEach((item) => {
            // destructuring for desired variables
            let {dt_txt: date} = item, {
                    temp_max: high,
                    temp_min: low
                } = item.main, {main: condition} = item.weather[0];

            // remove the time from the date
            nextDate = date.split(' ')[0];
            if (currDate !== nextDate) {
                // a new day
                currDate = nextDate;
                day += 1;
                // store the new day ... just take the initial condition value
                forecast.push({condition, date:currDate, high, low});
            }

            // find the highest high and the lowest low
            if (forecast[day].high < high) {
                forecast[day].high = high;
            }

            if (forecast[day].low > low) {
                forecast[day].low = low;
            }
        });

        // object for template
        let weatherObj = {location, date, conditions, temp, sunrise, sunset, forecast};
        el.innerHTML = Handlebars.templates['weather'](weatherObj);
    }

    // Event listener for retrieving a weather forecast
    document
        .querySelector('.frm.weather')
        .addEventListener('submit', function (e) {
            let location = e
                .target
                .querySelector('[name=location]')
                .value;
            let weatherData = {};

            // fetch the weather data
            fetch(`${ENDPOINT}weather?q=${location}&units=metric&appid=${API_KEY}`).then(data => {
                return data.json()
            }).then(json => {
                // store the retrieved weather data
                weatherData.weather = json;
                // now fetch the forecast data
                return fetch(`${ENDPOINT}forecast?q=${location}&units=metric&appid=${API_KEY}`);
            }).then(data => {
                return data.json()
            }).then(json => {
                // store the retrieved forecast data
                weatherData.forecast = json.list;
                // now we can display the data
                displayWeather(weatherData, document.querySelector('.weather-display'));
            });

            e.preventDefault();
        });
})();