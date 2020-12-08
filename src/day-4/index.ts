import { inputDay4 } from "./input";

const requiredFields = [
  "byr", //(Birth Year)
  "iyr", //(Issue Year)
  "eyr", //(Expiration Year)
  "hgt", //(Height)
  "hcl", //(Hair Color)
  "ecl", //(Eye Color)
  "pid", //(Passport ID)
  "cid", //(Country ID)
];

function parseInput(input: string) {
  const chunks = input.split("\n\n");
  console.log(chunks);
}

export function day4() {
  const parsedInput = parseInput(inputDay4);
}
