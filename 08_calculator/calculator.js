const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	let value = array.reduce((acc, current) => {
    return acc + current;
  }
  ,0);
  return value;
};

const multiply = function(array) {
  let value = array.reduce((acc, currentV) => {
    return acc * currentV;
  });
  return value;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	let value = 1;
  if (a<1) {
    let value = 1;
  }
  
  for (let i = 0; a>i;){
    value *= a;
    a--;
  }

  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
