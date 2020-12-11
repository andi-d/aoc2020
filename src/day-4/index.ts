import { runMeasured } from "../utils";
import { inputDay4 } from "./input";

const requiredFields = [
  "byr", // (Birth Year)
  "iyr", // (Issue Year)
  "eyr", // (Expiration Year)
  "hgt", // (Height)
  "hcl", // (Hair Color)
  "ecl", // (Eye Color)
  "pid", // (Passport ID)
  // "cid", // (Country ID)
];

interface DataSet {
  [key: string]: string;
}

function parseInput(input: string): DataSet[] {
  const chunks = input.split("\n\n");
  //   console.log(chunks);
  const x: DataSet[] = chunks.map((c) =>
    c.split(/\s+/g).reduce((curr, pair) => {
      const [key, val] = pair.split(":");
      curr[key] = val;
      return curr;
    }, {} as DataSet)
  );
  return x;
}

function isDataSetValid(set: DataSet): boolean {
  return requiredFields.every((requiredField) => !!set[requiredField]);
}

function day4_step1() {
  const parsedInput = parseInput(inputDay4);
  const validSets = parsedInput.filter(isDataSetValid);
  console.log(`${validSets.length} data sets valid.`);
}

function day4_step2() {}

export function day4() {
  runMeasured("Day 4 - Step 1", day4_step1);
}
