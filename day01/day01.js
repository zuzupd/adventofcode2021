import {depths} from "./depths.js"

let inc
const test1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
const test2 = [1, 2, 3, 4, 5]
const test3 = [5, 4, 3, 2, 1]
let prev

function sonar (val) {
    inc = 0
    prev = val[0]
    val.forEach(ele => {
        if(prev < ele) inc++
        prev = ele
    });
    return(inc)
}

console.log("Test result: "+ (sonar(test1) == 7) + " value is: " + inc)
console.log("Test result: "+ (sonar(test2) == 4) + " value is: " + inc)
console.log("Test result: "+ (sonar(test3) == 0) + " value is: " + inc)

console.log("The number of times a depth measurement increases: " + sonar(depths)) 