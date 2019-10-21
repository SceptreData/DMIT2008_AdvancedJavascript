// private internal constant properties
var API_KEY = 'YOUR_API_KEY_HERE';
var ENDPOINT = 'https://api.openweathermap.org/data/2.5/';
/**
 * Represents a Weather object that can fetch and render weather information for a single city.
 * @constructor
 * @param {Object} opts - options to set on the Weather object
 * @param {string} opts.city - the city that this Weather object is being created for (default to 'edmonton')
 * @param {function} opts.template - the template function to use for rendering the weather
 */

var Weather = function Weather(opts) {
  // accessible instance properties

  /** The city for the Weather */
  this.city = '';
  /** Contains current weather data as well as forecast data */

  this.weatherData = {}; // mixin any passed options

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
  var _this = this;

  return fetch("".concat(ENDPOINT, "weather?q=").concat(this.city, "&units=metric&appid=").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    // process weather data
    var location = "".concat(data.name, ", ").concat(data.sys.country),
        date = new Date(+data.dt * 1000),
        conditions = data.weather[0].main,
        temp = data.main.temp,
        sunrise = new Date(+data.sys.sunrise * 1000),
        sunset = new Date(+data.sys.sunset * 1000); // mixin pattern

    return Object.assign(_this.weatherData, {
      location: location,
      date: date,
      conditions: conditions,
      temp: temp,
      sunrise: sunrise,
      sunset: sunset
    });
  });
};
/**
 * Fetches weather data for the Weather object.
 * @returns {Promise} Promise object resolves the retrieved forecast data:
 * {forecast}
 */


Weather.prototype.getForecast = function () {
  var _this2 = this;

  return fetch("".concat(ENDPOINT, "forecast?q=").concat(this.city, "&units=metric&appid=").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    // process forecast data
    var currDate,
        nextDate,
        day = -1,
        forecast = [];
    data.list.forEach(function (item) {
      // destructuring for desired variables
      var date = item.dt_txt,
          _item$main = item.main,
          high = _item$main.temp_max,
          low = _item$main.temp_min,
          condition = item.weather[0].main; // remove the time from the date

      nextDate = date.split(' ')[0];

      if (currDate !== nextDate) {
        // a new day
        currDate = nextDate;
        day += 1; // store the new day ... just take the initial condition value

        forecast.push({
          condition: condition,
          date: currDate,
          high: high,
          low: low
        });
      } // find the highest high and the lowest low


      if (forecast[day].high < high) {
        forecast[day].high = high;
      }

      if (forecast[day].low > low) {
        forecast[day].low = low;
      }
    }); // mixin pattern

    return Object.assign(_this2.weatherData, {
      forecast: forecast
    });
  });
};
/**
 * Fetches weather and forecast data for the Weather object.
 * @returns {Promise} Promise object resolves the retrieved weather and forecast data:
 * {location, date, conditions, temp, sunrise, sunset, forecast}
 */


Weather.prototype.getWeatherAndForecast = function () {
  var _this3 = this;

  return this.getWeather(this.city).then(function () {
    return _this3.getForecast(_this3.city);
  }).then(function () {
    return _this3.weatherData;
  });
};

export { Weather };