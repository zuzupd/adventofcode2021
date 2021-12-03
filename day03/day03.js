import { test } from '../support/tests.js';
import { test1, test2 } from './testdata.js';
import { report } from './reportdata.js';
import {
  powerConsumption,
  powerConsumptionTest,
  lifeSupportRating,
  lifeSupportTest,
} from './diagnostic.js';

test(powerConsumptionTest(test1, 198));
test(powerConsumptionTest(test2, 2230856));
test(lifeSupportTest(test1, 230));
test(lifeSupportTest(test1, 230));

console.log(
  'Part 1: What is the power consumption of the submarine? ' +
    powerConsumption(report),
);
console.log(
  'What is the life support rating of the submarine? ' +
    lifeSupportRating(report),
);
