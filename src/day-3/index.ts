import { multiply, runMeasured } from "../utils";
import { inputDay3 } from "./input";

// Map is reserved...
type Chart = ("tree" | "blank")[][];
type Point = { x: number; y: number };

function parseMap(input: string): Chart {
  const res = input
    .trim()
    .split("\n")
    .map((line) =>
      line
        .split("")
        .map((tile): "blank" | "tree" => (tile === "." ? "blank" : "tree"))
    );
  return res;
}

function isTree(map: Chart, { x, y }: Point): boolean {
  return map[y][x] == "tree";
}

function getTreesHit(map: Chart, direction: Point) {
  const width = map[0].length;
  const heigth = map.length;
  const currentPosition: Point = Object.assign({}, direction);

  let hits = 0;

  while (currentPosition.y < heigth) {
    if (isTree(map, currentPosition)) {
      hits++;
    }
    currentPosition.x = (currentPosition.x + direction.x) % width;
    currentPosition.y += direction.y;
  }
  return hits;
}

function day3_step1() {
  const map = parseMap(inputDay3);
  const direction: Point = { x: 3, y: 1 };
  const hits = getTreesHit(map, direction);
  console.log(
    `Trees hit with direction x:${direction.x} y:${direction.y} => ${hits}`
  );
}

function day3_step2() {
  const map = parseMap(inputDay3);
  const directions: Point[] = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];

  const treesHitByDirection = directions.map((direction) => ({
    direction,
    hits: getTreesHit(map, direction),
  }));
  for (const { direction, hits } of treesHitByDirection) {
    console.log(
      `Trees hit with direction x:${direction.x} y:${direction.y} => ${hits}`
    );
  }
  console.log(
    "Results multiplied: " + multiply(treesHitByDirection.map((r) => r.hits))
  );
}

export function day3() {
  runMeasured("Day 3 - Step 1:", day3_step1);
  runMeasured("Day 3 - Step 2:", day3_step2);
}
