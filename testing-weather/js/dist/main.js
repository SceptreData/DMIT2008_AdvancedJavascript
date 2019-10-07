/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the
 * OpenWeatherMap weather API.
 */
import { Weather } from './weather.js';

(function () {
  var API_KEY = "97960d8c86f9f5dff085d503974d3063";
  var ENDPOINT = 'https://api.openweathermap.org/data/2.5/'; // forecast template is used as a partial in the weather template, register here

  Handlebars.registerPartial('forecast', Handlebars.templates['forecast']);
  Weather.test();
  /**
   * Displays the current weather for a given location.
   * @param {Object} data - The object of returned weather and forecast data.
   * @param {Object} el - The reference to the display DOM element.
   */

  var displayWeather = function displayWeather(data, el) {
    // process weather data
    var location = "".concat(data.weather.name, ", ").concat(data.weather.sys.country),
        date = new Date(+data.weather.dt * 1000),
        conditions = data.weather.weather[0].main,
        temp = data.weather.main.temp,
        sunrise = new Date(+data.weather.sys.sunrise * 1000),
        sunset = new Date(+data.weather.sys.sunset * 1000),
        // process forecast data
    currDate,
        nextDate,
        day = -1,
        forecast = [];
    data.forecast.forEach(function (item) {
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
    }); // object for template

    var weatherObj = {
      location: location,
      date: date,
      conditions: conditions,
      temp: temp,
      sunrise: sunrise,
      sunset: sunset,
      forecast: forecast
    };
    el.innerHTML = Handlebars.templates['weather'](weatherObj);
  }; // Event listener for retrieving a weather forecast


  document.querySelector('.frm.weather').addEventListener('submit', function (e) {
    var location = e.target.querySelector('[name=location]').value;
    var weatherData = {}; // fetch the weather data

    fetch("".concat(ENDPOINT, "weather?q=").concat(location, "&units=metric&appid=").concat(API_KEY)).then(function (data) {
      return data.json();
    }).then(function (json) {
      // store the retrieved weather data
      weatherData.weather = json; // now fetch the forecast data

      return fetch("".concat(ENDPOINT, "forecast?q=").concat(location, "&units=metric&appid=").concat(API_KEY));
    }).then(function (data) {
      return data.json();
    }).then(function (json) {
      // store the retrieved forecast data
      weatherData.forecast = json.list; // now we can display the data

      displayWeather(weatherData, document.querySelector('.weather-display'));
    });
    e.preventDefault();
  });
})();