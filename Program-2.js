function printSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result.join(", ");
}

const input = 4;
console.log(printSeries(input));
