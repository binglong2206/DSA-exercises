function addUpTo(n) {
  return n * (n + 1) / 2;
}

console.time('timer')
addUpTo(1000000000);
console.timeLog('timer');
console.timeEnd('timer')
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)