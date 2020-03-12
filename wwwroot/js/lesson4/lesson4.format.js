"use strict";

// Task6.Functions as objects. Explicitly determine this
var country = {
    name: "Украина",
    language: "украинский",
    capital: {
       name: "Киев",
       population: 2907817,
       area: 847.66
    }
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
format.call(country, "<", ">"); // "<Украина>"
format.apply(country, ["[", "]"]); // "[Украина]"
format.call(country.capital, "\"\"", "\"\""); // ""Киев""
format.apply(country.capital, ["\"", "\""]); // "Киев"
