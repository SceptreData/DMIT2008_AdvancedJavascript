import {should, assert, expect} from 'chai'
import {Weather} from "../js/src/Weather"

should()

describe('Weather', function() {
    it('should exist.', function(){
        assert.exists(Weather, "weather is neither `null` or `undefined`");
    })
    describe('General test Suite', function(){
        let w;
        before('setup weather instance', function() {
            w = new Weather()
        })
        describe('Weather Instance', function() {
            it ('Should be a weather object', function(){
                w.should.be.an('object');
                w.should.be.an.instanceOf(Weather)
            })
        })
        describe('Default Constructor', function(){
            it('has the proper default properties', function(){
                w.city.should.be.a('string');
                w.city.should.equal('');
                w.weatherData.should.deep.equal({})
            })
        })
    })
})