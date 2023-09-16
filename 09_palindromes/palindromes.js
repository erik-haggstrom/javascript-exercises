const palindromes = function (string) {
  let answer = false;
  let newString = '';
  for (let i = (string.length - 1); i>=0; i--) {
    newString += string[i];
  }
  let lowerString = string.toLocaleLowerCase();
  let checkString = lowerString.split(/[! ,.]+/);
  let testString = checkString.join('');

  let lowerNewstring = newString.toLocaleLowerCase();
  let words = lowerNewstring.split(/[! ,.]+/);
  let finalString = words.join('');

  if (testString === finalString) {
    answer = true;
  }
  return answer;
};

// Do not edit below this line
module.exports = palindromes;
