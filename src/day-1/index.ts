import { stopwatch } from "../stopwatch";
import { input } from "./input";

const desiredResult = 2020;

export function day1_step1() {
  let resultNumbers: number[] = [];
  for (const n of input) {
    for (const m of input) {
      if (n + m == desiredResult) {
        resultNumbers = [n, m];
        break;
      }
    }
  }
  console.log(
    `Chosen nummbers: ${resultNumbers}. Result is ${
      resultNumbers[0] * resultNumbers[1]
    }`
  );
}

export function day1_step2() {
  let resultNumbers: number[] = [];
  for (const n of input) {
    for (const m of input) {
      for (const o of input) {
        if (n + m + o == desiredResult) {
          resultNumbers = [n, m, o];
          break;
        }
      }
    }
  }
  const result = resultNumbers.reduce((p, c) => c * p, 1);
  console.log(`Chosen nummbers: ${resultNumbers}. Result is ${result}`);
}

export function day1() {
  console.log("Day 1 - Step 1: ");
  let sw = stopwatch();
  day1_step1();
  console.log(sw());

  sw = stopwatch();
  console.log("Day 1 - Step 2: ");
  day1_step2();
  console.log(sw());
}
