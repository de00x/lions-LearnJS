function fibonaci(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonaci(3));
console.log(fibonaci(7));
console.log(fibonaci(77));
