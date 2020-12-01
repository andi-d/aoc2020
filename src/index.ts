
import { day1_step1, day1_step2 } from "./day-1/index";
import { stopwatch } from "./stopwatch";

console.log("Step 1: ");
let sw = stopwatch();
day1_step1();
console.log(sw());

sw = stopwatch();
console.log("Step 2: ");
day1_step2();
console.log(sw());