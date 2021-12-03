export function powerConsumption(data) {
  let gamma = [];
  let epsilon = [];

  let transformed = prepareArray(
    data.replace(/(\r\n|\n|\r)/gm, '').split(''),
    data.split('\n')[1].length,
  );
  transformed.forEach((ele) => {
    let mode = modeTwo(ele);
    gamma.push(mode[0]);
    epsilon.push(mode[1]);
  });

  const result =
    parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
  return result;
}

function prepareArray(data, length) {
  let transformed = Array.apply(null, Array(length)).map(function () {
    return '';
  });
  let index = 0;

  data.forEach((ele) => {
    if (index == length) index = 0;
    transformed[index] = transformed[index].concat(ele);
    index++;
  });
  return transformed;
}

function modeTwo(data) {
  const variant = [0, 1];
  const occur = [];
  variant.forEach((item) => {
    occur.push(
      data.split('').filter((element) => element == item).length,
    );
  });

  const max = occur.indexOf(Math.max(occur[0], occur[1]));
  const min = occur.indexOf(Math.min(occur[0], occur[1]));

  return [max, min];
}

export function powerConsumptionTest(data, expected) {
  const observed = powerConsumption(data);
  const msg =
    'diagnostic - expected value is: ' +
    expected +
    ' observed value is: ' +
    observed;
  const result = observed == expected;
  return { result, msg };
}
