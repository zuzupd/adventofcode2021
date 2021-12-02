import { test } from '../support/tests.js';
import {
  navigation,
  trueNavigation,
  navigationTest,
  trueNavigationTest,
} from './navigation.js';
import {
  dumbNavigation,
  cleverNavigation,
  dumbNavigationTest,
  cleverNavigationTest,
} from './navigationalt.js';
import { directions } from './directions.js';
import { test1, test2, test3 } from './testdata.js';

test(navigationTest(test1, 150));
test(trueNavigation(test1, 900));
test(dumbNavigationTest(test1, 150));
test(cleverNavigationTest(test1, 900));

console.log('--- Day 2: Dive! ---');
console.log('--- Original solution ---');

console.log(
  'Part 1: What do you get if you multiply your final horizontal position by your final depth? ' +
    navigation(directions),
);
console.log(
  'Part 2: What do you get if you multiply your final horizontal position by your final depth? ' +
    trueNavigation(directions),
);

console.log('');

console.log('--- Alternative solution ---');

console.log(
  'Part 1: What do you get if you multiply your final horizontal position by your final depth? ' +
    dumbNavigation(directions),
);
console.log(
  'Part 2: What do you get if you multiply your final horizontal position by your final depth? ' +
    cleverNavigation(directions),
);
