function reverseString(wordInput) {
let wordReversed = "";
for (let i = wordInput.length - 1; i >= 0; i--){
  wordReversed += wordInput.charAt(i);
}
return wordReversed;
}

// Do not edit below this line
module.exports = reverseString;
