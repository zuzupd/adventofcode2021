import { directions } from './directions.js';
import { test1, test2, test3 } from './testdata.js';

export function navigation(data) {
  let depth = 0;
  let forward = 0;

  data.forEach((element) => {
    if (element.includes('down'))
      depth = depth + parseInt(element.replace('down ', ''));
    if (element.includes('up'))
      depth = depth - parseInt(element.replace('up ', ''));
    if (element.includes('forward'))
      forward = forward + parseInt(element.replace('forward ', ''));
  });

  let distance = depth * forward;
  return distance;
}

export function trueNavigation(data) {
  let aim = 0;
  let depth = 0;
  let forward = 0;

  data.forEach((element) => {
    if (element.includes('down'))
      aim = aim + parseInt(element.replace('down ', ''));
    if (element.includes('up'))
      aim = aim - parseInt(element.replace('up ', ''));
    if (element.includes('forward')) {
      depth = depth + aim * parseInt(element.replace('forward ', ''));
      forward = forward + parseInt(element.replace('forward ', ''));
    }
  });

  let distance = depth * forward;
  return distance;
}

export function navigationTest(data, expected) {
  const observed = navigation(data);
  const msg =
    'navigationTest - expected value is: ' +
    expected +
    ' observed value is: ' +
    observed;
  const result = observed == expected;
  return { result, msg };
}

export function trueNavigationTest(data, expected) {
  const observed = trueNavigation(data);
  const msg =
    'trueNavigationTest - expected value is: ' +
    expected +
    ' observed value is: ' +
    observed;
  const result = observed == expected;
  return { result, msg };
}
