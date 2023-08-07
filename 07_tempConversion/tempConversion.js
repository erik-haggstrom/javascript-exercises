function convertToCelsius(tempF) {
  let celsius = (tempF - 32) * 5/9;
  return Math.round(celsius * 10) / 10
}

function convertToFahrenheit(tempC) {
  let farenheit = tempC * 9/5 + 32;
  return Math.round(farenheit * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
