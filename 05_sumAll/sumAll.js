function sumAll(x, y) {
  let sum = 0;
  if ((typeof x === 'number' && x > 0) && (typeof y === 'number' && y > 0)){
    if (x < y){
      for (let i = 0; i <= (y - x); i++){
        sum += x + i;
      }
    }
    else if (x > y){
      for (let i = 0; i <= (x - y); i++){
        sum += x - i;
      }
    }
  }
  else{
    sum = "ERROR"
  }
  return sum;
}



// Do not edit below this line
module.exports = sumAll;
