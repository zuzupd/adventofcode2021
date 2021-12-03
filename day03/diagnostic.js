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

  if (occur[0] == occur[1]) return [1, 0];
  const max = occur.indexOf(Math.max(occur[0], occur[1]));
  const min = occur.indexOf(Math.min(occur[0], occur[1]));

  return [max, min];
}

function gasSearch(data, type) {
  let set;
  switch (type) {
    case 'o2':
      set = 0;
      break;
    case 'co2':
      set = 1;
  }
  let length = data.split('\n')[1].length;
  let filteredData = data;
  let regex = Array.apply(null, Array(length)).map(function () {
    return '.';
  });
  let result;

  for (let i = 0; i < length; i++) {
    (result = modeTwo(
      prepareArray(
        filteredData.replace(/(\r\n|\n|\r)/gm, '').split(''),
        length,
      )[i],
    )),
      (regex[i] = result[set]);
    filteredData = data
      .match(new RegExp(`^${regex.join('')}$`, 'gm'))
      .join('\n');
    if (filteredData.length == length) {
      return filteredData;
    }
  }
}

export function lifeSupportRating(data) {
  const o2 = gasSearch(data, 'o2');
  const co2 = gasSearch(data, 'co2');

  const result = parseInt(o2, 2) * parseInt(co2, 2);

  return result;
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

export function lifeSupportTest(data, expected) {
  const observed = lifeSupportRating(data);
  const msg =
    'life support - expected value is: ' +
    expected +
    ' observed value is: ' +
    observed;
  const result = observed == expected;
  return { result, msg };
}
