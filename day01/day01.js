import { depths } from './depths.js';

const test1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const test2 = [1, 2, 3, 4, 5];
const test3 = [5, 4, 3, 2, 1];

function sonar(val) {
  let inc = 0;
  let prev = val[0];

  val.forEach((ele) => {
    if (prev < ele) inc++;
    prev = ele;
  });
  return inc;
}

function band(val) {
  let bands = [];

  for (let i = 0; i + 2 < val.length; i++) {
    bands.push(val[i] + val[i + 1] + val[i + 2]);
  }
  return bands;
}

function sonarTest(val, expected) {
  console.log(
    'test result for sonar function: ' + (sonar(val) == expected),
  );
}

function bandTest(val, length, expected) {
  console.log(
    'test result is for band function: ' +
      (band(val).length == length),
  );
  sonarTest(band(val), expected);
}

console.log('Tests:');

sonarTest(test1, 7);
sonarTest(test2, 4);
sonarTest(test3, 0);
bandTest(test1, 8, 5);
bandTest(test2, 3, 2);
bandTest(test3, 3, 0);
console.log('');

console.log('--- Day 1: Sonar Sweep ---');

console.log(
  'Part 1: The number of times a depth measurement increases: ' +
    sonar(depths),
);
console.log(
  'Part 2: The number of times the sum of measurements in sliding windows increases: ' +
    sonar(band(depths)),
);
