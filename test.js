const assert = require('assert')
const getpagosemanal = require('./sueldo').sueldofinal



describe("sueldo semanal de un trabajador", function(){
    it ("sueldo de un trabajo de 60 hrs semanales",function(){
        var expected = 4800;
        var actual = getpagosemanal(60,80);
        assert.equal(actual, expected);
    })
})


describe("sueldo semanal de un trabajador", function(){
    it ("sueldo de un trabajo de 33.5 hrs semanales",function(){
        var expected = 2680;
        var actual = getpagosemanal(33.5,80);
        assert.equal(actual, expected);
    })
})