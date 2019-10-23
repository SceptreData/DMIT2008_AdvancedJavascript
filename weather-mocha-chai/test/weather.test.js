import chai, { should, assert, expect} from "chai";
import { Weather } from "../js/src/Weather";
import fetchMock from "fetch-mock";
import chaiAp from "chai-as-promised";

const API_KEY = "97960d8c86f9f5dff085d503974d3063";
const ENDPOINT = "https://api.openweathermap.org/data/2.5/";
const LOCATION = "London, uk";
const WEATHER_URL = `${ENDPOINT}weather?q=${LOCATION}&units=metric&appid=${API_KEY}`;

// Don't delete this!
should();
chai.use(chaiAp)

describe("Weather", function() {
  it("should exist.", function() {
    assert.exists(Weather, "weather is neither `null` or `undefined`");
  });
  describe("General test Suite", function() {
    let w;
    before("setup weather instance", function() {
      w = new Weather();
    });
    describe("Weather Instance", function() {
      it("Should be a weather object", function() {
        w.should.be.an("object");
        w.should.be.an.instanceOf(Weather);
      });
    });
    describe("Default Constructor", function() {
      it("has the proper default properties", function() {
        w.city.should.be.a("string");
        w.city.should.equal("");
        w.weatherData.should.deep.equal({});
      });
    });
    describe("#constructor( {attributes})", function() {
      it("stores any attributes as properties ", function() {
        let wObj = new Weather({ city: "abc", other: "123" });
        wObj.city.should.equal("abc");
        wObj.other.should.equal("123");
      });
    });
    describe("methods", function() {
      let testWeatherData = {
        location: "London, GB",
        date: new Date(1485792967 * 1000),
        conditions: "Clear",
        temp: 285.514,
sunrise:new Date(1485726240 * 1000),
sunset: new Date(1485763863 * 1000)
      };

      before("setup fetchMock", function() {
        fetchMock.get(
          WEATHER_URL,
          '{"coord":{"lon":139.01,"lat":35.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":285.514,"pressure":1013.75,"humidity":100,"temp_min":285.514,"temp_max":285.514,"sea_level":1023.22,"grnd_level":1013.75},"wind":{"speed":5.52,"deg":311},"clouds":{"all":0},"dt":1485792967,"sys":{"message":0.0025,"country":"GB","sunrise":1485726240,"sunset":1485763863},"id":1907296,"name":"London","cod":200}'
        );
      });
      this.beforeEach(`setup w for method of test ${LOCATION}`, function() {
        w = new Weather({ city: LOCATION });
      });
      describe("#getWeather()", function() {
          it("Should retrieve correct weather data", function(){
        let d = w.getWeather();
        return d.should.eventually.deep.equal(testWeatherData);
          })
      });
      after(function() {
        fetchMock.restore();
      });
    });
  });
});
