const factorial = (n) => {
  return n ? n * factorial(n - 1) : 1;
};

console.log(factorial(5)); // 120
