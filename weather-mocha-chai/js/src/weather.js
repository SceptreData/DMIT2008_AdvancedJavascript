// private internal constant properties
const API_KEY = "97960d8c86f9f5dff085d503974d3063";
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/';

/**
 * Represents a Weather object that can fetch and render weather information for a single city.
 * @constructor
 * @param {Object} opts - options to set on the Weather object
 * @param {string} opts.city - the city that this Weather object is being created for (default to 'edmonton')
 * @param {function} opts.template - the template function to use for rendering the weather
 */
const Weather = function (opts) {
    
    // accessible instance properties
    /** The city for the Weather */
    this.city = '';
    /** Contains current weather data as well as forecast data */
    this.weatherData = {}
    
    // mixin any passed options
    if (opts) {
        Object.assign(this, opts);
    }
};

/**
 * Fetches weather data for the Weather object.
 * @returns {Promise} Promise object resolves the retrieved weather data:
 * {location, date, conditions, temp, sunrise, sunset}
 */
Weather.prototype.getWeather = function () {

    return fetch(`${ENDPOINT}weather?q=${this.city}&units=metric&appid=${API_KEY}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // process weather data
            let location = `${data.name}, ${data.sys.country}`,
            date = new Date(+ data.dt * 1000),
            conditions = data.weather[0].main,
            temp = data.main.temp,
            sunrise = new Date(+ data.sys.sunrise * 1000),
            sunset = new Date(+ data.sys.sunset * 1000);

            // mixin pattern
            return Object.assign(this.weatherData, {location, date, conditions, temp, sunrise, sunset});
        });        
};

/**
 * Fetches weather data for the Weather object.
 * @returns {Promise} Promise object resolves the retrieved forecast data:
 * {forecast}
 */
Weather.prototype.getForecast = function () {

    return fetch(`${ENDPOINT}forecast?q=${this.city}&units=metric&appid=${API_KEY}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        // process forecast data
        let currDate,
        nextDate,
        day = -1,
        forecast = [];

        data.list.forEach((item) => {
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

        // mixin pattern
        return Object.assign(this.weatherData, {forecast});
    })
};

/**
 * Fetches weather and forecast data for the Weather object.
 * @returns {Promise} Promise object resolves the retrieved weather and forecast data:
 * {location, date, conditions, temp, sunrise, sunset, forecast}
 */
Weather.prototype.getWeatherAndForecast = function () {
    return this.getWeather(this.city)
    .then(() => {
        return this.getForecast(this.city);
    })
    .then(() => {
        return this.weatherData;
    })
}


export {Weather};