export const stopwatch = () => {
  const start = new Date();
  return () => {
    const end = new Date();
    return {
      start,
      end,
      diff: `${end.getTime() - start.getTime()}ms`,
    };
  };
};

export function runMeasured(name: string, fn: Function) {
  let sw = stopwatch();
  console.log(name);
  fn();
  const stats = sw();
  console.log(`Execution took ${stats.diff}`);
}

export function multiply(numbers: number[]) {
  return numbers.reduce((p, c) => p * c, 1);
}
