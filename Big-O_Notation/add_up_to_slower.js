function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.time('timer')
addUpTo(1000000000);
console.timeLog('timer');
console.timeEnd('timer')
