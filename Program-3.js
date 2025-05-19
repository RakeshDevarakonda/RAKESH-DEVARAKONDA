function OddSeries(a) {
  let count = a % 2 === 0 ? a - 1 : a;
  let result = [];

  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }

  return result.join(", ");
}

const input = 2;
console.log(OddSeries(input));
