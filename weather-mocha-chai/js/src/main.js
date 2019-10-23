import {Weather} from './weather.js';

// forecast template is used as a partial in the weather template, register here
Handlebars.registerPartial('forecast', Handlebars.templates['forecast']);
// set the Weather object's template
const weatherTemplate = Handlebars.templates['weather'];

/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the
 * OpenWeatherMap weather API.
 */
(() => {

    /**
     * Displays the current weather for a given location.
     * @param {Weather} wobj - The weather and forecast manager.
     * @param {HTMLElement} el - The reference to the display DOM element.
     */
    const displayWeather = (wobj, el) => {
        wobj.getWeatherAndForecast().then(() => {
            el.innerHTML = weatherTemplate(wobj.weatherData);
        });
    }

    // Event listener for retrieving a weather forecast
    document
        .querySelector('.frm.weather')
        .addEventListener('submit', function (e) {
            let location = e
                .target
                .querySelector('[name=location]')
                .value;
            
            displayWeather(new Weather({city: location}), document.querySelector('.weather-display'));

            e.preventDefault();
        });
})();