export function sonar(val) {
  let inc = 0;
  let prev = val[0];

  val.forEach((ele) => {
    if (prev < ele) inc++;
    prev = ele;
  });
  return inc;
}

export function band(val) {
  let bands = [];

  for (let i = 0; i + 2 < val.length; i++) {
    bands.push(val[i] + val[i + 1] + val[i + 2]);
  }
  return bands;
}

export function sonarTest(data, expected) {
  const observed = sonar(data);
  const msg =
    'sonar - expected value is: ' +
    expected +
    ' observed value is: ' +
    observed;
  const result = observed == expected;
  return { result, msg };
}

export function bandTest(data, length, expected) {
  const observed = band(data).length;
  const msg =
    'navigationTest - expected value is: ' +
    expected +
    ' observed value is: ' +
    observed;
  const result = observed == length && sonarTest(data, expected);
  return { result, msg };
}
