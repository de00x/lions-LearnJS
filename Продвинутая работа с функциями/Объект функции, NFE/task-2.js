const sum = (a) => {
  let currentSum = a;

  const f = (b) => {
    currentSum += b;
    return f;
  };

  f.toString = function () {
    return currentSum;
  };

  return f;
};

console.log(sum(1)(2));
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));

const f = (b) => {
  currentSum += b;
  return f;
};
