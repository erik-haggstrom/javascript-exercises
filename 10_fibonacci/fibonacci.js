const fibonacci = function(n) {
  if (n<0) {
    return 'OOPS'
  }
  let N = Number(n);
  
  let list = [];
  list[0] = 0;
  list[1] = 1;

  for (let i = 2; i <=N; i++) {
    list[i] = list[i-1] + list[i-2];
  }
  return list[N];
};

// Do not edit below this line
module.exports = fibonacci;
