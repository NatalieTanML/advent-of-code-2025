import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day06');
  const matrix = input.split('\n').map((row) => row.split(/\s+/));
  let totalSum = 0;

  for (let j = 0; j < matrix[0].length; j++) {
    const operator = matrix[matrix.length - 1][j];
    const nums = matrix.slice(0, -1).map((row) => parseInt(row[j]));

    totalSum += nums.reduce((acc, curr) =>
      operator === '+' ? acc + curr : acc * curr
    );
  }

  console.log(totalSum);
  return totalSum;
}

part1();
