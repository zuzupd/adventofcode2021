import { test } from '../support/tests.js';
import { test1, test2, test3 } from './testdata.js';
import { depths } from './depths.js';
import { sonar, band, sonarTest, bandTest } from './sonar.js';

test(sonarTest(test1, 7));
test(sonarTest(test2, 4));
test(sonarTest(test3, 0));
test(bandTest(test1, 8, 5));
test(bandTest(test2, 3, 2));
test(bandTest(test3, 3, 0));

console.log('--- Day 1: Sonar Sweep ---');

console.log(
  'Part 1: The number of times a depth measurement increases: ' +
    sonar(depths),
);
console.log(
  'Part 2: The number of times the sum of measurements in sliding windows increases: ' +
    sonar(band(depths)),
);
