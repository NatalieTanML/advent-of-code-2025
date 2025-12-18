import { readInput } from '../utils/readInput';

export function part1(): number {
  const input = readInput('day05').split('\n\n', 2);
  const ranges = input[0]
    .split('\n')
    .map((line) => line.split('-', 2).map(Number));
  const ids = input[1].split('\n').map(Number);
  let numFresh = 0;

  for (const id of ids) {
    if (ranges.some((range) => range[0] <= id && id <= range[1])) numFresh++;
  }

  console.log(numFresh);
  return numFresh;
}

part1();
