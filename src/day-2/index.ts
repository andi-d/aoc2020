import { stopwatch } from "../stopwatch";
import { input as rawInput } from "./input";

interface Line {
  lowerBound: number;
  upperBound: number;
  letter: string;
  password: string;
}

function parseInput(input: string): Line[] {
  const lines = input
    .trim()
    .split("\n")
    .map(
      (line): Line => {
        const [pattern, password] = line.split(": ");
        const [range, letter] = pattern.split(" ");
        const [lowerBound, upperBound] = range.split("-").map(Number);
        return {
          letter,
          lowerBound,
          upperBound,
          password,
        };
      }
    );
  return lines;
}

function isLineValid_step1(line: Line): boolean {
  const occurences = line.password
    .split("")
    .filter((char) => char === line.letter).length;
  return occurences >= line.lowerBound && occurences <= line.upperBound;
}

function isLineValid_step2(line: Line): boolean {
  return (
    ((line.password[line.lowerBound - 1] === line.letter) as any) !==
    ((line.password[line.upperBound - 1] === line.letter) as any)
  );
}

function day2_step1() {
  const input = parseInput(rawInput);
  const validLines = input.filter(isLineValid_step1);
  console.log(`${validLines.length} passwords are valid.`);
}

function day2_step2() {
  const input = parseInput(rawInput);
  const validLines = input.filter(isLineValid_step2);
  console.log(`${validLines.length} passwords are valid.`);
}

export function day2() {
  let sw = stopwatch();
  console.log("Day 2 - Step 1:");
  day2_step1();
  console.log(sw());

  sw = stopwatch();
  console.log("Day 2 - Step 2:");
  day2_step2();
  console.log(sw());
}
