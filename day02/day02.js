import { directions } from "./directions.js";

const test1 = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];
const test2 = [
  "forward 1",
  "down 1",
  "up 1",
  "up 1",
  "down 1",
  "up 1",
  "down 1",
  "up 1",
];
const test3 = [
    "down 6",
    "forward 5",
    "up 1",
    "forward 5",
    "up 1",
    "down 6",
];

function navigation(data) {
  let depth = 0;
  let forward = 0;

  data.forEach((element) => {
    if (element.includes("down"))
      depth = depth + parseInt(element.replace("down ", ""));
    if (element.includes("up"))
      depth = depth - parseInt(element.replace("up ", ""));
    if (element.includes("forward"))
      forward = forward + parseInt(element.replace("forward ", ""));
  });

  let distance = depth * forward;
  return distance;
}

function trueNavigation(data) {
    let aim = 0;
    let depth = 0;
  let forward = 0;

  data.forEach((element) => {
    if (element.includes("down"))
      aim = aim + parseInt(element.replace("down ", ""));
    if (element.includes("up"))
      aim = aim - parseInt(element.replace("up ", ""));
    if (element.includes("forward")){
      depth = depth + (aim * parseInt(element.replace("forward ", "")))
      forward = forward + parseInt(element.replace("forward ", ""));
      }
  });

  let distance = depth * forward;
  return distance;
}

function navigationTest(data, expected) {
  console.log(
    "Test expecting " + expected + " and observed value is " + navigation(data)
  );
  console.log("Test result for simple navigation is " + (expected == navigation(data)));
}

function trueNavigationTest(data, expected) {
    console.log(
      "Test expecting " + expected + " and observed value is " + trueNavigation(data)
    );
    console.log("Test result for true navigation is " + (expected == trueNavigation(data)));
  }

navigationTest(test1, 150);
navigationTest(test2, -1);
navigationTest(test3, 100)
trueNavigationTest(test1, 900)
console.log("")

console.log("--- Day 2: Dive! ---")
console.log("Part 1: What do you get if you multiply your final horizontal position by your final depth? " + navigation(directions))
console.log("Part 2: What do you get if you multiply your final horizontal position by your final depth? " + trueNavigation(directions))