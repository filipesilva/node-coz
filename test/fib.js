const { cozProgress } = require('../index.js');

function fib(n) {
  cozProgress();
  
  if (n > 1) {
    return fib(n - 1) + fib(n - 2)
  } else {
    return n;
  }
}

console.log(fib(40));