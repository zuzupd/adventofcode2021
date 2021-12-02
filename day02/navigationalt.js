import { directions } from './directions.js';
import { test1, test2, test3 } from './testdata.js';

export function dumbNavigation(data) {
  let depth = 0;
  let forward = 0;

  data.forEach((element) => {
    const Regexp = /(?<direction>forward|down|up) (?<speed>\d*)/;
    const { direction, speed } = element.match(Regexp).groups;

    switch (direction) {
      case 'forward':
        forward += Number(speed);
        break;
      case 'up':
        depth -= Number(speed);
        break;
      case 'down':
        depth += Number(speed);
    }
  });

  return forward * depth;
}

export function cleverNavigation(data) {
  let depth = 0;
  let forward = 0;
  let aim = 0;

  data.forEach((element) => {
    const Regexp = /(?<direction>forward|down|up) (?<speed>\d*)/;
    const { direction, speed } = element.match(Regexp).groups;

    switch (direction) {
      case 'forward':
        forward += Number(speed);
        depth += aim * Number(speed);
        break;
      case 'up':
        aim -= Number(speed);
        break;
      case 'down':
        aim += Number(speed);
    }
  });

  return forward * depth;
}

export function dumbNavigationTest(data, expected) {
  const observed = dumbNavigation(data);
  const msg =
    'dumbNavigationTest - expected value is: ' +
    expected +
    ' observed value is: ' +
    observed;
  const result = observed == expected;
  return { result, msg };
}

export function cleverNavigationTest(data, expected) {
  const observed = cleverNavigation(data);
  const msg =
    'cleverNavigationTest - expected value is: ' +
    expected +
    ' observed value is: ' +
    observed;
  const result = observed == expected;
  return { result, msg };
}
