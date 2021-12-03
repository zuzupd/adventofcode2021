import { test } from '../support/tests.js';
import { test1, test2 } from './testdata.js';
import { report } from './reportdata.js';
import {
  powerConsumption,
  powerConsumptionTest,
} from './diagnostic.js';

test(powerConsumptionTest(test1, 198));
test(powerConsumptionTest(test2, 2230856));

console.log(
  'Part 1: What is the power consumption of the submarine? ' +
    powerConsumption(report),
);
