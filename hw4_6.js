'use strict'
var country ={
    name: "Україна",
    language: "український",
    capital: {
        name: "Київ",
        population: 2907871,
        area: 847.66
    }
};
function format (beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
format.call(country, '"< ', '>"');
format.apply(country, ['"[', ']"']);
format.call(country.capital, '""', '""');
format.apply(country.capital, ['"', '"']);