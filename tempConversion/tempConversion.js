const ftoc = function(fahrenheit) {
  celcius = (fahrenheit-32)*(5/9);
  return roundNumber(celcius);
};

const ctof = function(celcius) {
  fahrenheit = celcius*(9/5)+32;
  return roundNumber(fahrenheit);
};

const roundNumber = function(number) {
  return Math.round(number*10)/10;
}

module.exports = {
  ftoc,
  ctof
};
